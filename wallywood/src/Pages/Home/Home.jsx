import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper";
import { SlideWrapper } from "../../Components/App/SlideWrapper/SlideWrapper";
import { usePosterData } from "../../Components/App/PosterList/PosterList";

const Home = () => {
  const { posterList } = usePosterData();
  console.log(posterList);

  return (
    <>
      <SlideWrapper />
      <ContentWrapper title="Home">
        <section>
          {posterList &&
            posterList.map((poster) => {
              return (
                <figure key={poster.id}>
                  {poster.id}>
                  <img src={poster.image} alt="Poster" />
                  <figcaption>
                    <p key={poster.id}>{poster.name}</p>
                    <p>{poster.desciption}</p>
                  </figcaption>
                </figure>
              );
            })}
        </section>
      </ContentWrapper>
    </>
  );
};

export default Home;
