import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import pictureStore from "../../store/PictureStore";

const Gallery: React.FC = observer(() => {
    console.log("statoooo", JSON.parse(JSON.stringify(pictureStore.pictures)));
    const pics = JSON.parse(JSON.stringify(pictureStore.pictures))

    pics.map((picture: any) => console.log('theeeee', picture))

    useEffect(() => {
        pictureStore.fetchPictures()
    }, [])
    console.log(pictureStore)
  return (
    <div>
      <h2>Picture List</h2>
      <ul>
        {pics.map((picture: any) => (
          <li key={picture[0]}>
            <img src={picture[2]} alt={picture[1]} />
            <button onClick={() => pictureStore.deletePicture(picture.url)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Gallery;
