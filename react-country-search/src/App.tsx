import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Country } from './componet/Country';
 import {Data}  from "../src/componet/Data"

function App() {
  // const[query, setQuery] = useState("");
  // const debounced = useDebouncedCallback(
  //   // function
  //   (value) => {
  //     setQuery(value);
  //   },
  //   // delay in ms
  //   1000,
  //   {maxWait:1000}
  // );
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element ={<Country/>} />
     <Route path='/data/:item'  element={<Data/>} /> 
    </Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
