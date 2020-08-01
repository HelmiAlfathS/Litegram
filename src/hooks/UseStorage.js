import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFireStore,
  timestamp,
} from '../firebase/config';

function useStorage(file) {
  // Init
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // ref stage -- procjetStorage is root ref we declare at config firebase, then binding to file which is the file uploaded
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection('images');

    // Uploading file --> https://firebase.google.com/docs/storage/web/upload-files
    storageRef.put(file).on(
      // arg 1
      'state_changed',

      // arg 2
      (snapy) => {
        let percent = (snapy.bytesTransferred / snapy.totalBytes) * 100;
        setProgress(percent);
      },

      // arg 3
      (err) => {
        setError(err);
      },

      //arg 4
      // Grab Url from storage
      // create timestamp from timestamp() that we import from firebase config
      // Create collection
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return {
    progress,
    url,
    error,
  };
}

export default useStorage;
