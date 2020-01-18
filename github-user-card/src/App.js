import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        githubuser: []
  }
}

componentDidMount() {
    fetch("https://api.github.com/users/rrawla2")
    .then(response => response.json())
    .then(users => {
      console.log("kg: fetch: users", users)
      this.setState({ ...this.state, githubuser: users})
    })
    .catch(err => console.log("Error on Fetch: ", err))
  
}

  render() {
    console.log("kg: render")
  return (
    <div className="container">
      <header className="card header">
        <div className="card">
          <img className="card-img" src={this.state.githubuser.avatar_url} alt="avatar"></img>
        
          <h3  className="name">
          {this.state.githubuser.name}
          <p className="username">User Name: {this.state.githubuser.login}</p>
          <p >Location: {this.state.githubuser.location}</p>
          <p >Profile: {this.state.githubuser.url}</p> 
          <p>Followers: {this.state.githubuser.followers}</p>
          <p>Following: {this.state.githubuser.following}</p>
          <p>Bio: {this.state.githubuser.bio}</p>
          </h3>

      </div>
      </header>
    </div>
  );//return
}//render
}//App

export default App;
