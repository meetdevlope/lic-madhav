import Image from "next/image";
import React from "react";
import ButtonComponent from "./buttonComponent";

const HeroSection = () => {
  return (
    <section className="py-10">
      <div className="container flex justify-center flex-wrap gap-20 py-4 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col justify-center tab:items-start items-center">
          <h1>Lorem ipsum dolor sit amet consetur.</h1>
          <p className="mt-8 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsum quibusdam itaque cum dolorem aspernatur. Assumenda, eos quae?
            Est voluptates animi distinctio vero, eius rem ipsam! Sint ipsum
            obcaecati sed sapiente vitae odio quo veniam itaque atque, earum
            corporis pariatur.{" "}
          </p>
          <div className="flex gap-8">
            <ButtonComponent appearance={"pri"} buttonText={`Let's Talk`} />
            <ButtonComponent appearance={"pri-out"} buttonText={`Know More`} />
          </div>
        </div>
        <div className="relative basis-[500px] aspect-h-image h-auto rounded-3xl overflow-hidden z-0">
          <Image
            priority
            src="https://i.ibb.co/tZKng9L/portrait.png"
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"top"}
            alt="subject-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
