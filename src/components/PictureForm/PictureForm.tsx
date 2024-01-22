// src/components/AddPictureForm.tsx
import React, { ChangeEvent, useState } from "react";
import pictureStore from "../../store/PictureStore";
import ImageSearch from "../ImageSearch";
import { PictureFormCss } from "./PictureForm.styled";

const PictureForm: React.FC = () => {
  const [image, setImage] = useState<null | File>(null);

  console.log('image', image);

  const handleAddPicture = async () => {
    try {
      const picture = new FormData();
      console.log('before')
      if (image !== null) {
        console.log('inside')
        picture.append("image", image);
      }
      console.log('after')
      await pictureStore.addPicture(picture);
    } catch (error) {
      console.error("Error adding picture:", error);
    }
  };

  return (
    <PictureFormCss>
      <ImageSearch />
      <div className="add-image">
        <input
          type="file"
          name="image"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
              setImage(file);
            }
          }}
        />
        <button type="button" onClick={handleAddPicture}>
          Add Picture
        </button>
      </div>
    </PictureFormCss>
  );
};

export default PictureForm;
