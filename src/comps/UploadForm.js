import React, { useState } from 'react';
import Progress from './Progress';
function UploadForm() {
  // State
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Method
  const handleChange = (e) => {
    let target = e.target.files[0];
    let types = ['image/png', 'image/jpeg'];

    // Validation. includes is a method to check value is in array
    if (target && types.includes(target.type)) {
      console.log(target);
      setFile(target);
    } else {
      setFile(null);
      setError('please input jpeg or png file');
    }
  };
  return (
    <div>
      <label>
        <span>+</span>
        <input type="file" onChange={handleChange} />
      </label>
      <div className="Output">
        {error && <div className="error">{error}</div>}
        {file && <div className=""> {file.name}</div>}
      </div>
      {file && <Progress file={file} setFile={setFile} />}
    </div>
  );
}

export default UploadForm;
