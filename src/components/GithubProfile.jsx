import React from 'react';
import './ContentHousing.css'

class Githubprofile extends React.Component {
    constructor(){
        super()
        this.state={
            gitHubURL:'',
            githubAvatarURL:'',
            Repositories:'',
            RepoURL:'',
            followers:'',
            following:'',
            profileURL:'',
            location:'',
      
          }
    }

    componentDidMount(){
        fetch('https://api.github.com/users/nikilmunireddy')
      .then(res => res.json())
      .then(json =>{
      this.setState({gitHubURL:json.html_url,
        githubAvatarURL:json.avatar_url,
        followers:json.followers,
        following:json.following,
        Repositories:json.public_repos,
        location:json.location,
        RepoURL:json.repos_url
      })
      });
      
      }
    render() {
        return (
            <div>
            <div class="card">
  <header class="card-header">
    <h5 className="title text_Color">GitHub Profile</h5>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content content_bg">
    <div class="content">
    <div>
                <div >
                     <div className="card-content">
                      
                     <div><div className = "">
            <div className = "hero-body">
               <div className = "container">
                  <div className = "columns">
                  <div className = "column" style = {{paddingLeft : "30px"}}>
                       <img src = {this.state.githubAvatarURL} width = "100px" height = "100px"/>
                     </div>
                     <div className = "column">
                     <h4 className = "title text_Color">My GiHub Profile</h4>
                     <div className="">
                      <a href="https://github.com/NikilMunireddy?tab=followers" className="text_Color">Followers  {this.state.followers}</a>  <br/>
                       <a href="https://github.com/NikilMunireddy?tab=following" className="text_Color">Following {this.state.following}</a><br/>
                       <a href="https://github.com/NikilMunireddy?tab=repositories" className="text_Color">Public Repositories {this.state.Repositories}</a><br/>
                       <div style = {{padding : '20px 20px 20px 20px'}}></div>
                       View My GitHub
                       <br/><div style = {{padding : '5px 5px 5px 5px'}}></div>
                       <a className="button is-danger is-outlined is-rounded" style = {{padding : '10px 10px 10px 10px'}} href = "https://github.com/NikilMunireddy">
                         <span>View My GitHub</span>
                        </a>
                     </div>
                    <br/>
                </div>
            </div>
            </div>
            </div></div>
            </div>
                </div>
            </div>
            </div>
     
    </div>
  </div>
</div>
            </div>
        );
    }
}


export default Githubprofile;
