import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import LatesRelease from "./components/LatesRelease";


// import FooTer from "./components/FooTer";

class App extends React.Component {

state={color:["red", "violet", "green"]}

  render(){
  return (
    <>
   <NavBar title= "This is ... " color={this.state.color[0]}/>
   <MyJumbotron/>
   <LatesRelease/>
   <MyFooter/>
   </>
  );
}
}

export default App;
