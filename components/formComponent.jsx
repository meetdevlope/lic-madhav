import { Formik, Form } from "formik";
import React from "react";

const FormComponent = ({ formFields, initialValues }) => {
  const submitAction = (values) => {
    console.log(values);
  };
  return (
    <div className="flex-1 w-full text-black">
      <Formik onSubmit={submitAction} initialValues={initialValues}>
        {({ values, handleChange, submitForm }) => (
          <Form className="flex flex-col gap-6 ">
            {formFields.map((form, idx) => (
              <div
                key={idx}
                className={`flex ${
                  form.inputType === "checkbox"
                    ? "flex-row gap-4 items-center"
                    : "flex-col"
                }`}
              >
                {form.label && (
                  <label htmlFor={form.inputName}>{form.label}</label>
                )}
                {form.inputType === "selectOption" ? (
                  <select
                    name={form.inputName}
                    onChange={(e) => {
                      handleChange(e);
                      submitForm();
                    }}
                    className="border-2 rounded-md bg-[transparent] py-1 px-4 focus:outline-none placeholder:text-gray placeholder:text-sm"
                  >
                    {form.placeholder && (
                      <option className="bg-pri">{form.placeholder}</option>
                    )}
                    {form.options.map((option, idx) => (
                      <option key={idx} value={option.value} className="bg-pri">
                        {option.text}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={form.inputType}
                    placeholder={form.placeholder}
                    name={form.inputName}
                    value={values.inputName}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    className={`bg-[transparent] focus:outline-none placeholder:text-black ${
                      form.inputType === "file" ? "border-none" : "border-b "
                    }`}
                  />
                )}
              </div>
            ))}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
