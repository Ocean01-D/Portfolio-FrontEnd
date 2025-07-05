function ProjectItem({ data }) {
  return (
    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{data.title}</h3>
      <p className="text-gray-600">{data.description}</p>
      <ul className="flex flex-wrap gap-2 mt-3">
        {data.tech.map((tech, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={data.link}
        className="inline-block mt-4 text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}

export default ProjectItem;
