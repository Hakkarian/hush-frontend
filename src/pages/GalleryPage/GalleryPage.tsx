import React, { FC } from "react";
import Gallery from "../../components/Gallery";
import SearchBar from "../../components/SearchBar";
import { GalleryPageCss } from "./GalleryPage.styled";
import PictureForm from "../../components/PictureForm";

const GalleryPage: FC = () => {
  return (
    <GalleryPageCss>
      <SearchBar />
      <PictureForm />
      <Gallery />
    </GalleryPageCss>
  );
};

export default GalleryPage;
