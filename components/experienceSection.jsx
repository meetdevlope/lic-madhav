import React from "react";
import Image from "next/image";
import Counter from "./counter";

const ExperienceSection = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container flex justify-center flex-wrap gap-20 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2>
              <span className="text-pink">20+</span> Years of Experience
            </h2>{" "}
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
              src="https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80"
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
              alt="subject-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
