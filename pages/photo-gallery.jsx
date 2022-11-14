import React from "react";
import PhotoGallery from "../components/photoGallery";

const Gallery = () => {
  return (
    <div>
      <h3 className="text-center my-10">Photo Gallery</h3>
      <div className="max-w-7xl mx-auto">
        <PhotoGallery type="photo-gallery" />
      </div>
    </div>
  );
};

export default Gallery;
