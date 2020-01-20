import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        githubuser: [],
        githubfollower: []
  }
}

componentDidMount() {
    fetch("https://api.github.com/users/rrawla2")
    .then(response => response.json())
    .then(users => {console.log("Users", users)
      this.setState({ ...this.state, githubuser: users})
    })
    .catch(err => console.log("Error on Fetch: ", err))

    fetch("https://api.github.com/users/rrawla2/followers")
    .then(response => response.json())
    .then(followers => {console.log("Follower", followers)
      this.setState({ ...this.state, githubfollower:  followers})
      this.state.githubfollower.map(follower => 
      fetch(`https://api.github.com/users/${follower.name}`))
    })
    .catch(err => console.log("Error on Fetch: ", err))
}


  render() {
    console.log("render")
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
    
    <header className="card header">
      {this.state.githubfollower.map(follower => 
      <div className="card">
          <img className="card-img" src={follower.avatar_url} alt="avatar"></img>
          <h3  className="name">
          <p className="username">User Name: {follower.login}</p>
          <p>Repository: {follower.html_url}</p>

          </h3>

      </div>
      )} 
      </header>
    </div>

  );//return
}//render
}//App

export default App;
