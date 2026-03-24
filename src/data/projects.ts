import TracQuizImg from "@/data/images/tracQuizlogo.png";
import TracQuizLightImg from "@/data/images/tracQuizlogo_light.png";
import PomodoroImg from "@/data/images/PomodoroTimer.png";
import NotDogsImg from "@/data/images/NotDogsBoxFolded.png";
import PortfolioBanner from "@/data/images/portfoliobanner.png";
import SummateImg from "@/data/images/summate.png";
import RandomCoffeeImg from "@/data/images/randomCoffeelogo.png";
import RandomCoffeeLightImg from "@/data/images/randomCoffeeLight.png";
import SunnyFyImg from "@/data/images/sunnyfylogo.png";
import SunnyFyLightImg from "@/data/images/sunnyfylogo_light.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageDark?: string;
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
    imageDark: TracQuizLightImg,
    concepts: ["React", "Vite", "Firebase", "MVP Architecture"],
    link: "https://musicquiz-852ea.web.app/",
  },
  {
    id: "2",
    title: "Hiking Planner",
    description:
      "The project centered around the concept of interdependence in hiking. Using the Double Diamond design framework, we explored logistical challenges faced by hikers, such as preparation and borrowing items.",
    image: SummateImg,
    concepts: ["Figma", "Double Diamond", "Interaction Design"],
    link: "https://www.figma.com/proto/JI7gso7NeuaHWgyLZkHq8L/Summate?node-id=0-1&t=ILEH0shLTm3kZXvw-1",
  },
  {
    id: "6",
    title: "Coffee Meeting Generator",
    description:
      "A web app designed to foster cross-departmental connections in the workplace by randomly pairing colleagues for coffee meetings. I developed this as a side project during my time at the European Parliament after HR expressed a need for a tool to help employees get to know people outside their own teams.",
    image: RandomCoffeeImg,
    imageDark: RandomCoffeeLightImg,
    concepts: ["React", "Firebase", "HR Tech", "Community Building"],
    link: "https://random-coffee-generator-881ce.web.app",
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
    image: SunnyFyImg,
    imageDark: SunnyFyLightImg,
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
