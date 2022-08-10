import React from "react";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import ButtonComponent from "./buttonComponent";

const ContactUsSection = () => {
  const contactOptions = [
    {
      icon: <MdCall />,
      text: "+91 98765 43210",
    },
    {
      icon: <MdEmail />,
      text: "test@hello.com",
    },
    {
      icon: <MdLocationPin />,
      text: "New address, near old address.",
    },
  ];
  return (
    <section className="bg-pink flex flex-col tab:flex-row py-16 tab:py-">
      <div className="flex-1">
        <h3 className="text-white">Contact Us</h3>

        <p className="text-white mt-4 tab:w-2/3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum{" "}
          <br />
          fugit distinctio commodi amet repellendus unde.
        </p>

        <div className="my-8 tab:mt-16 tab:mb-8 flex flow-row flex-wrap tab:flex-col gap-6">
          {contactOptions.map((contactOption) => {
            return (
              <div key={contactOption.text} className="flex items-center cursor-pointer">
                <span className="text-white text-3xl">
                  {contactOption.icon}
                </span>
                <h4 className="text-white ml-4">{contactOption.text}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <form
        action=""
        className="bg-pink-light flex flex-col gap-6 flex-1 p-10 text-white rounded-xl"
      >
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="border-b bg-[transparent] focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="firstName">Last Name</label>
          <input
            type="text"
            className="border-b bg-[transparent] focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="firstName">Email</label>
          <input
            type="email"
            name=""
            id=""
            className="border-b bg-[transparent] focus:outline-none"
          />
        </div>
        <ButtonComponent buttonText={"Submit"} buttonClass='self-end bg-white text-pink mt-8' />
      </form>
    </section>
  );
};

export default ContactUsSection;
