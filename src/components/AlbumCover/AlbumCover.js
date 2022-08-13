import React from "react";
import "./AlbumCover.css";

const AlbumCover = ({ url }) => {
  return (
    <div className='album-cover__container'>
      <img className='album-cover__img' src={url} alt='Album Cover' />
      <img className='album-cover__shadow' src={url} alt='Album Cover' />
    </div>
  );
};

export default AlbumCover;
