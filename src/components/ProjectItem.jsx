// src/components/ProjectItem.jsx

function ProjectItem({ data }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        {data.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{data.description}</p>
      <ul className="flex flex-wrap gap-2 mt-3">
        {data.tech.map((tech, index) => (
          <li
            key={index}
            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 text-sm rounded-full"
          >
            {tech}
          </li>
        ))}
      </ul>

      {data.link && (
        <a
          href={data.link}
          className="inline-block mt-4 text-blue-600 dark:text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

export default ProjectItem;
