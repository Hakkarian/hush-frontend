import React from 'react'
import { ImageSearchCss } from './ImageSearch.styled'
import DropFileInput from '../DropFileInput'
import uploadImg from "images/cloud-upload-regular-240.png";

const ImageSearch = () => {

    const onFileChange = (files: File[]) => {
        console.log('here it comes', files)
    }
  return (<>
    <ImageSearchCss><div className="box">Drag & Drop files here ;)</div></ImageSearchCss>
    <DropFileInput onFileChange={(files: File[]) => onFileChange(files)} uploadImg={uploadImg} size={100} />
    </>
  )
}

export default ImageSearch