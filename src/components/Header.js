import React from "react";


function Header(){
  return (
    <React.Fragment>
      <div className="navLinks">
      <a href= "/">Home</a>
      <a href= "/">Notifications</a>
      <a href= "/">Messages</a>
      </div>
      <form>
      <input type="search" placeholder="Search"></input>
      <button type="submit">Search</button>
      </form>



      <hr></hr>
    </React.Fragment>
  );
}

export default Header;