import { Formik, Form } from "formik";
import React from "react";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import ButtonComponent from "./buttonComponent";
import * as Yup from "yup";

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

  const contactUsValidation = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Email is not valid").required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <section className="flex flex-col gap-2 w-full tab:flex-row py-16">
      <div className="flex-1">
        <h3 className="text-white">Contact Us</h3>

        <p className="text-white my-8 tab:w-2/3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          fugit distinctio commodi amet repellendus unde.
        </p>

        <div className="my-8 tab:mt-16 tab:mb-8 flex flow-row flex-wrap tab:flex-col gap-6">
          {contactOptions.map((contactOption) => {
            return (
              <div
                key={contactOption.text}
                className="flex items-center cursor-pointer"
              >
                <span className="text-white text-3xl">
                  {contactOption.icon}
                </span>
                <h4 className="text-white ml-4 text-left">
                  {contactOption.text}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white flex-1 p-10 text-black rounded-xl">
        <Formik
          onSubmit={onSubmit}
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={contactUsValidation}
        >
          {({ values, handleChange, errors, touched }) => (
            <Form className="flex flex-col gap-6 ">
              <div className="flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="border-b bg-[transparent] focus:outline-none"
                />
                {errors.firstName && touched.firstName && (
                  <p className="text-black">{errors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="border-b bg-[transparent] focus:outline-none"
                />
                {errors.lastName && touched.lastName && (
                  <p className="text-black">{errors.lastName}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="border-b bg-[transparent] focus:outline-none"
                />
                {errors.email && touched.email && (
                  <p className="text-black">{errors.email}</p>
                )}
              </div>
              <ButtonComponent
                buttonText={"Submit"}
                appearance="pri"
                type="submit"
                buttonClass="self-end mt-8"
              />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactUsSection;
