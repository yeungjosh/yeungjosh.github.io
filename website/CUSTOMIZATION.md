# Portfolio Customization Guide

This portfolio is now built with a **data-driven, modular architecture** that separates content from code. You can customize all content by editing JSON files without touching React components.

## Quick Start

**To update your portfolio content:**

1. Edit JSON files in `src/data/`
2. Run `npm run build` to verify changes
3. Commit and push to deploy

That's it! No React/TypeScript knowledge required for content updates.

---

## Content Files

All customizable content lives in `src/data/`:

### Personal Information
**File:** `src/data/personal.json`

```json
{
  "name": "Your Name",
  "title": "Your Job Title",
  "bio": "Short bio describing what you do",
  "profileImage": "/your-photo.jpg",
  "initials": "YN"
}
```

- `profileImage`: Place image in `website/public/`
- `initials`: Used in header logo

### Work Experience
**File:** `src/data/work-experience.json`

Array of work experiences:

```json
[
  {
    "id": "unique-id",
    "company": "Company Name",
    "role": "Your Role",
    "team": "Team/Department (optional)",
    "location": "City, State",
    "startDate": "Mon YYYY",
    "endDate": "Mon YYYY or Present",
    "bullets": [
      "Achievement 1 with metrics",
      "Achievement 2 with impact"
    ],
    "technologies": ["Tech1", "Tech2"]
  }
]
```

**Tips:**
- Use `"Present"` for current positions
- Include metrics in bullets (%, $, user counts)
- `technologies` array is optional

### Education
**File:** `src/data/education.json`

```json
[
  {
    "id": "school-id",
    "school": "University Name",
    "degree": "Degree Type",
    "field": "Major/Field",
    "location": "City, State",
    "startDate": "YYYY",
    "endDate": "YYYY",
    "gpa": "3.XX",
    "honors": ["Honor 1", "Honor 2"],
    "description": "Activities, clubs, etc."
  }
]
```

### Projects
**File:** `src/data/projects.json`

Most complex file - contains both card preview and modal details:

```json
[
  {
    "id": "project-id",
    "title": "Project Name",
    "shortDescription": "Brief 1-2 sentence description for card",
    "emoji": "🚀",
    "thumbnail": "/project-image.png",
    "tags": ["React", "Python", "AWS"],
    "links": {
      "github": "https://github.com/...",
      "live": "https://...",
      "article": "/blog/...",
      "demo": "https://..."
    },
    "modal": {
      "fullDescription": "Detailed overview",
      "features": [
        "Feature 1 with details",
        "Feature 2 with metrics"
      ],
      "technicalDetails": "Architecture, performance, scale details",
      "problem": "What problem did this solve?",
      "solution": "How did you solve it?",
      "impact": "What was the result?",
      "technologies": ["Full", "Tech", "Stack"],
      "researchContext": {
        "institution": "Lab Name",
        "institutionUrl": "https://...",
        "advisors": [
          { "name": "Prof. Name", "url": "https://..." }
        ]
      }
    }
  }
]
```

**Visual Options:**
- Use `emoji` for simple icon (no thumbnail needed)
- Use `thumbnail` for screenshot/image (place in `public/`)
- Omit both for text-only card

**Modal Sections (all optional):**
- `features`: Bulleted feature list
- `technicalDetails`: Architecture paragraph
- `problem/solution/impact`: Structured narrative
- `researchContext`: For academic projects

### Skills
**File:** `src/data/skills.json`

Categorized skill badges:

```json
[
  {
    "id": "category-id",
    "name": "Category Name",
    "emoji": "💻",
    "skills": ["Skill1", "Skill2", "Skill3"]
  }
]
```

**Default categories:**
- Languages (💻)
- Frontend (🎨)
- Backend & Databases (⚙️)
- ML & AI (🤖)
- Mobile (📱)
- Cloud & DevOps (☁️)
- Core Skills (⚡)

### Hobbies
**File:** `src/data/hobbies.json`

```json
[
  {
    "id": "hobby-id",
    "title": "Hobby Name",
    "emoji": "🎾",
    "description": "What you enjoy about it",
    "details": ["Detail 1", "Detail 2"]
  }
]
```

**Special handling for chess:**
- If `id: "chess"`, can include rating and profile links in `details`

### Navigation
**File:** `src/data/navigation.json`

Header navigation links:

```json
[
  { "label": "About", "href": "#about" },
  { "label": "Projects", "href": "#projects" }
]
```

**Section IDs:**
- `#about` - Hero
- `#work` - Experience
- `#education` - Education
- `#projects` - Projects
- `#skills` - Skills
- `#hobbies` - Hobbies
- `#places` - Places Globe
- `#contact` - Contact

### Contact
**File:** `src/data/contact.json`

```json
{
  "email": "your.email@domain.com",
  "socialLinks": [
    {
      "platform": "GitHub",
      "url": "https://github.com/username",
      "icon": "github"
    }
  ]
}
```

