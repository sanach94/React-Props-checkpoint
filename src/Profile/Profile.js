import React from "react";


const Profile = (props) => {
    
      
  return (
    <div>
          {/* {props.profileName ? <h2>HELLOOOO </h2>  : <h2>go away</h2>} */}
      {props.children}
      <a href="/" onClick={props.handleName}> <h1 style={{color:'grey', fontStyle:'italic'}}> My name</h1></a>
    </div>
  );
};
Profile.defaultProps = {
    profileName:"sana",
     profileBio:"web",
     profileProfession:"webdev",
     handleName: "data not transmitted"
  };
export default Profile;
