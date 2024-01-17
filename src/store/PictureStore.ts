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

  async addPicture(file: any) {
    await axios.post(`${backendUrl}/gallery/add`, file);
    const pics = await axios.get<Picture[]>(`${backendUrl}/gallery`);
    this.pictures = pics.data;
  }

  async deletePicture(url: string) {
    console.log('in');
    await axios.post(`${backendUrl}/gallery/remove`, { url });
    const picter = this.pictures.filter((pict: any) => pict[2] !== url);
    this.pictures = picter;
    console.log('out');
    }
    
    async fetchPictures() {
        const pics = await axios.get<Picture[]>(`${backendUrl}/gallery`);
        this.pictures = pics.data;
    }
}

const pictureStore = new PictureStore();
export default pictureStore;
