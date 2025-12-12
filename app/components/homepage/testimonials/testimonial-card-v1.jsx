"use client";

import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCardV1 = ({ testimonial }) => {
  const { name, position, company, image, rating, testimonial: text, project } = testimonial;

  return (
    <div className="group relative w-full h-full flex flex-col rounded-2xl bg-gradient-to-br from-[#1a1443] to-[#0d1224] border border-[#2a2e5a] hover:border-violet-500 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 p-6">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-violet-500/20 group-hover:text-violet-500/40 transition-colors duration-300">
        <FaQuoteLeft size={40} />
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1 relative z-10">
        &ldquo;{text}&rdquo;
      </p>

      {/* Project Badge */}
      {project && (
        <div className="mb-4">
          <span className="px-3 py-1 text-xs font-semibold text-violet-400 bg-violet-500/10 rounded-full border border-violet-500/20">
            {project}
          </span>
        </div>
      )}

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-[#2a2e5a]">
        <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-violet-500/30 group-hover:border-violet-500 transition-colors duration-300">
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
          <h4 className="text-white font-semibold text-sm group-hover:text-violet-400 transition-colors duration-300">
            {name}
          </h4>
          <p className="text-gray-400 text-xs">
            {position}
          </p>
          <p className="text-gray-500 text-xs">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardV1;

