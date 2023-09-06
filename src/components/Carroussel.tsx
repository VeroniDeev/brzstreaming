import Image, { StaticImageData } from "next/image";
import breakingBadLogo from "../../public/logo/Breaking_Bad_logo 1.png";
import playButton from "../../public/icon/play_button.svg";
import CarrousselChild from "./CarrousselChild";

const Carroussel = () => {
  return (
    <section className="Carroussel w-full h-3/4">
      <CarrousselChild
        iconImage={breakingBadLogo}
        url="../../public/background/breaking_bad_background.png"
      ></CarrousselChild>
    </section>
  );
};

export default Carroussel;
