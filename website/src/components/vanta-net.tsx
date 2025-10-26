'use client'

import { useEffect, useRef, useState } from 'react'

export default function VantaNet({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      // Dynamically import Vanta and Three.js to avoid SSR issues
      Promise.all([
        import('vanta/dist/vanta.net.min'),
        import('three')
      ]).then(([VANTA, THREE]) => {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xe3563f,
            backgroundColor: 0x200c41,
            points: 10,
            maxDistance: 20,
            spacing: 15,
            showDots: true
          })
        )
      })
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={vantaRef} className="relative w-full h-full">
      {children}
    </div>
  )
}
