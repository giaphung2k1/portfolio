"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const ProjectCardV1 = ({ project }) => {
  const { name, description, tags, code, demo, image, role } = project;

  return (
    <div className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1443] to-[#0d1224] border border-[#2a2e5a] hover:border-violet-500 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20">
      {/* Image Container */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image?.src || placeholder}
          alt={name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: 'top center' }}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-[#0d1224]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg text-white font-semibold hover:scale-110 transition-transform duration-200 shadow-lg"
            >
              <FaExternalLinkAlt />
              Live Demo
            </Link>
          )}
          {code && (
            <Link
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#1a1443] border-2 border-[#16f2b3] rounded-lg text-[#16f2b3] font-semibold hover:bg-[#16f2b3] hover:text-[#0d1224] transition-all duration-200 shadow-lg"
            >
              <FaGithub />
              View Code
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#16f2b3] transition-colors duration-300">
            {name}
          </h3>
          {role && (
            <span className="px-3 py-1 text-xs font-semibold text-pink-500 bg-pink-500/10 rounded-full border border-pink-500/20">
              {role}
            </span>
          )}
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {(tags || project.tools || []).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-[#16f2b3] bg-[#16f2b3]/10 rounded-md border border-[#16f2b3]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardV1;

