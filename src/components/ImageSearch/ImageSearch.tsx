import React from 'react'
import { ImageSearchCss } from './ImageSearch.styled'
import DropFileInput from '../DropFileInput'
import uploadImg from "images/cloud-upload-regular-240.png";

const ImageSearch = () => {
  return (<>
    <ImageSearchCss><div className="box">Drag & Drop files here ;)</div></ImageSearchCss>
    <DropFileInput uploadImg={uploadImg} size={100} />
    </>
  )
}

export default ImageSearch