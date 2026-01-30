import { useState, useEffect, useTransition } from 'react'
import axios from "axios";

const actressApi = "https://lanciweb.github.io/demo/api/actresses/";
const actorApi = "https://lanciweb.github.io/demo/api/actors/";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [fullActorList, setFullActorList] = useState([]);

  function getData() {

    // Chiammata lista Attrici
    axios.get(actressApi).then((res) => {
      console.log("Lista Attrici", res.data);
       setActresses(res.data);

    }).catch(error => {
      console.log("C'è un problema", error.message);
    })

      //Chiamata lista Attori
      axios.get(actorApi).then((res) => {
        console.log("Lista Attori", res.data);
        setActors(res.data);

      }).catch(error => {
        console.log("C'è un problema", error.message);
      })
    };

  function getActorList() {
    const listActors = [...actresses, ...actors];
    setFullActorList(listActors);
  };

  function getAward(premio) {
    if(Array.isArray(premio)) {
      return premio.join(", ")
    } else (premio === "string")
    return premio;
  }

  useEffect(getData, []);

  useEffect(getActorList, [actresses, actors]);


  return (
    <>
      <h1>Lista Attrici/Attori</h1>

      <div className='flex-container flex-wrap gap'>
        {fullActorList.map((person, i) =>

          <div className="card" key={i}>

            <h2> {person.name}</h2>

            <img className="image" src={person.image} alt="" />
            <p>{person.nationality} {person.birth_year}</p>
            <p>Biografia: {person.biography}</p>
            <p>Premi: {getAward(person.awards)}</p>
            <span>Film più famosi:
              <ul className='movieList'>
                {person.most_famous_movies.map(movie => <li>{movie}</li>)}
              </ul>
            </span>

          </div>
        )}

      </div>
    </>
  )
}

export default App
