// src/components/AddPictureForm.tsx
import React, { ChangeEvent, useState } from "react";
import pictureStore from "../../store/PictureStore";
import ImageSearch from "../ImageSearch";
import { PictureFormCss } from "./PictureForm.styled";
import DropFileInput from "components/DropFileInput";

const PictureForm: React.FC = () => {
  const [image, setImage] = useState<null | File>(null);

  const sims = pictureStore.similar;

  console.log('image', image);

  const handleAddPicture = async (file: File) => {
    try {
      const picture = new FormData();
      console.log('before')
      if (file) {
        console.log('insideadd')
        picture.append("image", file);
      }
      console.log('after')
      await pictureStore.addPicture(picture);
    } catch (error) {
      console.error("Error adding picture:", error);
    }
  };

  const deleteAllSimilar = async () => {
    console.log('click')
    const promises = sims.map(async (sim) => {
      console.log('wait')
      await pictureStore.deleteSimilarPics(sim.id)
    })
    await Promise.all(promises);
    console.log('aftered')
  }

  return (
    <PictureFormCss>
      <ImageSearch />
      <div className="add-image">
        <DropFileInput
          size={50}
          borderRadius="30px"
          name="Add picture"
          onFileChange={handleAddPicture}
        />
        <button type="button" onClick={deleteAllSimilar}>
          Turn simiarity OFF
        </button>
      </div>
    </PictureFormCss>
  );
};

export default PictureForm;
