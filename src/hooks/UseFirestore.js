import React, { useState, useEffect } from 'react';
import { projectFireStore } from '../firebase/config';

export const UseFirestore = (collection) => {
  // const [docs, setDocs] = useState([]);

  // useEffect(() => {
  //   const unsub = projectFireStore
  //     .collection(collection)
  //     .orderBy('createdAt', 'desc')
  //     .onSnapshot((snap) => {
  //       let documents = [];
  //       snap.forEach((doc) => {
  //         documents.push({ ...doc.data(), id: doc.id });
  //       });
  //       setDocs(documents);
  //     });

  //   return () => unsub();
  //   // this is a cleanup function that react will run when
  //   // a component using the hook unmounts
  // }, [collection]);

  // return { docs };

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
