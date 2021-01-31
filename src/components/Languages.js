import './Languages.css';
import './Utilities.css';
import React from 'react';

function Languages() {

    return (
    <>
      <section class="languages">
        <h1 class="md text-center my-2">
            Supported Languages
        </h1>
        <div class="conatiner flex">
            <div class="card">
                <h4>CSS</h4>
                <img src="images/logos/css.png" alt=""/>
            </div>
            <div class="card">
                <h4>HTML</h4>
                <img src="images/logos/html.png" alt=""/>
            </div>
            <div class="card">
                <h4>JS</h4>
                <img src="images/logos/js.png" alt=""/>
            </div>
            <div class="card">
                <h4>TS</h4>
                <img src="images/logos/ts.png" alt=""/>
            </div>
            <div class="card">
                <h4>JAVA</h4>
                <img src="images/logos/java.png" alt=""/>
            </div>
            <div class="card">
                <h4>PYTHON</h4>
                <img src="images/logos/python.png" alt=""/>
            </div>
        </div>
    </section>
    </>
    );
  }

  export default Languages