import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import brown_men from "../images/brown_men.jpg";
import shoe_2 from "../images/shoe_2.jpg";
import shoe_3 from "../images/shoe_3.jpg";
import shoe_4 from "../images/shoe_4.jpg";
import SizeButtons from "./SizeButtons";
import SizeGuideModal from "./SizeGuideModal";

const SingleProductDetail = () => {
  const [show, setShow] = useState(false);
  const shoeImgSrcs = [brown_men, shoe_2, shoe_3, shoe_4];
  const [ImageSource, setImageSource] = useState(brown_men);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function imgPicker(event) {
    setImageSource(event.target.name);
  }

  return (
    <>
      <SizeGuideModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
      <div className="row my-4 mx-2">
        <div className="col-lg-7 col-sm-12 mb-3">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "sample shoe",
                isFluidWidth: true,
                src: ImageSource,
              },
              largeImage: {
                src: ImageSource,
                width: 3000,
                height: 2000,
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              enlargedImagePosition: "over",
            }}
          />
          <div className="sml-img-box d-flex flex-direction-row p-1 mr-2">
            {shoeImgSrcs.map((shoeImg, index) => {
              return (
                <img
                  onClick={imgPicker}
                  name={shoeImg}
                  key={index}
                  src={shoeImg}
                  alt="sample shoe"
                  className="w-25 h-100 border border-secondary rounded mr-1"
                ></img>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <SizeButtons handleShow={handleShow} />
        </div>
      </div>
    </>
  );
};

export default SingleProductDetail;
