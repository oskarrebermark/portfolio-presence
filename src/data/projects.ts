import TracQuizImg from "@/data/images/tracQuizlogo.png";
import PomodoroImg from "@/data/images/PomodoroTimer.png";
import NotDogsImg from "@/data/images/NotDogsBoxFolded.png";
import PortfolioBanner from "@/data/images/portfoliobanner.png";

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
    title: "AI-Powered Music Quiz Webapp",
    description:
      "This project was centered on developing a dynamic web app from an original idea. By pasting a playlist, users are able to create a unique quiz that friends could join and play in a 'Kahoot-type' quiz.",
    image: TracQuizImg,
    concepts: ["React", "Vite", "Firebase", "MVP Architecture"],
    link: "https://musicquiz-852ea.web.app/",
  },
  {
    id: "2",
    title: "Hiking Planner",
    description:
      "The project centered around the concept of interdependence in hiking. Using the Double Diamond design framework, we explored logistical challenges faced by hikers, such as preparation and borrowing items.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    concepts: ["Figma", "Double Diamond", "Interaction Design"],
    link: "https://www.figma.com/proto/JI7gso7NeuaHWgyLZkHq8L/Summate?node-id=0-1&t=ILEH0shLTm3kZXvw-1",
  },
  {
    id: "3",
    title: "Pomodoro Timer",
    description:
      "To help me with study breaks I developed a simple pomodoro timer MacOS application using Swift and SwiftUI.",
    image: PomodoroImg,
    concepts: ["Swift", "MacOS", "Pomodoro Method"],
    link: "#",
  },
  {
    id: "4",
    title: "Weather Sonification Webapp",
    description:
      "This project explored the possibility of conveying weather information through soundbites for a more intuitive experience.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    concepts: ["React", "WebSocket", "Sonification", "Weather Data", "SMHI API"],
    link: "#",
  },
  {
    id: "5",
    title: "Product Design",
    description:
      "This project revolved around with designing different elements for an imaginary product of my choosing.",
    image: NotDogsImg,
    concepts: ["Graphic Design", "Branding", "Affinity Designer"],
    link: "#",
  },
];
