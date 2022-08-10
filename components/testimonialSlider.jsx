import { useMemo, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const TestimonialSlider = ({ data }) => {
  const images = useMemo(
    () => [
      {
        img: "https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
        text: "As a brand owner, we have partnered with Dotcom Reps since 2014 and have experienced steady growth and profitability with Amazon. They have provided us a seamless path to positioning and controlling our brand. We would highly recommend their services.",
        name: "Rohini Patel",
        role: "Analyst",
      },
      {
        img: "https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
        text: "As a brand seller, we have partnered with Dotcom Reps since 2014 and have experienced steady growth and profitability with Amazon. They have provided us a seamless path to positioning and controlling our brand. We would highly recommend their services.",
        name: "Shreya Patel",
        role: "Analyst",
      },
      {
        img: "https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
        text: "As a brand owner, we have partnered with Dotcom Reps since 2014 and have experienced steady growth and profitability with Amazon. They have provided us a seamless path to positioning and controlling our brand. We would highly recommend their services.",
        name: "Tanu Jain",
        role: "Analyst",
      },
      {
        img: "https://images.unsplash.com/photo-1620911166482-1df903d9445e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80",
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
          dots: true,
        },
      },
    ],
  }));

  return (
    <>
      <div className="testimonialSection px-4 lg:h-screen h-auto flex flex-col gap-12 pt-16">
        <h2 className="testimonial-title text-3xl text-[#F77B54] font-bold my-0 mx-auto pt-0 lg:pt-32">
          Testimonials
        </h2>
        <div className="Testi-slider-SR w-full lg:w-3/4 mx-auto">
          <Slider {...settings}>
            {images.map((element, idx) => (
              <>
                <div className="slideSR m-8">
                  <div className="testi-content bg-black text-pink-dark p-8 rounded-2xl">
                    <p>{element.text}</p>
                  </div>
                  <div className="mt-12 flex flex-row gap-4 justify-center items-center">
                    <img
                      src={element.img}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h1 className="text-xl text-pink-dark">{element.name}</h1>
                      <h2 className="text-[#F77B54]">{element.role}</h2>
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
