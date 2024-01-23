// src/stores/PictureStore.ts
import axios, {AxiosResponse} from "axios";
import { observable, action, makeObservable } from "mobx";

export interface Picture {
  id: number;
  cloudinaryUrl: string;
  cloudinaryId: string;
}

export interface Similar {
  url: string;
  cloudinaryId: string;
}

const backendUrl = process.env.REACT_APP_API_URL;

class PictureStore {
  pictures: Picture[] = [];
  similar: {url: string, id: string}[] = [];

  constructor() {
    makeObservable(this, {
      pictures: observable,
      similar: observable,
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

  async deleteSimilarPics(public_id: string) {
    await axios.post(`${backendUrl}/gallery/return`, { public_id });
    const picter = this.similar.filter((pict: any) => pict.id !== public_id)
    this.similar = picter;
  }

  async searchSimilar(file: File) {
    const formData = new FormData()
    formData.append("image", file)
    const pics = await axios.post<File>(
      `${backendUrl}/gallery/similar`,
      formData
    );
    this.similar = pics.data as unknown as {url: string, id: string}[];
  }
}

const pictureStore = new PictureStore();
export default pictureStore;
