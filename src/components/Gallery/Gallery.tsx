import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import pictureStore from "../../store/PictureStore";
import { GalleryCss } from "./Gallery.styled";
import Loader from "components/Loader";

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
    <GalleryCss>
      <h2>Picture List</h2>
      <ul>
        {pictureStore.loading && <Loader />}
        {!pictureStore.loading &&
          sims.length === 0 &&
          pics.length !== 0 &&
          pics.map((picture: any) => (
            <li key={picture[0]}>
              <img src={picture[2]} alt={picture[1]} width="300" />
              <button
                onClick={async () =>
                  await pictureStore.deletePicture(picture[1])
                }
              >
                Delete
              </button>
            </li>
          ))}
        {!pictureStore.loading &&
          sims.length !== 0 &&
          sims.map((sim: { url: string; id: string }) => (
            <li key={sim.id}>
              <img src={sim.url} alt={sim.id} width="300" />
              <button
                onClick={async () =>
                  await pictureStore.deleteSimilarPics(sim.id)
                }
              >
                Delete
              </button>
            </li>
          ))}
        <div ref={bottomRef} style={{ height: "10px" }} />
      </ul>
    </GalleryCss>
  );
});

export default Gallery;
