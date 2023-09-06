import Image from "next/image";

interface PosterData {
  image: any;
  name: string;
  date: number;
}

const Poster: React.FC<PosterData> = ({ image, name, date }) => {
  return (
    <>
      <div className="poster-info"></div>
      <div className="poster w-auto h-auto flex flex-col mr-10">
        <Image src={image} alt={"Image of a poster" + name} />
        <span className=" text-white font-medium mt-3 mb-1">{name}</span>
        <span className=" text-gray-400 font-medium">{date}</span>
      </div>
    </>
  );
};

export default Poster;
