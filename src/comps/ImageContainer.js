import React from 'react';
import { UseFirestore } from '../hooks/UseFirestore';
import { motion } from 'framer-motion';

const ImageContainer = ({ setSelectedImg }) => {
  const { docs } = UseFirestore('images');
  console.log(docs.length);

  // const iterate = docs.map((doc) => console.log(doc.url));
  return (
    <div className="img-grid">
      {docs.length > 0 &&
        docs.map((item, index) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={item.id}
            onClick={() => setSelectedImg(item.url)}
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              src={item.url}
              alt="harm pic"
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageContainer;

// Animation from motion
// we just only need add motion.Element for use all motion property
// whileHover -- whilehover animation
// layout add motion to 'Position' when new image is uploaded
