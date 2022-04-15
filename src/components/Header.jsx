import React from "react";

function Header(props){
    return(
    <div className="Head">
        <header className="App-header">
          <label class="logo">AnimalWorld</label>
          <ul class="nav">
           <li class="home"><a href="#">Home</a></li>
           <li><a  class="about" href="#">About</a></li>
           <li><a class="other" href="#">Other</a></li>
          </ul>
        </header>
    </div>
    )
}

export default Header;