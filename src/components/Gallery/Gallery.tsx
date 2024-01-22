import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import pictureStore from "../../store/PictureStore";

const Gallery: React.FC = observer(() => {
  const pics = pictureStore.pictures;
  const sims = pictureStore.similar;
  const bottomRef = useRef(null);
  
  console.log('pics', pics)


  useEffect(() => {
    if (sims.length === 0) {
        pictureStore.fetchPictures();
      }
    }, [sims])
  
  useEffect(() => {
    (bottomRef.current as any)?.scrollIntoView({behavior: 'smooth'})
  }, [pics])

  return (
    <div>
      <h2>Picture List</h2>
      <ul>
        {pics.map((picture: any) => (
          <li key={picture[0]}>
            <img src={picture[2]} alt={picture[1]} width="300" />
            <button
              onClick={async () => await pictureStore.deletePicture(picture[1])}
            >
              Delete
            </button>
          </li>
        ))}
        <div ref={bottomRef} style={{ position: 'absolute', bottom: '0', height: "10px" }} />
      </ul>
    </div>
  );
});

export default Gallery;
