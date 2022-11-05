import React, {useEffect, useState} from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
      });
    
      return () => {
        // window.removeEventListener("scroll");
      };
    }, []);
    
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netfilp logo"
        />
        <img className="nav_avatar"
            src="https://thumbs.dreamstime.com/b/emoji-smile-icon-vector-symbol-yellow-background-smiley-face-cartoon-character-wallpaper-emoji-smile-icon-vector-symbol-171191464.jpg"
            alt="Avatar logo"
        />
    </div>
  )
}

export default Nav