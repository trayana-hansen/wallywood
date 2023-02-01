import { useState, useEffect } from "react";
import axios from "axios";

const DataList = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4500/poster`;

    const getData = async () => {
      try {
        const result = await axios.get(url);
        setApiData(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setApiData]);

  return (
    <div>
      {apiData &&
        apiData.map((item) => {
          return (
            <figure key={item.id}>
              <img src={item.image} alt={item.name} />
              <figcaption>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </figcaption>
            </figure>
          );
        })}
    </div>
  );
};

export default DataList;
