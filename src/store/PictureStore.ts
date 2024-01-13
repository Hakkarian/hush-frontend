// src/stores/PictureStore.ts
import axios from "axios";
import { observable, action, makeObservable } from "mobx";

export interface Picture {
  id: number;
  cloudinaryUrl: string;
  cloudinaryId: string;
}

const backendUrl = process.env.REACT_APP_API_URL;

class PictureStore {
  pictures: Picture[] = [];

  constructor() {
    makeObservable(this, {
      pictures: observable,
      addPicture: action,
        deletePicture: action,
      fetchPictures: action
    });
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }

  deletePicture(id: number) {
    this.pictures = this.pictures.filter((picture) => picture.id !== id);
    }
    
    async fetchPictures() {
        const pics = await axios.get<Picture[]>(`${backendUrl}/gallery`);
        this.pictures = pics.data;
    }
}

const pictureStore = new PictureStore();
export default pictureStore;
