import React from "react";
import profileImage from "./../img/profile.png"

function Profile() {
  return (
    <React.Fragment>

      <div className="box">
        <img src={profileImage} alt="A profile pic." />
      </div>
      <div className="boxtwo">
        <p className="profileName"><em>Lucas Mollerstuen</em></p>

        <div className="profileLinks">
          <a href="/">Tweets</a>
          <a href="/">Following</a>
          <a href="/">Followers</a>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Profile;