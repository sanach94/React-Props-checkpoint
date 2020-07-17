import React from 'react';
import './App.css';
import Profile from './Profile/Profile.js';
import PropTypes from "prop-types";

let fullName="sana"
let bio="web"
let profession="webdev"

function App() {
  function handleName(e) {
    e.preventDefault();
    alert(fullName);
  }
  return (
    <div className="App">
     
    <Profile profileName={fullName} profileBio={bio} profileProfession={profession} handleName={handleName}>
    <img className="img" src="https://i.pinimg.com/564x/2a/bc/3c/2abc3cf78b950cbd6707d9fa66242851.jpg" alt="Logo"/>
    </Profile>
    </div>
  );
}
App.prototypes ={
  profileName: PropTypes.string,
  profileBio: PropTypes.string,
  profileProfession: PropTypes.string,
  handleName: PropTypes.func
}

export default App;
