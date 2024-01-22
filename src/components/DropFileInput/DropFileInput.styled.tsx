import styled from "styled-components";

export const DropFileInputCss = styled.div`
  .drop-file-input {
    position: relative;
    height: 50px;

    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: azure;
    border: 2px dashed black;
    border-radius: 20px;

    transition: opacity 250ms ease-in-out, border-radius 250ms ease-in-out;

    &:hover {
      opacity: 0.6;
      border-radius: 10px 20px;
    }

    .dragover {
      opacity: 0.6;
    }
  }

  .drop-file-input.dragover {
    opacity: 0.3;
  }

  .drop-file-input input {
    opacity: 0;
    position: absolute;

    top: 0;
    left: 0;


    cursor: pointer;
  }
  .drop-file-input__label {
    text-align: center;
    color: purple;
    font-weight: 600;
    padding: 10px;
  }

  .drop-file-preview {
  }
  .drop-file-preview__title {
    margin-bottom: 20px;

    text-align: center;
  }
  .drop-file-preview__item {
    position: relative;

    margin-bottom: 10px;
    padding: 15px;
    border-radius: 20px 10px;

    background-color: lightgray;

    display: flex;
    justify-content: space-between;

    transition: border-radius 250ms ease-in-out,
      background-color 250ms ease-in-out, color 250ms ease-in-out;

    &:hover,
    &:focus {
      border-radius: 10px 20px;
      background-color: darkblue;
      color: white;
    }

    img {
      width: 3rem;
    }
  }

  .drop-file-preview__item__del {
    background-color: red;
    border-radius: 0 0 0 50px;
    border: 1px solid black;

    transition: border-radius 250ms ease-in-out,
      background-color 250ms ease-in-out, color 250ms ease-in-out,
      border-color 250ms ease-in-out;

    &:hover,
    &:focus {
      border-radius: 20px 20px 20px 0;
      background-color: azure;
      color: red;
      border-color: white;
    }
  }
`;