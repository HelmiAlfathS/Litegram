import React, { useEffect } from 'react';
import useStorage from '../hooks/UseStorage';
import { motion } from 'framer-motion';
function Progress({ file, setFile }) {
  // Grab from usestorag hook
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [setFile, url]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
      className="progress-bar"
      style={{ width: progress + '%' }}
    ></motion.div>
  );
}

export default Progress;
