import React from 'react';
import './ContentHousing.css'

class Header extends React.Component {
    constructor(){
        super()
        this.state={
            active:'is-active'
        }
    }
    render() {
        return (
            <div >
              <nav className = " card navbar header ">
                <div className = "container">
                    <div className = "navbar-brand">
                        <a className = "navbar-item" href = "/"><img src = "https://avatars1.githubusercontent.com/u/32808428?v=4"/></a>
                        <a className = "navbar-item" href = "/"><h5 className="title text_Color">Nikil M</h5></a>

                    </div>
                </div>
                </nav>
            </div>
        );
    }
}


export default Header;
