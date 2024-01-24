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
  similar: { url: string, id: string }[] = [];
  loading: boolean = false;

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
    this.loading = true
    const pics = await axios.get<Picture[]>(`${backendUrl}/gallery`);
    this.pictures = pics.data;
    this.loading = false
  }

  async addPicture(file: any) {
    this.loading = true
    await axios.post(`${backendUrl}/gallery/add`, file);
    const pics = await axios.get<Picture[]>(`${backendUrl}/gallery`);
    this.pictures = pics.data;
    this.loading = false;
  }

  async deletePicture(public_id: string) {
    this.loading = true;
    await axios.post(`${backendUrl}/gallery/remove`, { public_id });
    const picter = this.pictures.filter((pict: any) => pict[1] !== public_id);
    const simer = this.similar.filter((sim: any) => sim.id !== public_id);
    this.pictures = picter;
    this.similar = simer;
    this.loading = false;
  }

  async deleteSimilarPics(public_id: string) {
    this.loading = true;
    await axios.post(`${backendUrl}/gallery/return`, { public_id });
    const picter = this.similar.filter((pict: any) => pict.id !== public_id)
    this.similar = picter;
    this.loading = false;
  }

  async searchSimilar(file: File) {
    this.loading = true;
    const formData = new FormData()
    console.log('hohere')
    formData.append("image", file)
    const pics = await axios.post<File>(
      `${backendUrl}/gallery/similar`,
      formData
    );
    console.log("hoafter");
    this.similar = pics.data as unknown as { url: string, id: string }[];
    this.loading = false;
  }
}

const pictureStore = new PictureStore();
export default pictureStore;
