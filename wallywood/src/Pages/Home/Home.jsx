import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper";
import { SlideWrapper } from "../../Components/App/SlideWrapper/SlideWrapper";
import DataList from "../../Components/App/Data/Data";

const Home = () => {
  return (
    <>
      <SlideWrapper />
      <ContentWrapper title="Home">
        <section>
          <DataList />
        </section>
      </ContentWrapper>
    </>
  );
};

export default Home;
