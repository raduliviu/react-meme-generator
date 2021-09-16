import React, { useState } from "react";

export default function App() {
  const [uploadedImg, setUploadedImg] = useState(null);

  return (
    <div className="App">
      <h1>Upload your own image</h1>
      {uploadedImg && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(uploadedImg)}
          />
          <br />
          <button onClick={() => setUploadedImg(null)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setUploadedImg(event.target.files[0]);
        }}
      />
    </div>
  );
}