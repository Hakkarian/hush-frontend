import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { DropFileInputCss } from './DropFileInput.styled'

import uploadImg from 'images/cloud-upload-regular-240.png';
import { imageConfig } from 'components/ImageSearch/ImageConfig';

interface IDropFileInput {
    onFileChange: Function
}
const DropFileInput: FC<IDropFileInput> = ({onFileChange}) => {

    const wrapperRef = useRef<HTMLDivElement>(null);

    const [fileList, setFileList] = useState<File[]>([]);
    console.log('length file list', fileList.length);

    const onDragEnter = () => wrapperRef.current?.classList.add("dragover");
    const onDragLeave = () => wrapperRef.current?.classList.remove("dragover");
    const onDrop = () => wrapperRef.current?.classList.remove("dragover");

    const onFileDrop = (e: ChangeEvent<HTMLInputElement>) => {
        const newFile = e.target.files?.[0]
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            onFileChange(updatedList);
        }
    }

    const handleDelete = (file: File) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1)

        setFileList(updatedList);
        onFileChange(updatedList);
    }
  return (
    <DropFileInputCss>
      <div
        className="drop-file-input"
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src={uploadImg} alt="upload" />
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      {fileList.length > 0 && (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          <ul className="drop-file-preview__list">
            {fileList.map((item: File, index: number) => (
              <li className="drop-file-preview__item" key={index}>
                <img
                  src={
                    imageConfig[
                      item.type.split("/")[1] as keyof typeof imageConfig
                    ] || imageConfig["default"]
                  }
                  alt="file"
                  width={100}
                />
                <div className="drop-file-preview__item__info">
                  <p>{item.name}</p>
                  <p>{item.size}</p>
                    </div>
                    <button type='button' className="drop-file-preview__item__del" onClick={(() => handleDelete(item))} >x</button>

              </li>
            ))}
          </ul>
        </div>
      )}
    </DropFileInputCss>
  );
}


export default DropFileInput