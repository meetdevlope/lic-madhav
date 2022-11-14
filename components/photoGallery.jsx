import React, { useCallback, useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import { photoGallery } from "../functions/photoGallery";
import client from "../functions/apolloClient";
import Carousel, { Modal, ModalGateway } from "react-images";

const PhotoGallery = () => {
  const InitData = {
    loading: false,
    error: false,
    data: [],
  };
  const serverLink = process.env.NEXT_PUBLIC_SERVER_LINK;
  const [{ loading, error, data }, setData] = useState(InitData);

  const getData = async () => {
    setData((prev) => ({ ...prev, loading: true, error: false }));
    try {
      const response = await client().query({
        query: photoGallery,
      });

      setData((prev) => ({
        ...prev,
        loading: false,
        error: false,
        data: response?.data?.photoGalleries?.data.map((item) => ({
          src: serverLink + item?.attributes?.src?.data?.attributes?.url,
          width: item?.attributes?.src?.data?.attributes?.width,
          height: item?.attributes?.src?.data?.attributes?.height,
        })),
      }));
    } catch (error) {
      console.log("something went wrong", error);
      setData((prev) => ({ ...prev, loading: false, error: true, data: [] }));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="gallery">
      <Gallery photos={data} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={data.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;
