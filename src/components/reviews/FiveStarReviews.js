import React from 'react';
import starIcon from '../../assets/images/icon-star.svg';

const alignSelf = (index) => {
  if (index === 0) {
    return 'lg:self-start';
  } else if (index === 1) {
    return 'lg:self-center';
  } else if (index === 2) {
    return 'lg:self-end';
  }
};

const FiveStarReviews = ({ review, index }) => {
  if (review === undefined) return;
  const { name } = review;

  return (
    <section
      className={
        'my-4 rounded-lg bg-fuchsia-50 p-4 lg:flex lg:w-[400px] lg:gap-2 ' +
        alignSelf(index)
      }
    >
      <div className="flex items-center justify-center gap-1">
        <div className="h-5 w-5">
          <img src={starIcon} alt="star" />
        </div>
        <div className="h-5 w-5">
          <img src={starIcon} alt="star" />
        </div>
        <div className="h-5 w-5">
          <img src={starIcon} alt="star" />
        </div>
        <div className="h-5 w-5">
          <img src={starIcon} alt="star" />
        </div>
        <div className="h-5 w-5">
          <img src={starIcon} alt="star" />
        </div>
      </div>
      <div>
        <p className="mx-auto mt-1 w-fit font-bold text-fuchsia-900 lg:-mt-1">
          Rated 5 stars in {name}
        </p>
      </div>
    </section>
  );
};

export default FiveStarReviews;
