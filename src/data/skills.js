// Levels are intentionally honest for an early-stage student — never "expert".
// One of: "Familiar", "Intermediate", "Learning", "Exploring"

export const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    skills: [
      { name: "C++", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "HTML", level: "Familiar" },
      { name: "CSS", level: "Familiar" },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    skills: [
      { name: "Frontend Development", level: "Intermediate" },
      { name: "Responsive Design", level: "Intermediate" },
      { name: "Node.js", level: "Learning" },
      { name: "REST APIs", level: "Learning" },
      { name: "Full-Stack Development", level: "Learning" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", level: "Familiar" },
      { name: "GitHub", level: "Familiar" },
      { name: "VS Code", level: "Familiar" },
      { name: "Visual Studio", level: "Familiar" },
      { name: "cPanel", level: "Familiar" },
    ],
  },
  {
    id: "learning",
    title: "Currently Learning",
    skills: [
      { name: "Advanced JavaScript", level: "Learning" },
      { name: "Backend Development", level: "Learning" },
      { name: "Databases", level: "Learning" },
      { name: "Data Structures & Algorithms", level: "Learning" },
      { name: "Artificial Intelligence", level: "Exploring" },
      { name: "Machine Learning", level: "Exploring" },
      { name: "Software Engineering", level: "Learning" },
    ],
  },
];

export const levelWeight = {
  Familiar: 0.55,
  Intermediate: 0.7,
  Learning: 0.4,
  Exploring: 0.3,
};
