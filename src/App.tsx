import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { createApi } from "unsplash-js";
import { Search } from "./components/Search";
import { Image } from "./components/Image";
import type { Photo } from "./index.d";

type ApiResultData = {
  type: string;
  response: any;
  originalResponse: Response;
  errors?: undefined;
  status: number;
};

const api = createApi({
  accessKey: "Xx4O33YqvXp8q1O3yrtESRZUqzdvMtZn5qP0UsS_dFM",
});

// styled-components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

function App() {
  // 型推論から取得したデータを定義、非nullアサーション演算子を用いて初期値を設定。
  const [photos, setPhotos] = useState<ApiResultData>(null!);

  const fetchApi = (term: string) => {
    api.search
      .getPhotos({ query: term, orientation: "landscape" })
      .then((result) => {
        if (result.errors) {
          console.error("error: ", result.errors[0]);
        } else {
          setPhotos(result);
        }
      });
  };

  return (
    <div className="App">
      <Search onSearchSubmit={fetchApi} />
      <Grid>
        {photos &&
          photos.response.results.map((photo: Photo) => (
            <Image key={photo.id} photo={photo} />
          ))}
      </Grid>
    </div>
  );
}

export default App;
