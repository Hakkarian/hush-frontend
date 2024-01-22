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
  similar: string[] = [];

  constructor() {
    makeObservable(this, {
      pictures: observable,
      addPicture: action,
      deletePicture: action,
      fetchPictures: action,
    });
  }

  async fetchPictures() {
    const pics = await axios.get<Picture[]>(`${backendUrl}/gallery`);
    this.pictures = pics.data;
  }

  async addPicture(file: any) {
    await axios.post(`${backendUrl}/gallery/add`, file);
    const pics = await axios.get<Picture[]>(`${backendUrl}/gallery`);
    this.pictures = pics.data;
  }

  async deletePicture(public_id: string) {
    console.log("in");
    await axios.post(`${backendUrl}/gallery/remove`, { public_id });
    const picter = this.pictures.filter((pict: any) => pict[1] !== public_id);
    this.pictures = picter;
    console.log("out");
  }

  async searchSimilar(file: File) {
    const pics = await axios.post<string[]>(
      `${backendUrl}/gallery/similar`,
      file
    );
    const images = pics.data.map(pic => `data:image/jpeg;base64,${atob(pic)}`)
    console.log('imgs hehes', images)
  }
}

const pictureStore = new PictureStore();
export default pictureStore;
