import Image from "next/image";
import Poster from "./Poster";
import topLeft from "../../public/icon/topLeft.svg";
import bottomRight from "../../public/icon/bottomRight.svg";

interface DataPoster {
  name: string;
  date: number;
  image: any;
}

interface PosterCatalogueData {
  dataName: string;
  dataPoster: DataPoster[];
}

const PosterCatalogue: React.FC<PosterCatalogueData> = ({
  dataName,
  dataPoster,
}) => {
  return (
    <div className={dataName.toLowerCase() + " px-12 mb-28"}>
      <div className="top-info mb-10 flex justify-between">
        <div className="left-top-info relative w-20 flex justify-center">
          <Image
            src={topLeft}
            alt="top left arrow"
            className="absolute top-0 left-0"
          />
          <h3 className="text-white font-semibold text-xl inline">
            {dataName}
          </h3>
          <Image
            src={bottomRight}
            alt="bottom right arrow"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="all-poster flex flex-nowrap">
        {dataPoster.map((el, index) => {
          return (
            <Poster
              date={el.date}
              image={el.image}
              name={el.name}
              key={index}
            ></Poster>
          );
        })}
      </div>
    </div>
  );
};

export default PosterCatalogue;
