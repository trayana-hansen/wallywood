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
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta
        animi, atque quas autem dolor dolores consequatur, enim voluptas vel
        voluptate provident quod dolorum veniam aperiam alias quo, tempore
        officiis.
      </ContentWrapper>
    </>
  );
};

export default Home;
