import React from "react";
import './App.css';
import {LoginPage} from './LoginPage.jsx';
import {MainPage} from './MainPage.jsx';
import users from "./users.js";




function App() {

  const [isLoggedIn,setIsLoggedIn] = React.useState(false)
   function toggleLogin (){
    setIsLoggedIn(prevIsLoggedIn=>!prevIsLoggedIn)
   }



  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? <MainPage toggleLogin={toggleLogin} /> : <LoginPage toggleLogin={toggleLogin} users={users}/>}
      </header>
    </div>
  );
}

export default App;
