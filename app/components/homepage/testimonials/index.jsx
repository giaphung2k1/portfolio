"use client";

import { testimonialsData } from '@/utils/data/testimonials-data';
import TestimonialCardV1 from './testimonial-card-v1';
import TestimonialCardV2 from './testimonial-card-v2';
import TestimonialCardV3 from './testimonial-card-v3';

const Testimonials = () => {
  return (
    <div id='testimonials' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            TESTIMONIALS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="w-full mx-auto">
              <TestimonialCardV3 testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

