import React from 'react';
import ACM from '../Resources/acm.png'
import './ContentHousing.css'


class Member extends React.Component {
    constructor(){
        super();
        this.ACMOrg=this.ACMOrg.bind(this);
    }
    ACMOrg(){
        window.location.assign("https://www.acm.org/")
    }
    render() {
        return (
            <div >
              <h5 className="title text_Color">Membership</h5><div className = "column" style = {{paddingLeft : "30px"}}></div>
              <div className="card content_bg">
              <div className="container">
              <img src={ACM} onClick={this.ACMOrg}width="50px" height="50px"/>
              <h5 className="title text_Color" onClick={this.ACMOrg}>ACM</h5>  
              <div className="columns">
              <div className="column">
              <p className="grey_text">
                Member of The Association for Computing Machinery. ACM is the world's 
                largest scientific and educational computing society.
                </p>
              </div>

              </div>
              </div>
              </div>
         
            </div>
        );
    }
}


export default Member;
