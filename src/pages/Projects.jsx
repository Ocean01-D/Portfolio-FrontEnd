import ProjectItem from "../components/ProjectItem";

function Projects() {
  // Mảng dữ liệu dự án
  const projects = [
    {
      id: 1,
      title: "Bookstore Website",
      description: "A simple bookstore with CRUD using NodeJS and MongoDB.",
      tech: ["NodeJS", "Express", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "AI Essay Grader",
      description: "An automatic essay scoring tool built with Flask and AI APIs.",
      tech: ["Flask", "OpenAI", "Bootstrap"],
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "This current React portfolio website.",
      tech: ["React", "TailwindCSS"],
      link: "#",
    },
  ];

  return (
    <section className="px-4">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
