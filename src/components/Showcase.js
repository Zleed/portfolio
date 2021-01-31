import './Showcase.css';
import './Utilities.css';
import { Button } from './Button';
import React, { useState, useEffect } from 'react';

function ShowCase() {
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);

    return (
    <>
      <section className="showcase">
        <video src='/videos/video-2.mov' autoPlay loop muted />
        <div className="container grid">
            <div className="showcase-text">
                <h1>Web Development</h1>
                
            </div>
            <div className="showcase-form card">
                <h2>Request a Quote</h2>
                <form>
                    <div className="form-control">
                        <input type="text" name="name" placeholder="First Name" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="company" placeholder="Last Name" required />
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    {button && <Button buttonStyle='btn--secondary'>Require</Button>}
                </form>
            </div>
        </div>
      </section>
    </>
    );
  }

  export default ShowCase