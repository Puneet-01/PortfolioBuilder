import React, {useState} from 'react';
import {Container,Row} from 'reactstrap';

 const Main = (props) => {

const [values,setValues]=useState({
    name:"",
    email: "",
    linkedIn:"",
    github:"",
    skills:"",
    about:"",
    interest:"",
    training:"",
    education:"",
    nonTech:"",
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
        props.history?.push({
            pathname: '/Home',
            values
          });
        
    }
    return(
        <>
        <form className="Forms" onSubmit={handleSubmit}>
            <Container>
            <Row className="Field">
            <label className="label">Name : </label>
                    <Row className="Entry">
                    <input className="input" name="name" placeholder="Name" value = {values.name} type="text"  onChange={handleChange}  />
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
                   <input className="input" name="linkedin" placeholder="Linkedin" value = {values.linkedIn} type="text"  onChange={handleChange}  />
                     </Row>
                </Row>

                   <Row className="Field">
                   <label className="label">Github profile : </label>
                   <Row className="Entry">
                   <input className="input" name="github" placeholder="Github" value = {values.github} type="text"  onChange={handleChange}  />
                   </Row>
                   </Row>
                   <Row className="Field">
                   <label className="label">Technical Skills : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="technical" placeholder="Technical" value = {values.technical}   onChange={handleChange}  />
                   </Row>
                   </Row>
                   <Row className="Field">
                   <label className="label">About yourself : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="about" placeholder="About" value = {values.about}   onChange={handleChange}  />
                   </Row>
                   </Row>
                   <Row className="Field">
                   <label className="label">Your Interest : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="interest" placeholder="Interest" value = {values.interest}   onChange={handleChange}  />
                   </Row>
                   </Row>
                   <Row className="Field">
                   <label className="label">Training : </label>
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
                       
                   <label className="label">Non Technical Skils : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="nonTech" placeholder="Skills" value = {values.nonTech}   onChange={handleChange}  />
                   </Row>
                   </Row>

                   <Row className="Field">
                       
                   <label className="label">Projects : </label>
                   <Row className="Entry">
                   <textarea className="Area" name="projects" placeholder="Projects" value = {values.projects}   onChange={handleChange}  />
                   </Row>
                   </Row>
                   



                <button type="submit">

         Submit
         </button>
            </Container>
            
        </form>
        
        </>
    )
}

export default Main;