import './Introduc.css';
import './Utilities.css';
import React from 'react';

function Introduc() {

    return (
    <>
      <section className="introduc">
        <div className="introduc-card">
          <div className="circle"></div>
          <div className="content">
            <h2>Tamás Floch</h2>
            <p>Hey! I'm Tamas. 
               I've 2 years of experience 
               in full-stack web development.
               I used to work with Java - Spring Boot
               in backend, and Js - React in frontend.
               I consider myself to be 
               cooperative and resourceful.</p>
          </div>
          <img src={require('./images/csokesz.png')} alt="" />
        </div>
        <div className="introduc-card">
          <div className="circle"></div>
          <div className="content">
            <h2>Norbert Urban</h2>
            <p>Hi Im Norbert, I'm 25 years old, junior programmer. Im working for a ltd, im a robotic programmer, and web developer. Im interested in CSS, HTML, JavaScript in frontend.</p>
          </div>
          <img src={require('./images/norfli.png')} alt="" />
        </div>
      </section>
    </>
    );
  }

  export default Introduc