import React, { useState, useEffect,useRef } from "react";
import "./chat.css";
import { Link } from "react-router-dom";

const Chat = () => {
  const [icons, setIcons] = useState(false);
  const handleClick = () => {
    setIcons(!icons);
  };

  const openUrl = (url) => {
    window.open(url, '_blank');
  }
  
  return (
    <div className="chat__overlay">
      <span onClick={handleClick}>
        {icons ? (
          <div className="chat__overlay-apis">
            <button className="custom-button">
              <img src={"/ico_wh.png"} alt="whatsapp" onClick={() => openUrl('https://wa.me/94778866968?text=')} />
            </button>
            <button className="custom-button">
              <img src={"/ico_mes.png"} alt="messenger" onClick={() => openUrl('https://m.me/GreenVoyagesSriLanka')} />
            </button>
            <button className="custom-button">
              <img src={"/ico_tel.png"} alt="telegram" onClick={() => openUrl('https://telegram.me/greenvoyages')} />
            </button>
            <button className="custom-button">
              <img src={"/ico_vib.png"} alt="viber" onClick={() => openUrl('viber://chat?number=94778866968')} />
            </button>
            
            <button className="custom-button">
              <img src={"/ico_close.png"} alt="back" className="rotateIcon" />
            </button>
          </div>
        ) : (
          <>
          <img src={"/chat__text.png"} alt="chat with us" className="chat__overlay-text" />
          <img src="/chat__icon.png" alt="chat" className="chat__icon icon__anyma" />
          </>
        )}
      </span>
    </div>
  );
};

export default Chat;
