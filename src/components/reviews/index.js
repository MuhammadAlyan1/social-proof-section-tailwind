import React from 'react';
import FiveStarReviews from './FiveStarReviews';
import Heading from './Heading';
import Testimonial from './Testimonial';
import { fiveStarReviews } from '../../data.js';
import { testimonials } from '../../data.js';

const Reviews = () => {
  return (
    <div className="p-4 lg:max-w-[1440px]">
      <section className="lg:flex lg:justify-between">
        <div className="basis-1/2 md:mx-auto md:max-w-[600px] lg:mx-0">
          <Heading />
        </div>
        <div className="basis-1/2 md:mx-auto md:max-w-[600px] lg:mx-0 lg:flex lg:max-w-[500px] lg:flex-col">
          {fiveStarReviews.map((review, index) => {
            return (
              <FiveStarReviews
                key={index + review}
                review={review}
                index={index}
              />
            );
          })}
        </div>
      </section>
      <section className="md:mx-auto md:max-w-[600px] lg:mt-8 lg:flex lg:min-h-[280px] lg:max-w-[1440px] lg:gap-4">
        {testimonials.map((testimony, index) => {
          return (
            <Testimonial
              key={index + testimony.name}
              testimony={testimony}
              index={index}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Reviews;
