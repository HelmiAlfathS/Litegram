import React, { useEffect } from 'react';
import useStorage from '../hooks/UseStorage';

function Progress({ file, setFile }) {
  // Grab from usestorag hook
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [setFile, url]);

  return <div className="progress-bar" style={{ width: progress + '%' }}></div>;
}

export default Progress;
