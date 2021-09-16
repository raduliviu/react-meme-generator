import './App.css';
import React, { useState, useEffect } from 'react';
import domtoimage from 'dom-to-image';

function App() {
  const [memes, setMemes] = useState([])
  const [randomMeme, setRandomMeme] = useState("")
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [uploadedMeme, setUploadedMeme] = useState("")

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    let jsonResponse = { error: "unknown" };
    let url = `https://api.imgflip.com/get_memes`
    try {
      const response = await fetch(url, { cache: 'no-cache' })
      if (response.ok) {
        jsonResponse = await response.json()
        const suitableMemes = jsonResponse.data.memes.filter(meme => meme.box_count === 2)
        setMemes(suitableMemes)
        console.log(suitableMemes)
      }
    } catch (error) {
      console.log(error);
      jsonResponse.error = error.message
    }
    return jsonResponse
  }

  const pickRandomMeme = () => {
    document.getElementById('imgUpload').value = ''
    setRandomMeme("")
    setTopText("")
    setBottomText("")
    setRandomMeme(memes[Math.floor(Math.random() * memes.length)])
  }

  const handleTopTextChange = (event) => {
    setTopText(event.target.value)
  }

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value)
  }

  const handleDownload = () => {
    domtoimage
      .toJpeg(document.getElementById("imageArea"), { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-meme.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="App">
      <h1>React Meme Generator</h1>
      <div className="inputArea">
        <input 
          type="text" 
          value={topText} 
          onChange={handleTopTextChange} 
          placeholder="Enter top text"></input>
        <input 
          type="text" 
          value={bottomText} 
          onChange={handleBottomTextChange} 
          placeholder="Enter bottom text"></input>
        <button 
          onClick={() => { pickRandomMeme() }}
        >Get a random image</button>
        <label htmlFor="imgUpload">Upload your own image</label>
        <input 
          type="file" 
          id="imgUpload"
          onChange={(event) => {
            console.log(event.target.files[0]);
            if (uploadedMeme) {URL.revokeObjectURL(uploadedMeme)}
            setTopText("")
            setBottomText("")
            setUploadedMeme(event.target.files[0])
            setRandomMeme({url: URL.createObjectURL(event.target.files[0])});
          }}
          ></input>
          {randomMeme.url && (
            <button onClick={handleDownload}>Download meme</button>
          )}
      </div>
      
      <div 
        id="imageArea"
        >
        {randomMeme.url && (<>
          <img 
            src={randomMeme.url} 
            alt="meme"></img>

          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2> </>
        )}
        
      </div>
      
    </div>
  );
}

export default App;
