# Portfolio Website

Personal portfolio of **Cyrill Kiel Musngi**, Full Stack Software Engineer, built with React and Vite. It showcases professional experience, projects, technical skills, and contact details.

## Features

- Single-page layout with Hero, Strengths, Experience, Skills, Projects, Education, and Contact sections
- Light and dark mode: follows the system setting by default, with a header toggle that remembers the choice
- Brand logos on skill chips and icons on strength cards and skill categories
- Scroll-reveal animations and hover effects, disabled for visitors who prefer reduced motion
- Responsive layout down to phone widths
- Downloadable resume from the header

## Tech Stack

- React 19
- Vite
- Plain CSS with design tokens (no CSS framework)
- [Lucide React](https://lucide.dev) for UI icons
- [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons, Font Awesome) for tech and brand logos
- Google Fonts: Space Grotesk, Inter, and JetBrains Mono

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal to view the site.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - build the production bundle into `dist/`
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint checks

## Project Structure

- `src/data.js` - all portfolio content: strengths, jobs, skills, projects, education, and contact info
- `src/components/` - one component per page section, plus `Section.jsx` (the shared section wrapper)
- `src/styles.css` - global styles, theme tokens, and responsive rules
- `src/App.jsx` - page layout and the scroll-reveal hook
- `index.html` - page metadata, font loading, and the script that applies the saved theme
- `public/` - static assets, including `resume.pdf` and the favicon

## Updating Content

Most edits only need `src/data.js`:

- **Experience**: add an entry to `jobs`. Newest goes first.
- **Projects**: add an entry to `projects`. `link` is optional. Set `status` (e.g. `"In progress"`) to show a badge.
- **Skills**: add the name to a `skillGroups` category. Give it an icon and brand color in the `skillIcons` map in `src/components/Skills.jsx`. Skills without an entry still show, just without an icon.
- **Contact**: update `contact`. The LinkedIn button appears once `linkedin` is set to a real URL.

Other assets:

- **Resume**: replace `public/resume.pdf`.
- **Profile photo**: add `public/profile.jpg` and follow the comment above the `Avatar` component in `src/components/Hero.jsx`.

## Contact

- Email: [ckmusngi@gmail.com](mailto:ckmusngi@gmail.com)
- Or use the contact section on the site
