import React from 'react';
import { UseFirestore } from '../hooks/UseFirestore';

const ImageContainer = () => {
  const { docs } = UseFirestore('images');
  console.log(docs.length);
  // const iterate = docs.map((doc) => console.log(doc.url));
  return (
    <div className="img-grid">
      {docs.length > 0 &&
        docs.map((item, index) => (
          <div className="img-wrap" key={item.id}>
            <img src={item.url} alt="harm pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageContainer;
