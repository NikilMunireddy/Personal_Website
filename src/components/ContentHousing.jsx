import React from 'react';
import './ContentHousing.css'
import App from '../App'
import Image from '../Resources/nikilm.jpg'


class ContentHousing extends React.Component {
    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div>
                <div className="card content_bg">
                     <div className="card-content">
                      
                     <div><div className = "">
            <div className = "hero-body">
               <div className = "container">
                  <div className = "columns">
                  <div className = "column" style = {{paddingLeft : "30px"}}>
                       <img src = {Image} width = "300px" height = "300px"/>
                     </div>
                     <div className = "column">
                     <h4 className = "title text_Color">Full Stack Developer</h4>
                      <p>I'm Nikil, student at KSIT. I have programming and interpersonal skills, with the proactive, optimistic attitude and agility to learn new things with enthusiasm.</p>
                    <br/>
                      <h5 className="title text_Color">Follow me on</h5>
                       <div style = {{padding : '20px 20px 20px 20px'}}>
                       <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://github.com/NikilMunireddy">
                         <span>GitHub</span>
                        </a>
                        &nbsp;&nbsp;
                        <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://www.linkedin.com/in/nikil-m-bb7105151/">
                         <span>Linkedin</span>
                        </a>
                        &nbsp;&nbsp;
                        <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://twitter.com/nikilmunireddy">
                         <span>Twitter</span>
                        </a>
                        &nbsp;&nbsp;
                        <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://www.instagram.com/nikil_m_066/">
                         <span>Instagram</span>
                        </a>
                        <br/>
                    </div>
                    <h5 className="title text_Color">View my resume</h5>
                       <div style = {{padding : '20px 20px 20px 20px'}}>
                    
                        <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "">
                         <span>Resume</span>
                        </a>
                        </div>
                </div>
            </div>
            </div>
            </div></div>
            </div>
                </div>
            </div>
            </div>
        );
    }
}



export default ContentHousing;
