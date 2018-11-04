import React, { Component } from 'react';
import Header from './components/Header'
import ContentHousing from './components/ContentHousing'
import GithubProfile from './components/GithubProfile'
import Internship from './components/Internship'
import Member from './components/Member'
import Cool from './components/Cool'
import Footer from './components/Footer'
class App extends Component {
  constructor(){
    super();
  }


  render() {
    return (
      <div>
        <Header/>
        <ContentHousing/>
        <GithubProfile/>
        <Internship/>
        <div className = "column" style = {{paddingLeft : "30px"}}></div>
        <Member/>
        <div className = "column" style = {{paddingLeft : "30px"}}></div>
        <Cool/>

      </div>
    );
  }
}

export default App;
