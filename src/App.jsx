import { useState, useEffect } from 'react'
import axios from "axios";

const actressApi = "https://lanciweb.github.io/demo/api/actresses/";


function App() {
  const [actresses, setActresses] = useState([]);

  function getData() {
    axios.get(actressApi).then((res) => {
      console.log("Dati ricevuti da API", res.data);
      setActresses(res.data);


    })
  };

  useEffect(getData, []);


  return (
    <>
      <h1>Hello React-API</h1>

      <div className='flex-container flex-wrap gap'>
        {actresses.map((actress, i) =>

          <div className="card" key={i}>
            <h2> {actress.name}</h2>
            <img className="image" src={actress.image} alt="" />
            <p>{actress.nationality} {actress.birth_year}</p>
            <p>Biografia: {actress.biography}</p>
            <p>Premi: {actress.awards}</p>
            <p>Film più famosi:
              <ul className='movieList'>
                {actress.most_famous_movies.map(movie => <li>{movie}</li>)}
              </ul>
            </p>

          </div>
        )}


      </div>
    </>
  )
}

export default App
