import React from 'react'
import style from './style.css';
import {Helmet} from 'react-helmet';



function Home(props)
{
    const {name,email,linkedIn,github,skills,about,training,education,honours,projects}=props.location.state

    const Honours = () =>{
        if (honours!=""){
            return(
                <>
                <h4>Honour</h4>
                <p>{honours}</p>
                </>
            )
        }
        else{
            return(
                <></>
            )
            
        }
    }
    const Certificate = () =>{
        if (training!=""){
            return(
                <>
                <h4>Certificates and Honours</h4>
                <p>{training}</p>
                </>
            )
        }
        else{
            return(
                <></>
            )
            
        }
    }
    const Projects = () =>{
        if (projects!=""){
            return(
                <>
                <h4>Projects</h4>
                <p>{projects}</p>
                </>
            )
        }
        else{
            return(
                <></>
            )
            
        }
    }

    const Skills = () =>{
        if (skills!=""){
            return(
                <>
                <h4>Skills</h4>
                <p>{skills}</p>
                </>
            )
        }
        else{
            return(
                <></>
            )
            
        }
    }
    

    return(
        <div className='page'>
            <Helmet>
                <link rel="stylesheet" href='style.css'/>
            </Helmet>
            <div className='fields'>

            <h2>{name}</h2>
            <div className='links'>

            <p >{email}</p>
            <p >{linkedIn}</p>
            <p >{github}</p> 
            </div>
            <h4>{about}</h4>
            <hr />
            <h4>Education</h4>
            <p>{education}</p>
            <Skills />
            <Honours />
            <Certificate />
            <Projects />
            </div>

            
            
        </div>
    )
}

export default Home