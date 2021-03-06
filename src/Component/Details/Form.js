import React, {useState} from 'react';
import {Container,Row} from 'reactstrap';
import form from './Form.css';
import { Helmet } from 'react-helmet';
 const Main = (props) => {

const [values,setValues]=useState({ 
    name:"",
    email: "",
    address:"",
    linkedIn:"",
    github:"",
    skills:"",
    about:"",
    
    training:"",
    education:"",
    honours:"",
    projects:""
})

    const handleChange = (e) =>{
        const target=e.target;
        const value=target.value;
        const name=target.name;

        setValues({
            ...values,
            [name]:value
        })
    }
    
    const [submit,setSubmit]=useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault()
        setSubmit({[submit]:true})
        console.log(values);
        props.history.push({
            pathname: '/Your-Resume',
            state:values
          });
        
    }
    return(
        <div >
        <Helmet>
            <link rel="stylesheet" href='form.css'/>
        </Helmet>
        <form className="Forms" onSubmit={handleSubmit}>
            <Container>
            <Row className="Field">
            <label className="label">Name : </label>
                    <Row className="Entry">
                    <input className="input" name="name" placeholder="Name" value = {values.name} type="text"  onChange={handleChange}  />
                    </Row>
                </Row>

                <Row className="Field">
                   <label  className="label">Address : </label>
                   <Row className="Entry">
                   <input className="input"  name="address" placeholder="Address" value = {values.address} type="text"  onChange={handleChange}  />
                   </Row>
                </Row>

                <Row className="Field">
                   <label  className="label">Email : </label>
                   <Row className="Entry">
                   <input className="input"  name="email" placeholder="email" value = {values.email} type="text"  onChange={handleChange}  />
                   </Row>
                </Row>

                

                <Row className="Field">
                   <label className="label">Linkedin : </label>
                   <Row className="Entry">
                   <input className="input" name="linkedIn" placeholder="LinkedIn" value = {values.linkedIn} type="text"  onChange={handleChange}  />
                     </Row>
                </Row>

                   <Row className="Field">
                   <label className="label">Github profile : </label>
                   <Row className="Entry">
                   <input className="input" name="github" placeholder="Github" value = {values.github} type="text"  onChange={handleChange}  />
                   </Row>
                   </Row>
                   <Row className="Field">
                   <label className="label">About yourself : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="about" placeholder="About" value = {values.about}   onChange={handleChange}  />
                   </Row>
                   </Row>

                   <Row className="Field">
                   <label className="label">Technical Skills : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="technical" placeholder="Technical" value = {values.technical}   onChange={handleChange}  />
                   </Row>
                   </Row>
                   
                   
                   <Row className="Field">
                   <label className="label">Certificate and Licenses : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="training" placeholder="Training" value = {values.training}   onChange={handleChange}  />
                   </Row>
                   </Row>
                   <Row className="Field">
                       
                   <label className="label">Education : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="education" placeholder="Education" value = {values.education}   onChange={handleChange}  />
                   </Row>
                   </Row>

                   <Row className="Field">
                       
                   <label className="label">Honours </label>
                   <Row className="Entry">
                   <textarea className="Area" name="honours" placeholder="Honours" value = {values.honours}   onChange={handleChange}  />
                   </Row>
                   </Row>

                   <Row className="Field">
                       
                   <label className="label">Projects : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="projects" placeholder="Projects" value = {values.projects}   onChange={handleChange}  />
                   </Row>
                   </Row>
                   



                <button type="submit">

         Create Resume
         </button>
            </Container>
            
        </form>
        
        </div>
    )
}

export default Main;