'use client';

// Data imports
import personalData from "@/data/personal.json";
import contactData from "@/data/contact.json";
import navigationData from "@/data/navigation.json";
import workExperienceData from "@/data/work-experience.json";
import educationData from "@/data/education.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import hobbiesData from "@/data/hobbies.json";

// Component imports
import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";
import WorkExperienceSection from "@/sections/WorkExperienceSection";
import EducationSection from "@/sections/EducationSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";
import HobbiesSection from "@/sections/HobbiesSection";
import PlacesGlobeSection from "@/sections/PlacesGlobeSection";
import ContactSection from "@/sections/ContactSection";

// Type imports
import {
  PersonalInfo,
  ContactInfo,
  NavLink,
  WorkExperience,
  Education,
  Project,
  SkillCategory,
  Hobby
} from "@/types/portfolio";

export function Component() {
  // Type-safe data
  const personal = personalData as PersonalInfo;
  const contact = contactData as ContactInfo;
  const navigation = navigationData as NavLink[];
  const workExperience = workExperienceData as WorkExperience[];
  const education = educationData as Education[];
  const projects = projectsData as Project[];
  const skills = skillsData as SkillCategory[];
  const hobbies = hobbiesData as Hobby[];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header navigation={navigation} initials={personal.initials} />

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <HeroSection personal={personal} />
        <WorkExperienceSection workExperience={workExperience} />
        <EducationSection education={education} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <HobbiesSection hobbies={hobbies} />
        <PlacesGlobeSection />
        {/* TODO: Add Matcha section if desired */}
        {/* TODO: Add Blog section if desired */}
        <ContactSection contact={contact} />
      </main>
    </div>
  );
}
