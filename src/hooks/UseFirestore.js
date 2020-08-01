import React, { useState, useEffect } from 'react';
import { projectFireStore } from '../firebase/config';

// Custom Hook to grab/fetch data from firestore on collection of 'images' file
export const UseFirestore = (collection) => {
  const [docs, setDoc] = useState([]);

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        // init
        let documents = [];

        // doc.data() is method to grab reference collection(each snap) from firebase db
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        // put it all on State
        setDoc(documents);
      });
    // Clean up
    return () => unsub();
  }, [collection]);

  return {
    docs,
  };
};

export default UseFirestore;
