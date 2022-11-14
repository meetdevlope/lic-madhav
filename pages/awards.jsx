import React from "react";
import PhotoGallery from "../components/photoGallery";

const Awards = () => {
  return (
    <div>
      <h3 className="text-center my-10">Awards</h3>
      <div className="max-w-7xl mx-auto">
        <PhotoGallery type="awards" />
      </div>
    </div>
  );
};

export default Awards;
