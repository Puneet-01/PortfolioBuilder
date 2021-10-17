import React, {Component} from 'react'
import {Container, Row} from 'reactstrap'

class Main extends Component {
    constructor(){
        super()
        this.state={
            fullName:"",
            email:"",
            linkedin:"",
            github:"",
            technical:"",
            interest:"",
            about:"",
            training:"",
            education:"",
            nonTech:"",
            projects:""
            
        }
        
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleChange(event)
    {
        const {name,value} = event.target
        this.setState({
            [name] : value
        })
        
    }

   handleSubmit()
   {
       alert(this.state)
   }

    render()
    {
        
        return(
            <div className="Resume" >
                
               
                <form onSubmit={this.handleSubmit} className="Forms">
                    <Container>
                    <h1 className="Heading">Resume Builder</h1>
                    <Row className="Field">
                        
                        <label className="label">Name : </label>
                        <Row className="Entry">
                        <input className="input" name="fullName" placeholder="Name" value = {this.state.fullName} type="text"  onChange={this.handleChange}  />
                        </Row>
                    </Row>

                    <Row className="Field">
                       <label className="label" className="label">Email : </label>
                       <Row className="Entry">
                       <input className="input"  name="email" placeholder="email" value = {this.state.email} type="text"  onChange={this.handleChange}  />
                       </Row>
                    </Row>

                    <Row className="Field">
                       <label className="label">Linkedin : </label>
                       <Row className="Entry">
                       <input className="input" name="linkedin" placeholder="Linkedin" value = {this.state.linkedin} type="text"  onChange={this.handleChange}  />
                         </Row>
                    </Row>

                       <Row className="Field">
                       <label className="label">Github profile : </label>
                       <Row className="Entry">
                       <input className="input" name="github" placeholder="Github" value = {this.state.github} type="text"  onChange={this.handleChange}  />
                       </Row>
                       </Row>
                       <Row className="Field">
                       <label className="label">Technical Skills : </label>
                       <Row className="Entry">
                       <textarea className="Area" name="technical" placeholder="Technical" value = {this.state.technical}   onChange={this.handleChange}  />
                       </Row>
                       </Row>
                       <Row className="Field">
                       <label className="label">About yourself : </label>
                       <Row className="Entry">
                       <textarea className="Area" name="about" placeholder="About" value = {this.state.about}   onChange={this.handleChange}  />
                       </Row>
                       </Row>
                       <Row className="Field">
                       <label className="label">Your Interest : </label>
                       <Row className="Entry">
                       <textarea className="Area" name="interest" placeholder="Interest" value = {this.state.interest}   onChange={this.handleChange}  />
                       </Row>
                       </Row>
                       <Row className="Field">
                       <label className="label">Training : </label>
                       <Row className="Entry">
                       <textarea className="Area" name="training" placeholder="Training" value = {this.state.training}   onChange={this.handleChange}  />
                       </Row>
                       </Row>
                       <Row className="Field">
                           
                       <label className="label">Education : </label>
                       <Row className="Entry">
                       <textarea className="Area" name="education" placeholder="Education" value = {this.state.education}   onChange={this.handleChange}  />
                       </Row>
                       </Row>

                       <Row className="Field">
                           
                       <label className="label">Non Technical Skils : </label>
                       <Row className="Entry">
                       <textarea className="Area" name="nonTech" placeholder="Skills" value = {this.state.nonTech}   onChange={this.handleChange}  />
                       </Row>
                       </Row>

                       <Row className="Field">
                           
                       <label className="label">Projects : </label>
                       <Row className="Entry">
                       <textarea className="Area" name="projects" placeholder="Projects" value = {this.state.projects}   onChange={this.handleChange}  />
                       </Row>
                       </Row>
                       
                    <button>Create Resume</button>
                   </Container>
               </form>
            </div>
            
        )
    }
}

export default Main