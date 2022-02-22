import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Main from '../Component/Main';
import Home from '../Component/Home';
const AppRouter = () =>{
    return(
        <>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path ='/Home' component={Home}/>
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default AppRouter;



