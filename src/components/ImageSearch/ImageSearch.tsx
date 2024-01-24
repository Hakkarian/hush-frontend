import React from 'react'
import { ImageSearchCss } from './ImageSearch.styled'
import DropFileInput from '../DropFileInput'
import pictureStore from 'store/PictureStore'


const ImageSearch = () => {
  const handleSearch = async (file: File) => {
    await pictureStore.searchSimilar(file);
  }
  return (<>
    <ImageSearchCss><div className="box">Drag & Drop files here ;)</div></ImageSearchCss>
    <DropFileInput borderRadius={"20px"} size={100} name="Similarity search" onFileChange={(file: File) => handleSearch(file)} />
    </>
  )
}

export default ImageSearch