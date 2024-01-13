import React, { FC } from "react";
import Gallery from "../../components/Gallery";
import SearchBar from "../../components/SearchBar";
import { GalleryPageCss } from "./GalleryPage.styled";

const GalleryPage: FC = () => {
  return (
    <GalleryPageCss>
      <SearchBar />
      <Gallery />
    </GalleryPageCss>
  );
};

export default GalleryPage;
