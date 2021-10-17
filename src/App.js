
import './App.css';
import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import Main from './Component/Main';


function App()
{
  return(
    <div className="Body" >

    <BrowserRouter>

      <Main />

    </BrowserRouter>
    
    </div>
  )
}





export default App;
