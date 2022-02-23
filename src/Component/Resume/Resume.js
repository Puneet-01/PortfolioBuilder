import React from 'react'
import style from './style.css';
import {Helmet} from 'react-helmet';
function Home(props)
{
    //const [name,email,linkedin,github,skills,about,interest,training,education,nonTech,projects]=props.location.state
    return(
        <div>
            <Helmet>
                <link rel="stylesheet" href='style.css'/>
            </Helmet>
            
            <h3>{props.location.state.name}</h3>
            <h3>{props.location.state.email}</h3>
            <h3>{props.location.state.linkedIn}</h3>
            <h3>{props.location.state.github}</h3>
            <h3>{props.location.state.skills}</h3>
            <h3>{props.location.state.about}</h3>
            <h3>{props.location.state.interest}</h3>
            <h3>{props.location.state.training}</h3>
            <h3>{props.location.state.education}</h3>
            <h3>{props.location.state.nonTech}</h3>
            <h3>{props.location.state.projects}</h3>
            
            
        </div>
    )
}

export default Home