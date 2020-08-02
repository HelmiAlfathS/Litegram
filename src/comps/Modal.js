import React from 'react';
import { motion } from 'framer-motion';
const Modal = ({ selectedImg, setSelectedImg }) => {
  const closeModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={closeModal}
    >
      <img src={selectedImg} alt="warm" />
    </motion.div>
  );
};

export default Modal;
