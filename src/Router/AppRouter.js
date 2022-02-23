import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Form from '../Component/Details/Form';
import Resume from '../Component/Resume/Resume';
const AppRouter = () =>{
    return(
        <>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Form}/>
            <Route path ='/Your-Resume' component={Resume}/>
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default AppRouter;



