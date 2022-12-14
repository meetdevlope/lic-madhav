import React from "react";
import { useMemo, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const FeaturedBrands = ({ data }) => {
  const logos = [
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/oracle-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ibm-logo.png",
    },
    {
      image:
        "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/visa-logo.png",
    },
  ];

  const [testiIndex, setTestiIndex] = useState(0);

  const settings = useMemo(() => ({
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setTestiIndex(next),
    responsive: [
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }));

  return (
    <>
      <div className="testimonialSection h-auto flex flex-col gap-8 pt-16 px-8 tab:max-w-7xl mx-auto my-0">
        <h3 className="testimonial-title text-3xl text-black font-bold my-0 mx-auto pt-0 lg:pt-32">
          Featured Brands
        </h3>
        <div className="Testi-slider-SR w-full mx-auto">
          <Slider className="" {...settings}>
            {logos.map((element, idx) => (
              <div key={idx} className="p-8">
                <img src={element.image} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FeaturedBrands;
