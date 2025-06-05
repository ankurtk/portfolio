export const skillsData = {
  categories: [
    {
      title: "Frontend Development",
      icon: "<>",
      skills: [
        { name: "React", icon: "reactjs", proficiency: "Expert" },
        { name: "TypeScript", icon: "typescript", proficiency: "Advanced" },
        { name: "Next.js", icon: "nextjs2", proficiency: "Advanced" },
        { name: "Tailwind CSS", icon: "tailwindcss", proficiency: "Expert" },
        { name: "JavaScript", icon: "js", proficiency: "Expert" },
        { name: "HTML5", icon: "html5", proficiency: "Expert" },
        { name: "CSS3", icon: "css3", proficiency: "Expert" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙",
      skills: [
        { name: "Node.js", icon: "nodejs", proficiency: "Expert" },
        { name: "Python", icon: "python", proficiency: "Advanced" },
        { name: "Express.js", icon: "graphql", proficiency: "Expert" },
        { name: "FastAPI", icon: "graphql", proficiency: "Advanced" },
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁",
      skills: [
        { name: "MongoDB", icon: "mongodb", proficiency: "Advanced" },
        { name: "PostgreSQL", icon: "postgresql", proficiency: "Advanced" },
        { name: "Firebase", icon: "firebase", proficiency: "Advanced" },
        { name: "MySQL", icon: "mysql", proficiency: "Advanced" },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠",
      skills: [
        { name: "Git", icon: "git", proficiency: "Expert" },
        { name: "GitHub", icon: "github", proficiency: "Expert" },
        { name: "VS Code", icon: "vscode", proficiency: "Expert" },
        { name: "Jest", icon: "jest", proficiency: "Advanced" },
        { name: "npm", icon: "npm", proficiency: "Expert" },
        { name: "Linux", icon: "linux", proficiency: "Intermediate" }
      ]
    }
  ]
};

// Keep your old structure for backwards compatibility if needed elsewhere
export const legacySkillsData = {
  technical: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 }
  ],
  professional: [
    { name: "Problem Solving", level: 95 },
    { name: "Team Collaboration", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Project Management", level: 80 }
  ],
  tools: [
    { name: "Git", icon: "🔧" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
    { name: "Docker", icon: "🐳" }
  ]
};