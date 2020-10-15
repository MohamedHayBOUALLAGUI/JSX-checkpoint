import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import myImage from "./pushurself.jpg";

function App() {
  return (
    <div>
      <div
        style={{ border: "1px solid black", maxWidth: "100vw" }}
        className="container"
      >
        <h1 className="title red">
          We need always positive vibes to be in good mood ^_^ !
        </h1>
        <br />
        <img src={myImage} alt="push_your_self" height="450px" width="700px" />
        <br />
        <img src="/success.jpg" alt="success" height="450px" width="700px" />
      </div>
      <video width="320" height="240" controls>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
