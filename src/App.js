import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageContainer from './comps/ImageContainer';

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageContainer />
    </div>
  );
}

export default App;
