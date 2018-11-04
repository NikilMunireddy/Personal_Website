import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <div>
                 <h5 className="title text_Color" style = {{paddingLeft : "15px"}}></h5><div className = "column" style = {{paddingLeft : "30px"}}></div>
                 <div className="card">
                 <div className="card-content content_bg">
                <footer>
                <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "mailto:nikilmunireddy066@gmail.com">
                         <span>nikilmunireddy066@gmail.com</span>
                        </a>
                </footer>
                 </div>
                 </div>
            </div>
        );
    }
}

export default Footer;
