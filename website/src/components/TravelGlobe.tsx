"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type Place = {
  name: string;
  coords: [number, number]; // [lat, lon]
  notes?: string;
  photos?: string[];
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export default function TravelGlobe({
  places,
  className = "",
  autoRotate = true
}: { places: Place[]; className?: string; autoRotate?: boolean }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const rotateAnim = useRef<number | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Check if token exists
    if (!mapboxgl.accessToken) {
      console.error("Mapbox token missing. Add NEXT_PUBLIC_MAPBOX_TOKEN to .env.local");
      return;
    }

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-122.3321, 47.6062], // start around Seattle [lon, lat]
      zoom: 1.8,
      projection: { name: "globe" } as any,
      antialias: true
    });
    mapInstance.current = map;

    map.on("style.load", () => {
      // Subtle atmosphere
      map.setFog({
        color: "rgb(186,210,235)",
        "high-color": "rgb(36,92,223)",
        "space-color": "rgb(11,11,25)",
        "horizon-blend": 0.02
      } as any);

      // Pins + popups
      places.forEach((p) => {
        const el = document.createElement("div");
        el.className =
          "w-3 h-3 rounded-full ring-2 ring-white/60 bg-[#0B57D0] shadow cursor-pointer hover:scale-110 transition-transform";

        const popupHtml = `
          <div style="max-width:220px; color: #1e293b;">
            <div style="font-weight:600; font-size: 15px; margin-bottom: 4px; color: #0f172a;">${p.name}</div>
            ${p.notes ? `<p style="margin-top:4px;font-size:13px;color:#475569;line-height:1.4;">${p.notes}</p>` : ""}
            ${
              p.photos?.[0]
                ? `<img src="${p.photos[0]}" alt="${p.name}" style="margin-top:8px;border-radius:8px;width:100%;height:auto"/>`
                : ""
            }
          </div>
        `;

        const popup = new mapboxgl.Popup({ offset: 8, closeButton: false }).setHTML(popupHtml);

        new mapboxgl.Marker(el)
          .setLngLat([p.coords[1], p.coords[0]]) // [lon, lat]
          .setPopup(popup)
          .addTo(map);
      });

      // Gentle auto-rotate (skip on mobile)
      const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
      if (autoRotate && !isMobile) {
        const spin = () => {
          if (!map || document.hidden) {
            rotateAnim.current = requestAnimationFrame(spin);
            return;
          }
          const bearing = map.getBearing();
          map.setBearing(bearing + 0.02); // slow spin
          rotateAnim.current = requestAnimationFrame(spin);
        };
        rotateAnim.current = requestAnimationFrame(spin);

        const handleVisibility = () => {
          if (document.hidden && rotateAnim.current) {
            cancelAnimationFrame(rotateAnim.current);
            rotateAnim.current = null;
          } else if (!document.hidden && !rotateAnim.current) {
            rotateAnim.current = requestAnimationFrame(spin);
          }
        };
        document.addEventListener("visibilitychange", handleVisibility);

        // Cleanup visibility listener
        return () => {
          document.removeEventListener("visibilitychange", handleVisibility);
        };
      }
    });

    return () => {
      if (rotateAnim.current) cancelAnimationFrame(rotateAnim.current);
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [places, autoRotate]);

  // Fallback if no token
  if (!mapboxgl.accessToken) {
    return (
      <div className={`w-full h-[520px] rounded-2xl overflow-hidden shadow-lg bg-slate-800 flex items-center justify-center ${className}`}>
        <div className="text-center px-6">
          <p className="text-white text-lg font-semibold mb-2">Globe Map Unavailable</p>
          <p className="text-white/70 text-sm">
            Mapbox token not configured. See the text list below for places I&apos;ve lived.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      className={`w-full h-[520px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg ${className}`}
      aria-label="3D globe of places I've lived"
      role="img"
    />
  );
}
