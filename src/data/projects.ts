export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  concepts: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern shopping experience with real-time inventory management and seamless checkout flow.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    concepts: ["React", "TypeScript", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Data visualization tool for tracking key metrics with interactive charts and custom reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    concepts: ["D3.js", "Node.js", "PostgreSQL", "REST API"],
    link: "#",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team workflows.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    concepts: ["React", "Firebase", "Drag & Drop", "WebSockets"],
    link: "#",
  },
  {
    id: "4",
    title: "Weather Application",
    description: "Beautiful weather forecasting app with location-based data and animated visualizations.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    concepts: ["API Integration", "Geolocation", "CSS Animations", "PWA"],
    link: "#",
  },
];
