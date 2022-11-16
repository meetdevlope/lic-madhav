import { Formik, Form } from "formik";
import React, { useState } from "react";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import ButtonComponent from "./buttonComponent";
import * as Yup from "yup";
import client from "../functions/apolloClient";
import { mutationContactForm } from "../functions/contactForm/mutation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const ContactUsSection = () => {
  const InitData = {
    loading: false,
    error: false,
  };

  const [{ loading, error, data }, setData] = useState(InitData);

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

  const showToastErrorMessage = (message) => {
    toast.error(
      `Can't submit the form.${
        message === "This attribute must be unique"
          ? "Provided email already exist. Please enter other email."
          : "Something is wrong"
      }` || "Something went wrong !",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };

  const showToastSuccessMessage = () => {
    toast.success(
      "Thank you for submitting the form. We will contact you back",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };

  const contactUsValidation = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Email is not valid").required("Required"),
  });

  const onSubmit = async (values) => {
    setData((prev) => ({ loading: true, error: false }));
    // console.log(values);

    try {
      const response = await client().mutate({
        mutation: mutationContactForm,
        variables: {
          ...values,
        },
      });

      setData(() => ({
        loading: false,
        error: false,
      }));
      showToastSuccessMessage();
      // console.log(response);
    } catch (err) {
      showToastErrorMessage(err.message);
      setData(() => ({ loading: false, error: true }));
      // console.log("Error message is:", err.message);
    }
  };

  if (loading)
    return (
      <span className="fixed top-0 left-0 w-screen h-screen items-center z-50 bg-white opacity-50 flex justify-center">
        <ClipLoader loading={true} size={"2rem"} color={"#ec268f"} />
      </span>
    );

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
