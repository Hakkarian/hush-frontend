import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import pictureStore from "../../store/PictureStore";

const Gallery: React.FC = observer(() => {
  const pics = pictureStore.pictures
  
  console.log('pics', pics)

    useEffect(() => {
        pictureStore.fetchPictures()
    }, [])
  return (
    <div>
      <h2>Picture List</h2>
      <ul>
        {pics.map((picture: any) => (
          <li key={picture[0]}>
            <img src={picture[2]} alt={picture[1]} width="300"/>
            <button onClick={async () => await pictureStore.deletePicture(picture[2])}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Gallery;
