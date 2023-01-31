import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper";
import { SlideWrapper } from "../../Components/App/SlideWrapper/SlideWrapper";

const Home = () => {
  return (
    <>
      <SlideWrapper />
      <ContentWrapper
        title="Velkommen"
        description="some description"
        subtitle="Alt i filmplakater"
      ></ContentWrapper>
    </>
  );
};

export default Home;
