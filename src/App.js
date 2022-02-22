
import './App.css';
import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import Main from './Component/Main';
import AppRouter from './Router/AppRouter';

function App()
{
  return(
    <div className="Body" >

    <AppRouter />
    
    </div>
  )
}





export default App;
