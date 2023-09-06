import PosterCatalogue from "./PosterCatalogue";
import breakingBadPoster from "../../public/poster/breakingBadPoster.png";

const dataPoster = {
  name: "Breaking Bad",
  date: 2010,
  image: breakingBadPoster,
};

const dataArr = [
  dataPoster,
  dataPoster,
  dataPoster,
  dataPoster,
  dataPoster,
  dataPoster,
  dataPoster,
];

const PosterCatalogueGroup = () => {
  return (
    <section className="mt-16">
      <PosterCatalogue dataName="Trend" dataPoster={dataArr}></PosterCatalogue>
      <PosterCatalogue dataName="Film" dataPoster={dataArr}></PosterCatalogue>
    </section>
  );
};

export default PosterCatalogueGroup;
