import { ContentWrapper } from "../../Components/App/ContentWrapper/ContentWrapper";
import DataList from "../../Components/App/Data/Data";


const Plakater = () => {
  return (
    <div>
      <ContentWrapper
        title="Plakater"
        description="Se vores udvalg af plakater"
      >
        <section>
          <DataList />
        </section>
      </ContentWrapper>
    </div>
  );
};

export default Plakater;
