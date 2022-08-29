import React from 'react';

const alignSelf = (index) => {
  if (index === 0) {
    return 'lg:self-start';
  } else if (index === 1) {
    return 'lg:self-center';
  } else if (index === 2) {
    return 'lg:self-end';
  }
};

const Testimonial = ({ testimony, index }) => {
  if (testimony === undefined) return;
  const { img, name, verifiedBuyer, review } = testimony;

  return (
    <section
      className={
        'my-4 rounded-lg bg-fuchsia-900 p-8 lg:max-h-[220px] ' +
        alignSelf(index)
      }
    >
      <div className="flex gap-4">
        <div className="w-12 overflow-hidden rounded-full">
          <img src={img} alt={name} />
        </div>
        <div className="">
          <p className="text-lg font-bold text-slate-50">{name}</p>
          <p className="-mt-1 text-sm text-fuchsia-400">
            {verifiedBuyer && 'Verified Buyer'}
          </p>
        </div>
      </div>
      <p className="mt-4 font-medium text-slate-100">"{review}"</p>
    </section>
  );
};

export default Testimonial;
