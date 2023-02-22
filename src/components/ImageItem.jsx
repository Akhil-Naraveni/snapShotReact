import React from 'react';
import { Link } from 'react-router-dom';
import ImageDetail from './ImageDetail';

const ImageItem = ({ image }) => {
  console.log(image.ownername);
  const author = image.ownername;

  return (
    <li>
      {/* <Link to={`/image/${image.id}`}>
        <ImageDetail image={image} />
      </Link> */}
      <img
        src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
        alt={image.title}
      />
    </li>
  );
};

export default ImageItem;