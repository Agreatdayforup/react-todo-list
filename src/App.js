import React from "react";

//scss loads
import "App.scss";

//file loads
import thumb from "./tank-top.png";




const App = () => (
    <div className="HelloCont">
        <h1 className="wow" >Hello React????</h1>
        <img className="helloImg" src={thumb} alt=""/>
    </div>
);

export default App;