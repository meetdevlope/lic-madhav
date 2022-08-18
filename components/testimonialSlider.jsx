import { useMemo, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const TestimonialSlider = ({ data }) => {
  const images = useMemo(
    () => [
      {
        img: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        text: "As a brand owner, we have partnered with Dotcom Reps since 2014 and have experienced steady growth and profitability with Amazon. They have provided us a seamless path to positioning and controlling our brand. We would highly recommend their services.",
        name: "Rohini Patel",
        role: "Analyst",
      },
      {
        img: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        text: "As a brand seller, we have partnered with Dotcom Reps since 2014 and have experienced steady growth and profitability with Amazon. They have provided us a seamless path to positioning and controlling our brand. We would highly recommend their services.",
        name: "Shreya Patel",
        role: "Analyst",
      },
      {
        img: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        text: "As a brand owner, we have partnered with Dotcom Reps since 2014 and have experienced steady growth and profitability with Amazon. They have provided us a seamless path to positioning and controlling our brand. We would highly recommend their services.",
        name: "Tanu Jain",
        role: "Analyst",
      },
      {
        img: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        text: "As a brand owner, we have partnered with Dotcom Reps since 2014 and have experienced steady growth and profitability with Amazon. They have provided us a seamless path to positioning and controlling our brand. We would highly recommend their services.",
        name: "Hetal Agrawal",
        role: "Analyst",
      },
    ],
    []
  );
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight fill="white" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft fill="white" />
      </div>
    );
  };

  const [testiIndex, setTestiIndex] = useState(0);

  const settings = useMemo(() => ({
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setTestiIndex(next),
    responsive: [
      {
        breakpoint: 1024,
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
      <div className="testimonialSection px-4 lg:h-screen h-auto flex flex-col gap-12 pt-16 max-w-7xl mx-auto my-0">
        <h3 className="testimonial-title text-black font-bold my-0 mx-auto pt-0 lg:pt-32">
          Testimonials
        </h3>
        <div className="Testi-slider-SR w-full lg:w-3/4 mx-auto">
          <Slider {...settings}>
            {images.map((element, idx) => (
              <>
                <div className="slideSR m-8">
                  <div className="testi-content bg-brand p-8 rounded-2xl">
                    <p className="text-white">{element.text}</p>
                  </div>
                  <div className="mt-12 flex flex-row gap-4 justify-center items-center">
                    <img
                      src={element.img}
                      alt="profile-image"
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-xl text-brand-dark">{element.name}</h1>
                      <h4 className="text-brand-light">{element.role}</h4>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
