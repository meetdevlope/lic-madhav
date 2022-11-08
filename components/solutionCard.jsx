import Image from 'next/image'
import React from 'react'

const SolutionCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="relative h-[400px] w-[350px] m-4 rounded-md overflow-hidden [&>div]:hover:translate-y-0 [&>div]:hover:bg-[rgba(0,0,0,0.8)] [&>div>div>h3]:hover:text-brand-light">
      <Image
        layout="fill"
        alt="card-image"
        src={imgSrc}
        className="rounded-md"
      />
      <div className="bg-gradient-to-t from-black via-black w-full h-full absolute flex flex-col justify-end p-8 rounded-md translate-y-36 transition-all duration-200">
        <div>
          <h3 className="text-white text-3xl mb-4">{title} </h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard