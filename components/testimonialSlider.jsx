import { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { allTestmonials } from "../functions/testimonial";
import client from "../functions/apolloClient";

const InitData = {
  loading: false,
  error: false,
  data: [],
};

const TestimonialSlider = () => {
  const serverLink = process.env.NEXT_PUBLIC_SERVER_LINK;
  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    // console.log(loading);
    try {
      const response = await client().query({
        query: allTestmonials,
      });
      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.testimonials?.data,
      }));
      //   setPlanData(response?.data?.licPlan?.data?.attributes);
      // console.log(response, "data here");
    } catch (error) {
      console.log(error);
      setData((prev) => ({ ...prev, loading: false, error: true, data: {} }));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  //   console.log(router?.query?.id, "router");

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 cursor-pointer right-0"
        onClick={onClick}
      >
        <FaArrowRight fill="black" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="absolute top-1/2 cursor-pointer left-0" onClick={onClick}>
        <FaArrowLeft fill="black" />
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

  if (loading)
    return (
      <span className="fixed top-0 left-0 w-screen h-screen items-center z-50 bg-white opacity-50 flex justify-center">
        <ClipLoader loading={true} size={"2rem"} color={"#ec268f"} />
      </span>
    );

  return (
    <>
      <div className="testimonialSection px-4 lg:h-screen h-auto flex flex-col gap-12 pt-16 max-w-7xl mx-auto my-0">
        <h3 className="testimonial-title text-black font-bold my-0 mx-auto pt-0 lg:pt-32">
          Testimonials
        </h3>
        <div className="Testi-slider-SR w-full mx-auto">
          <Slider {...settings}>
            {data &&
              data?.map((element, idx) => (
                <div key={idx}>
                  <div className="slideSR m-8">
                    <div className="testi-content bg-brand p-8 rounded-2xl">
                      <p className="text-white">
                        {element?.attributes?.testimonial}
                      </p>
                    </div>
                    <div className="mt-12 flex flex-row gap-4 justify-center items-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full overflow-hidden ">
                        <img
                          src={`${serverLink}${element?.attributes?.image?.data?.attributes?.url}`}
                          alt="profile-image"
                          className="w-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="text-xl text-brand-dark">
                          {element?.attributes?.name}
                        </h1>
                        <h4 className="text-brand-light">
                          {element?.attributes?.company}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
