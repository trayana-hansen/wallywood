import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper";
import { SlideWrapper } from "../../Components/App/SlideWrapper/SlideWrapper";
import { usePosterData } from "../../Components/App/PosterList/PosterList";

const Home = () => {
  const { posterList } = usePosterData();
  console.log(posterList);

  return (
    <>
      <SlideWrapper />
      <ContentWrapper
        title="Velkommen"
        description="Her finder du nye og gamle film plakater"
        subtitle="Alt i filmplakater"
      >
        {posterList &&
          posterList.slice(0, 2).map((poster) => {
            return (
              <figure key={poster.id}>
                <img src={poster.image} alt="Poster" />
                <figcaption>
                  <p>{poster.name}</p>
                  <p>{poster.description}</p>
                </figcaption>
              </figure>
            );
          })}
      </ContentWrapper>
    </>
  );
};

export default Home;
