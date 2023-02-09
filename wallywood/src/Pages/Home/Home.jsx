import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper";
import { SlideWrapper } from "../../Components/App/SlideWrapper/SlideWrapper";
import { usePosterData } from "../../Components/App/PosterList/PosterList";
import HomeStyle from "./Home.style.js";

const Home = () => {
  const { posterList } = usePosterData();
  console.log(posterList);

  return (
    <>
      <SlideWrapper />
      <ContentWrapper
        title="sidste nyt..."
        description="Her finder du nye og gamle film plakater"
      >
        {posterList &&
          posterList.slice(0, 2).map((poster) => {
            return (
              <HomeStyle key={poster.id}>
                <div>
                  <figure>
                    <img src={poster.image} alt="Poster" />
                    <figcaption>
                      <h2>{poster.name}</h2>
                      <p>
                        Abernes Planet: Revolutionen, foregår i en fremtid, hvor
                        den hyperintelligente chimpanse, Caesar, leder en
                        voksende nation af genetisk udviklede abekatte.
                      </p>
                      {poster.genres &&
                        poster.genres.map((genre) => {
                          return <p key={genre.id}>Genre: {genre.title}</p>;
                        })}
                      <button type="button">læs mere</button>
                    </figcaption>
                  </figure>
                </div>
              </HomeStyle>
            );
          })}
      </ContentWrapper>
    </>
  );
};

export default Home;
