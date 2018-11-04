import React from 'react';
import Inversa from '../Resources/inversa.png'
import Saranyu from '../Resources/saranyu.png'
import './ContentHousing.css'

class Internship extends React.Component {
    constructor(){
        super();
        this.Inversa=this.Inversa.bind(this);
        this.Saranyu=this.Saranyu.bind(this);
    }
    Inversa(){
        window.location.assign("http://inversatechnosoft.com/")
    }
    Saranyu(){
        window.location.assign("https://www.saranyu.in/")
    }
    render() {
        return (
            <div>
                 <h5 className="title text_Color">Internship</h5><div className = "column" style = {{paddingLeft : "30px"}}></div>
                 <div className = "card content_bg ">
               <div className = "container ">
                  <div className = "columns">
                  <div className = "column" >
                      <img src={Inversa} onClick={this.Inversa}width="50px" height="50px"/>
                      <h5 className="title text_Color" onClick={this.Inversa}>Inversa Technosoft</h5>
                      <p className="grey_text">
                      1) Worked on a video streaming protocol (SRT) and could successfully stream a video in real time with 
                      very minimal packet loss using and also worked on demand video streaming . 
                        <br></br><div className = "column" style = {{paddingLeft : "30px"}}></div>
                        2) Configured a VPN server on a Amazon EC2 Ubuntu instance and monitored the CPU load on the client and server.
                      </p>
                      <div className = "column" style = {{paddingLeft : "30px"}}></div>
                      <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://drive.google.com/open?id=1UdyYXWzWVATswDjc7Ih48ORK060zzQXO">
                         <span>View Internship certificate</span>
                        </a>
                </div>
                     <div className = "column">
                    <img src={Saranyu} onClick={this.Saranyu} width="75px" height="75px"/>
                    <div className = "column" style = {{paddingLeft : "30px"}}></div>
                    <h5 className="title text_Color" onClick={this.Saranyu}>Saranyu Technologies</h5>
                    <p className="grey_text">
                    Worked on various projects in the field of React.js, Python. worked on projects like smart system for hydroponics
                     and shortest path bot. Worked on technologies like web sockets( to stream real 
                     time sensor data) , chart.js (to plot on the display system), Using TCP and UDP connections to pass instructions to the shortest path bot.
                    </p>
                    <br/>
                    <div className = "column" style = {{paddingLeft : "30px"}}></div>
                    <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://drive.google.com/open?id=1eXnm7-NdCMSAg6SH863H3LBVjuFvfyXk">
                         <span>View Internship certificate</span>
                        </a>
                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}



export default Internship;
