"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const ProjectCardV2 = ({ project }) => {
  const { name, description, tags, code, demo, image, role } = project;

  return (
    <div className="group relative w-full h-full flex flex-col rounded-2xl bg-[#0d1224] border border-[#1a1443] overflow-hidden hover:border-violet-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
      {/* Image with Hover Effect */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image?.src || placeholder}
          alt={name}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-6">
        {/* Header */}
        <div className="mb-3">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#16f2b3] transition-colors duration-300">
              {name}
            </h3>
            {role && (
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                {role}
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(tags || project.tools || []).slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs text-pink-500 bg-pink-500/10 px-2 py-1 rounded border border-pink-500/20"
            >
              {tag}
            </span>
          ))}
          {(tags || project.tools || []).length > 3 && (
            <span className="text-xs text-gray-500">+{(tags || project.tools || []).length - 3}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-3">
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg text-white text-sm font-medium hover:from-pink-600 hover:to-violet-700 transition-all duration-200 hover:scale-105"
            >
              <FaExternalLinkAlt className="text-xs" />
              Demo
            </Link>
          )}
          {code && (
            <Link
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1a1443] border border-[#16f2b3] rounded-lg text-[#16f2b3] text-sm font-medium hover:bg-[#16f2b3] hover:text-[#0d1224] transition-all duration-200 hover:scale-105"
            >
              <FaGithub />
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardV2;

