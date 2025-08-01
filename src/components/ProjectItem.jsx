// src/components/ProjectItem.jsx
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectItem({ data }) {
  return (
    <div className="bg-[#1f2937] border border-gray-700 rounded-xl p-6 shadow hover:shadow-xl transition duration-300 group">

      {/* Ảnh thumbnail nếu có */}
      {data.image && (
        <img
          src={data.image}
          alt={`${data.title} thumbnail`}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:underline">
        {data.title}
      </h3>

      <p className="text-gray-300 mb-4 leading-relaxed">
        {data.description}
      </p>

      <ul className="flex flex-wrap gap-2 mb-4">
        {data.tech.map((tech, index) => (
          <li
            key={index}
            className="bg-gray-700 text-gray-100 px-3 py-1 text-sm rounded-full"
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
          className="inline-flex items-center gap-2 text-blue-400 hover:underline text-sm font-medium"
        >
          View Project <FaExternalLinkAlt className="text-xs" />
        </a>
      )}
    </div>
  );
}

export default ProjectItem;
