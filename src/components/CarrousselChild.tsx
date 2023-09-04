"use client";
import Image from "next/image";
import playButton from "../../public/icon/play_button.svg";
import { useRef } from "react";

interface dataCarroussel {
  iconImage: any;
  url: string;
}

const CarrousselChild: React.FC<dataCarroussel> = ({ iconImage, url }) => {
  const backgroundRef: React.RefObject<HTMLDivElement> = useRef(null);
  if (backgroundRef.current) backgroundRef.current.style.backgroundImage = url;
  return (
    <>
      <div className="slide1 flex items-end w-full h-full" ref={backgroundRef}>
        <div className="info-part w-2/6 h-3/6 flex justify-center ">
          <div className="logo-part flex justify-center items-center">
            <Image src={iconImage} alt="bruce wayne" />
          </div>
          <div className="description flex flex-col justify-center items-center">
            <h3 className="text-white text-xl font-semibold text-center">
              Breaking bad is online !
            </h3>
            <p className="text-white text-sm font-semibold text-center w-2/5">
              Breaking Bad with 25000 online yes you are not good
            </p>
          </div>
          <div className="all-button flex justify-evenly w-full ">
            <div className="button-play bg-white w-2/5 h-1/2 cursor-pointer rounded-full flex justify-evenly items-center">
              <Image
                src={playButton}
                alt="oui"
                className="button-play w-4 h-4"
              />
              <p className="text-base font-semibold">Watch Now</p>
            </div>
            <div className="button-play border-2 w-2/5 h-1/2 rounded-full flex justify-center items-center cursor-pointer">
              <p className="w-auto text-white text-base font-semibold">
                More Info
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-carroussel-count">
        <button className="all-button"></button>
      </div>
    </>
  );
};

export default CarrousselChild;
