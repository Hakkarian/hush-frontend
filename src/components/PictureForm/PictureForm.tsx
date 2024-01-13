// src/components/AddPictureForm.tsx
import React, { useState } from "react";
import axios from "axios";
import pictureStore from "../../store/PictureStore";

const PictureForm: React.FC = () => {
  const [cloudinaryUrl, setCloudinaryUrl] = useState("");
  const [cloudinaryId, setCloudinaryId] = useState("");

  const handleAddPicture = async () => {
    try {
      const response = await axios.post("your_backend_api_url", {
        cloudinaryUrl,
        cloudinaryId,
      });
      const newPicture = response.data;
      pictureStore.addPicture(newPicture);
      setCloudinaryUrl("");
      setCloudinaryId("");
    } catch (error) {
      console.error("Error adding picture:", error);
    }
  };

  return (
    <div>
      <h2>Add Picture</h2>
      <label>
        Cloudinary URL:
        <input
          type="text"
          value={cloudinaryUrl}
          onChange={(e) => setCloudinaryUrl(e.target.value)}
        />
      </label>
      <label>
        Cloudinary ID:
        <input
          type="text"
          value={cloudinaryId}
          onChange={(e) => setCloudinaryId(e.target.value)}
        />
      </label>
      <button onClick={handleAddPicture}>Add Picture</button>
    </div>
  );
};

export default PictureForm;
