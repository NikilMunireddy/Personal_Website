import React from 'react';


class Cool extends React.Component {
    render() {
        return (
            <div>
                 <h5 className="title text_Color" style = {{paddingLeft : "15px"}}>Something Cool</h5><div className = "column" style = {{paddingLeft : "30px"}}></div>
                <div className="card">
                <div className="card-content content_bg">
                <div className="columns">
                <div className="column">
                    <h5 className="title text_Color">Latest tech News</h5><div className = "column" style = {{paddingLeft : "30px"}}></div>
                        <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pKVGlnQVAB?hl=en-IN&gl=IN&ceid=IN%3Aen">
                            <span>TechNews</span>
                        </a>
                </div>
                <div className="column">
                <h5 className="title text_Color">Listen to Music</h5><div className = "column" style = {{paddingLeft : "30px"}}></div>
                        <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://www.musixhub.com/">
                            <span>Listen</span>
                        </a>
                </div>
                <div className="column">
                <h5 className="title text_Color">Why so serious</h5><div className = "column" style = {{paddingLeft : "30px"}}></div>
                        <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://short-funny.com/">
                            <span>LOL</span>
                        </a>
                </div>

                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Cool;
