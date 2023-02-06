import React from "react";
import Header from "./Header";
import Profile from "./Profile"
import SideBar from "./SideBar"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <React.Fragment>
      <Header />
      <Profile />
      <SideBar />
    </React.Fragment>
  );
}

export default App;