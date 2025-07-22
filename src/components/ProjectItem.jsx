// src/components/ProjectItem.jsx
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectItem({ data }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 group">

      {/* Nếu có ảnh thumbnail thì hiện ra */}
      {data.image && (
        <img
          src={data.image}
          alt={`${data.title} thumbnail`}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:underline">
        {data.title}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {data.description}
      </p>

      <ul className="flex flex-wrap gap-2 mb-4">
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
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:underline text-sm font-medium"
        >
          View Project <FaExternalLinkAlt className="text-xs" />
        </a>
      )}
    </div>
  );
}

export default ProjectItem;
