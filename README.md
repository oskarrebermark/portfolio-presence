# Portfolio Presence

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcase your projects, skills, and professional presence with a clean, professional design.

## 🚀 Features

- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Modern UI Components** - Built with shadcn-ui for polished, accessible components
- **Fast Performance** - Powered by Vite for lightning-fast development and production builds
- **Type-Safe** - Full TypeScript support for robust development
- **Easy Customization** - Simple to modify colors, content, and layout
- **Contact Section** - Integrated contact form for visitor inquiries
- **Projects Showcase** - Highlight your best work with project descriptions and links

## 📋 Prerequisites

- Node.js (v16 or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn

## 🛠️ Getting Started

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd portfolio-presence
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

4. **Build for production**
   ```sh
   npm run build
   ```

## 📁 Project Structure

- `src/components/` - React components (Navbar, HeroSection, ProjectsSection, etc.)
- `src/components/ui/` - shadcn-ui component library
- `src/data/` - Project data and configuration
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `src/pages/` - Page components

## 🎨 Technology Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn-ui
- **Routing**: React Router
- **Form Handling**: React Hook Form + Zod
- **Animations**: Framer Motion

## 📝 Customization

Update your portfolio content in:
- `src/data/projects.ts` - Add your projects
- Component files to customize sections (HeroSection, ContactSection, etc.)
- Tailwind config for color schemes

## 🚢 Deployment

Deploy to your favorite hosting platform:

- **Vercel** - Recommended for Vite projects. Connect your repo and deploy automatically.
- **Netlify** - Easy drag-and-drop or GitHub integration
- **GitHub Pages** - Free hosting for static sites
- **Other platforms** - Most platforms support Node.js projects

For Vercel:
```sh
npm run build
# Then push to GitHub and connect to Vercel
```

## 📜 License

This project is open source and available for personal and commercial use.
