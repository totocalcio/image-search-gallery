import type { VFC } from "react";
import type { Photo } from "../index.d";

export const Image: VFC<{ photo: Photo }> = ({ photo }) => {
  return (
    <figure>
      <img src={photo.urls.small} alt="" />
    </figure>
  );
};
