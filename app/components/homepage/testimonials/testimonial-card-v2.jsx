"use client";

import Image from 'next/image';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const TestimonialCardV2 = ({ testimonial }) => {
  const { name, position, company, image, rating, testimonial: text, project } = testimonial;

  return (
    <div className="group relative w-full overflow-hidden rounded-xl bg-[#0d1224] border border-[#1a1443] hover:border-violet-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Header with Avatar and Info */}
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-violet-500/30 group-hover:border-violet-500 transition-colors duration-300 flex-shrink-0">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
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
          <div className="text-violet-500/20 group-hover:text-violet-500/40 transition-colors duration-300">
            <FaQuoteRight size={24} />
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xs" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-300 text-sm leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>

        {/* Project Badge */}
        {project && (
          <div className="pt-2">
            <span className="px-3 py-1 text-xs font-medium text-violet-400 bg-violet-500/10 rounded-md border border-violet-500/20">
              {project}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCardV2;

