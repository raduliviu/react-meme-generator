import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [memes, setMemes] = useState([])
  const [randomMeme, setRandomMeme] = useState("")

  useEffect(()=>{
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
    setRandomMeme(memes[Math.floor(Math.random() * memes.length)])
  }

  return (
    <div className="App">
      <h1>React Meme Generator</h1>
      <input type="text"></input>
      <input type="text"></input>
      <button onClick={()=>{pickRandomMeme()}}>Random picture</button>
      <div className="imageArea">
        {randomMeme && <img src={randomMeme.url} style={{width: `${randomMeme.width}`}} alt="meme"></img>}
      </div>
    </div>
  );
}

export default App;
