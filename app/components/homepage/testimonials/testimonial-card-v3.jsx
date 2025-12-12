"use client";

import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCardV3 = ({ testimonial }) => {
  const { name, position, company, image, rating, testimonial: text, project } = testimonial;

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1443] via-[#0d1224] to-[#1a1443] border border-[#2a2e5a] hover:border-violet-500 transition-all duration-500">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative p-8 space-y-6">
        {/* Quote and Rating Section */}
        <div className="space-y-4">
          <div className="text-violet-500/30 group-hover:text-violet-500/50 transition-colors duration-300">
            <FaQuoteLeft size={32} />
          </div>
          
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-200 text-base leading-relaxed relative z-10">
          {text}
        </p>

        {/* Project Badge */}
        {project && (
          <div className="inline-block">
            <span className="px-4 py-2 text-sm font-semibold text-violet-300 bg-violet-500/10 rounded-lg border border-violet-500/30 group-hover:bg-violet-500/20 transition-colors duration-300">
              {project}
            </span>
          </div>
        )}

        {/* Author Section */}
        <div className="flex items-center gap-4 pt-6 border-t border-[#2a2e5a]">
          <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-violet-500/40 group-hover:border-violet-500 transition-all duration-300 group-hover:scale-110">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-lg group-hover:text-violet-400 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-gray-400 text-sm">
              {position}
            </p>
            <p className="text-gray-500 text-xs">
              {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardV3;

