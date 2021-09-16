import './App.css';
import React, { useState, useEffect } from 'react';
import Uploader from './Uploader';

function App() {
  const [memes, setMemes] = useState([])
  const [randomMeme, setRandomMeme] = useState("https://i.imgflip.com/1bij.jpg")
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")

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
    setTopText("")
    setBottomText("")
    setRandomMeme(memes[Math.floor(Math.random() * memes.length)].url)
  }

  const handleTopTextChange = (event) => {
    setTopText(event.target.value)
  }

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value)
  }

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
        >Random picture</button>
      </div>

      <div className="imageArea">
        <img src={randomMeme} alt="meme"></img>
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
      <Uploader />
      
    </div>
  );
}

export default App;