---

## Advanced Customization

### Adding/Removing Sections

**File:** `src/components/component.tsx`

Sections are imported and rendered in order:

```tsx
<main className="flex-1 pt-16">
  <HeroSection personal={personal} />
  <WorkExperienceSection workExperience={workExperience} />
  {/* Add or remove sections here */}
  <ContactSection contact={contact} />
</main>
```

**To add a section:**
1. Create component in `src/sections/YourSection.tsx`
2. Import in `component.tsx`
3. Add to render tree

**To remove a section:**
- Comment out or delete the import/render line

### Customizing Colors

**File:** `src/app/globals.css`

Color tokens defined under `:root` (light) and `.dark` (dark mode):

```css
:root {
  --primary: 142 76% 36%;  /* Green accent */
  --secondary: ...
}

.dark {
  --primary: ...
}
```

**Common changes:**
- Primary accent: Search for `green-600` in components, replace with your color
- Gradient: Search for `gradient-text` class
- Card backgrounds: `bg-slate-50` / `dark:bg-slate-800`

### Modifying Layout

Section components in `src/sections/` control layout:

- `HeroSection.tsx`: Hero layout (grid, flex, image position)
- `ProjectsSection.tsx`: Project grid (`md:grid-cols-2`)
- `SkillsSection.tsx`: Skills grid (`lg:grid-cols-3`)

**Example:** Change projects to 3 columns:

```tsx
// In ProjectsSection.tsx
<div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
```

### Adding New Project Types

If you need custom project cards:

1. Edit `src/components/ProjectCard.tsx` for card appearance
2. Edit `src/components/ProjectModal.tsx` for modal layout
3. Add new fields to `src/types/portfolio.ts` `Project` interface

---

## File Structure Reference

```
website/src/
├── data/                    # ← EDIT THESE FOR CONTENT
│   ├── personal.json
│   ├── work-experience.json
│   ├── education.json
│   ├── projects.json
│   ├── skills.json
│   ├── hobbies.json
│   ├── places.json
│   ├── contact.json
│   └── navigation.json
│
├── types/
│   └── portfolio.ts         # TypeScript interfaces
│
├── components/
│   ├── Header.tsx           # Site header
│   ├── ProjectCard.tsx      # Reusable project card
│   ├── ProjectModal.tsx     # Reusable project modal
│   ├── WorkCard.tsx         # Reusable work card
│   ├── component.tsx        # Main orchestrator (imports sections)
│   └── ui/                  # shadcn/ui primitives
│
└── sections/                # Modular page sections
    ├── HeroSection.tsx
    ├── WorkExperienceSection.tsx
    ├── EducationSection.tsx
    ├── ProjectsSection.tsx
    ├── SkillsSection.tsx
    ├── HobbiesSection.tsx
    ├── PlacesGlobeSection.tsx
    └── ContactSection.tsx
```

---

## Deployment

### GitHub Pages (Automatic)

1. Edit JSON files in `src/data/`
2. Commit and push to `master` branch
3. GitHub Actions runs build automatically
4. Site deploys to `https://username.github.io/`

### Local Development

```bash
cd website
npm run dev       # Start dev server at localhost:3000
npm run build     # Test production build
npm run lint      # Check for issues
```

---

## Template for Friends

To create a portfolio for someone else:

1. **Fork/clone repo**
2. **Update all JSON files** in `src/data/`
3. **Replace images** in `public/`:
   - `profile_pic.jpg`
   - `bayview.jpeg` (or remove from WorkExperienceSection)
   - Project screenshots
4. **Update repo name** in GitHub settings
5. **Enable GitHub Pages** in repo settings
6. **Update README** with new owner info

**Optional:**
- Customize colors in `globals.css`
- Add/remove sections in `component.tsx`
- Modify PlacesGlobeSection or remove Mapbox dependency

---

## FAQ

**Q: Do I need to know React/TypeScript to edit content?**
A: No! Just edit the JSON files. TypeScript ensures your data is valid.

**Q: How do I add a new project?**
A: Add a new object to `src/data/projects.json` following the structure above.

**Q: Can I change the color scheme?**
A: Yes, edit `src/app/globals.css` for design tokens, or search/replace `green-600` in components.

**Q: What if I break something?**
A: Run `npm run build`. TypeScript will show exactly what's wrong.

**Q: Can I remove the Matcha or Blog sections?**
A: Yes, they're commented out in `component.tsx`. Remove them entirely or implement custom versions.

**Q: How do I add a new section?**
A: Create a component in `src/sections/`, create a data file, add the type to `portfolio.ts`, import and render in `component.tsx`.

---

## Getting Help

1. **Build errors:** Run `npm run build` - TypeScript shows exact issues
2. **Type errors:** Check `src/types/portfolio.ts` for required fields
3. **Layout issues:** Inspect section components in `src/sections/`
4. **Styling:** Search codebase for Tailwind classes to modify

For questions, open an issue or refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
