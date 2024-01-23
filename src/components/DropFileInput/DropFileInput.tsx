import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { DropFileInputCss } from './DropFileInput.styled'
import pictureStore from 'store/PictureStore'

interface IDropFileInput {
  size: number,
  uploadImg: string
}
const DropFileInput: FC<IDropFileInput> = ({size, uploadImg}) => {

    const wrapperRef = useRef<HTMLDivElement>(null);

  const [drag, setDrag] = useState(false);

  const onDragStart = (e: any) => {
    e.preventDefault()
    wrapperRef.current?.classList.add("dragover");
    setDrag(true)
  } 
  
  const onDragOver = (e: any) => {
    e.preventDefault();
    wrapperRef.current?.classList.remove("dragover");
    setDrag(true);
  }
  const onDragLeave = (e: any) => {
    e.preventDefault()
    wrapperRef.current?.classList.remove("dragover");
    setDrag(false)
  }
  const onDrop = async (e: any) => {
    e.preventDefault();
    wrapperRef.current?.classList.remove("dragover");
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await pictureStore.searchSimilar(file);
    }
  }

  return (
    <DropFileInputCss>

      <div>{drag ? <p>Please, drag the files inside.</p> : <p>Files are already downloaded.</p>}</div>
      <div
        className="drop-file-input"
        ref={wrapperRef}
        onDragStart={e => onDragStart(e)}
        onDragLeave={e => onDragLeave(e)}
        onDragOver={e => onDragOver(e)}
        onDrop={e => onDrop(e)}
        style={{ width: `${size}%`, height: `${size}%`}}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} width={`${size / 1.2}%`} alt="upload" />
        </div>
      </div>
    </DropFileInputCss>
  );
}


export default DropFileInput