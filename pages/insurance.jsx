import Image from 'next/image'
import React, { useEffect, useMemo, useState } from "react";
import ButtonComponent from "../components/buttonComponent";
import ContactUsSection from "../components/contactUsSection";
import SolutionCard from "../components/solutionCard";
import Solutions from "../components/solutions";

const Insurance = () => {
  const solutionsCards = [
    {
      link: "https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/css/newassets/images/sol-0.png",
      title: "All",
    },
    {
      link: "https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/images/mutualfundpartner-Tax-Savings.png",
      title: "Tax Savings",
    },
    {
      link: "https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/images/mutualfundpartner-Basics-of-Mutual-Funds-.png",
      title: "Basics of Mututal Funds",
    },
    {
      link: "https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/images/main-cat-61e90ffb375b9.png",
      title: "Interesting Reads",
    },
    {
      link: "https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/images/mutualfundpartner-Wealth-Creation.png",
      title: "Wealth Creation",
    },
    {
      link: "https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/images/main-cat-61cd444e5b6d5.png",
      title: "Regular Income",
    },
    {
      link: "https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/images/mutualfundpartner-Children's-Future.png",
      title: "Children's Future",
    },
    {
      link: "https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/images/mutualfundpartner-Retirement-Planning.png",
      title: "Retirement Planning",
    },
  ];

  const allCategories = [
    {
      category: "Tax Savings",
      title: "1",
      imgSrc:
        "https://images.unsplash.com/photo-1667783642094-755dcd28213d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      desc: "hi",
    },
    {
      category: "Basics of Mututal Funds",
      title: "2",
      imgSrc:
        "https://images.unsplash.com/photo-1667783642094-755dcd28213d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      desc: "hi",
    },
    {
      category: "Interesting Reads",
      title: "3",
      imgSrc:
        "https://images.unsplash.com/photo-1667783642094-755dcd28213d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      desc: "hi",
    },
    {
      category: "Wealth Creation",
      title: "4",
      imgSrc:
        "https://images.unsplash.com/photo-1667783642094-755dcd28213d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      desc: "hi",
    },
    {
      category: "Regular Income",
      title: "5",
      imgSrc:
        "https://images.unsplash.com/photo-1667783642094-755dcd28213d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      desc: "hi",
    },
    {
      category: "Children's Future",
      title: "6",
      imgSrc:
        "https://images.unsplash.com/photo-1667783642094-755dcd28213d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      desc: "hi",
    },
    {
      category: "Retirement Planning",
      title: "7",
      imgSrc:
        "https://images.unsplash.com/photo-1667783642094-755dcd28213d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80",
      desc: "hi",
    },
  ];

  const [category, setcategory] = useState([]);
  const [selcted, setselcted] = useState();

  useEffect(() => {
    setcategory(allCategories);
  }, []);

  const getFilteredList = () => {
    if (!selcted) {
      return category;
    } else if (selcted === "All") {
      return category;
    }
    return category.filter((item) => item.category === selcted);
  };

  const filteredList = useMemo(getFilteredList, [selcted, category]);

  console.log(selcted);

  return (
    <>
      <section className="py-10">
        <div className="container flex justify-center flex-wrap gap-20 py-4 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col justify-center tab:items-start items-center">
            <h2>About Us</h2>
            <h4 className="mt-8 mb-4 text-lg">Ajaykumar Virsangbhai Patel</h4>
            <p>
              AMFI Registered Mutual Fund Distributor empaneled with HDFC Mutual
              Fund.
            </p>
            <div className="flex gap-8"></div>
          </div>
          <div className="relative basis-[400px] aspect-h-image h-auto rounded-3xl overflow-hidden">
            <Image
              priority
              src="/images/ajaykumar_virsangbhai_patel.png"
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
              alt="subject-image"
            />
          </div>
        </div>
      </section>

      <div className="my-20 px-8 tab:px-20 flex flex-wrap justify-center tab:flex-nowrap gap-8">
        {solutionsCards.map((card, idx) => (
          <button
            onClick={() => {
              setselcted(card.title);
            }}
            key={idx}
            className={`flex flex-col items-center tab:max-w-[none] max-w-[60px]`}
          >
            <img src={card.link} alt="" className="min-w-fit h-12" />
            <h4 className="text-gray mt-2 text-center">{card.title}</h4>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {filteredList.map((item, i) => (
          <SolutionCard
            {...item}
            key={i}
            title={item.title}
            imgSrc={item.imgSrc}
            desc={item.desc}
          />
        ))}
      </div>
      <ContactUsSection />
    </>
  );
};

export default Insurance;
