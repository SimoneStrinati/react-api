import { useState, useEffect } from 'react'
import axios from "axios";

const actressApi = "https://lanciweb.github.io/demo/api/actresses/";


function App() {
  //const [count, setCount] = useState(0)

axios.get(actressApi).then((res) =>{
  console.log(res);
})

  return (
    <>
      <h1>Hello React-API</h1>
    </>
  )
}

export default App
