import React from 'react'
import { LoaderCss } from './Loader.styled'
import pictureStore from 'store/PictureStore';

const Loader = ({count = pictureStore.pictures.length, height = '300px', width = '300px', backgroundColor = 'black', marginBottom = '10px', borderRadius = '4px', border = '0'}) => {
    const style = {
        height,
        width,
        borderRadius,
        border,
        backgroundColor,
        marginBottom
    }

    const loaders = Array.from({ length: count }, (_, index) => (
      <LoaderCss key={index} style={{ ...style }}>
      </LoaderCss>
    ));
    return <>{loaders}</>
}

export default Loader