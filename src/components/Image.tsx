import type { VFC } from "react";

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

export const Image: VFC<{ photo: Photo }> = ({ photo }) => {
  return (
    <figure>
      <img src={photo.urls.small} alt="" />
    </figure>
  );
};
