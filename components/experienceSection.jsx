import React from "react";
import Image from "next/image";
import Counter from "./counter";

const ExperienceSection = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container flex justify-center flex-wrap gap-20 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col justify-center items-center tab:items-start">
            <h3>
              <span className="text-brand">20+</span> Years of Experience
            </h3>{" "}
            <p className="mt-6 mb-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              dignissimos perspiciatis voluptatem nisi quibusdam iste, eius
              consectetur deserunt adipisci harum nam amet odit omnis id! Totam
              nesciunt cumque soluta quibusdam voluptas maiores, aliquid
              necessitatibus accusantium nostrum unde, libero, perferendis
              fugiat.
            </p>
            <div>
              <Counter />
            </div>
          </div>
          <div className="relative basis-[500px] aspect-h-image h-auto rounded-3xl overflow-hidden">
            <Image
              priority
              src="/Images/portrait.png"
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"top"}
              alt="subject-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
