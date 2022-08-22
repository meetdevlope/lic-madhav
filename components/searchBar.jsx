import { Form, Formik } from "formik";
import React from "react";
import cn from "classnames";

const SearchBar = ({ placeholder, action, searchClass }) => {
  const submitAction = (values) => {
    console.log(values);
  };

  return (
    <Formik onSubmit={submitAction} initialValues={{ searchInput: "" }}>
      {({ values, handleChange, submitForm }) => (
        <Form className="flex w-full">
          <input
            type="text"
            placeholder={placeholder}
            name="searchInput"
            value={values.searchInput}
            onChange={(e) => {
              handleChange(e);
              action ? "" : submitForm();
            }}
            className={cn(
              "bg-[transparent] focus:outline-none py-1 px-4 border-2 w-full rounded-l-md placeholder:text-gray placeholder:text-sm",
              { [searchClass]: !!searchClass }
            )}
          />
          {action}
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
