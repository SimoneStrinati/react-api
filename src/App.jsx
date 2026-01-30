import { useState, useEffect } from 'react'
import axios from "axios";

const actressApi = "https://lanciweb.github.io/demo/api/actresses/";


function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  function getData() {
    axios.get(actressApi).then((res) => {
      console.log("Dati ricevuti da API", res.data);
      setActresses(res.data);

    }).catch(error => {
      console.log("C'è un problema", error.message);
    })
    
  };



  useEffect(getData, []);


  return (
    <>
      <h1>Lista Attrici</h1>

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
