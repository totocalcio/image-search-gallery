import React, { useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { createApi } from "unsplash-js";

//unsplash-js設定
type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

// 【TODO】responseの型定義
type ApiResultData = {
  type: string;
  response: any;
  originalResponse: Response;
  errors?: undefined;
  status: number;
};

//【TODO】アクセスキーは定数で読み込む
const api = createApi({
  accessKey: "Xx4O33YqvXp8q1O3yrtESRZUqzdvMtZn5qP0UsS_dFM",
});

// styled-components
const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

// 【TODO】apiとcomponentsやmethodsをApp()の外に出す
function App() {
  // 初期値のnullの後ろに「!」をつけて、null型ではないことを宣言
  const inputRef = useRef<HTMLInputElement>(null!);
  // 型推論から取得したデータを定義、非nullアサーション演算子を用いて初期値を設定。
  const [photos, setPhotos] = useState<ApiResultData>(null!);

  const fetchApi = () => {
    api.search
      .getPhotos({ query: inputRef.current.value, orientation: "landscape" })
      .then((result) => {
        if (result.errors) {
          console.error("error: ", result.errors[0]);
        } else {
          setPhotos(result);
        }
      });
  };

  //methods
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputRef.current.value) {
        fetchApi();
      }
    }
  };

  // components
  const Search: React.VFC = () => (
    <div className="search">
      <Label>
        Image Search
        {/* 
          型 'HTMLInputElement' を型 'LegacyRef<HTMLInputElement> | undefined' に割り当てることはできません。
          予期された型は、型 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>' に対してここで宣言されたプロパティ 'ref' から取得されています
        */}
        <input
          ref={inputRef}
          type="text"
          name="name"
          onKeyPress={handleEnter}
        />
      </Label>
    </div>
  );

  const Image: React.VFC<{ photo: Photo }> = ({ photo }) => {
    return (
      <div>
        <img src={photo.urls.small} alt="" />
      </div>
    );
  };

  return (
    <div className="App">
      <Search />
      {photos &&
        photos.response.results.map((photo: Photo) => (
          <Image key={photo.id} photo={photo} />
        ))}
    </div>
  );
}

export default App;
