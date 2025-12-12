"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const ProjectCardV3 = ({ project }) => {
  const { name, description, tags, code, demo, image, role } = project;

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1443] via-[#0d1224] to-[#1a1443] border border-[#2a2e5a] hover:border-violet-500 transition-all duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,242,179,0.1),transparent_50%)]" />
      </div>

      {/* Image Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image?.src || placeholder}
          alt={name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1224]/60 to-[#0d1224]" />
        
        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-white hover:scale-110 transition-transform duration-200 shadow-lg"
              title="Live Demo"
            >
              <FaExternalLinkAlt className="text-sm" />
            </Link>
          )}
          {code && (
            <Link
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1443] border-2 border-[#16f2b3] rounded-full text-[#16f2b3] hover:bg-[#16f2b3] hover:text-[#0d1224] transition-all duration-200 shadow-lg"
              title="View Code"
            >
              <FaGithub className="text-sm" />
            </Link>
          )}
        </div>

        {/* Project Title on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
            {name}
          </h3>
          {role && (
            <span className="inline-block px-3 py-1 text-xs font-semibold text-pink-500 bg-pink-500/20 rounded-full border border-pink-500/30">
              {role}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {(tags || project.tools || []).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs font-medium text-[#16f2b3] bg-[#16f2b3]/10 rounded-lg border border-[#16f2b3]/20 hover:bg-[#16f2b3]/20 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Action Links */}
        <div className="flex items-center justify-between pt-4 border-t border-[#2a2e5a]">
          <div className="flex gap-4">
            {demo && (
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#16f2b3] hover:text-pink-500 transition-colors duration-200"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span>Live Demo</span>
              </Link>
            )}
            {code && (
              <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#16f2b3] hover:text-pink-500 transition-colors duration-200"
              >
                <FaGithub />
                <span>Source Code</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardV3;

