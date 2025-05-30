import React from 'react';
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";


const MessagePage = () => {

  return (
    <div className='wrapper'>
      <div className='title-div'>
        <h2>Meddelanden</h2>
        <FiEdit className='edit-icon' />
      </div>

      <div className='all-messages'>
        <Link to={"/meddelande"}>
          <div className='single-message'>
            <div className='message-img-text'>
            <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bild på säljare" className='renterImg' />
            <div>
            <h5 className='message-name'>Ronny Larsson</h5>
            <p className='message-p'>Visades igår</p>
            </div>
            </div>
            <div>
              <p className='message-p'>5 Juni</p>
            </div>
          </div>
          </Link>
          <hr  className='message-bar'/>
           <Link to={"/meddelande"}>
          <div className='single-message'>
            <div className='message-img-text'>
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bild på säljare" className='renterImg' />
            <div>
            <h5 className='message-name'>Sven-Gösta Nilsson</h5>
            <p className='message-p'>2 m</p>
            </div>
            </div>
            <div>
              <p className='message-p'>1 v</p>
            </div>
          </div>
          <hr  className='message-bar'/>
          </Link>
          <Link to={"/meddelande"}>
          <div className='single-message'>
            <div className='message-img-text'>
            <img src="https://images.unsplash.com/photo-1604364721460-0cbc5866219d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bild på säljare" className='renterImg' />
            <div>
            <h5 className='message-name'>Sanna Nielsen</h5>
            <p className='message-p'>4 m</p>
            </div>
            </div>
            <div>
              <p className='message-p'>5 m</p>
            </div>
          </div>
          </Link>
          <hr  className='message-bar'/>
                    <Link to={"/meddelande"}>
          <div className='single-message'>
            <div className='message-img-text'>
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bild på säljare" className='renterImg' />
            <div>
            <h5 className='message-name'>Sven-Gösta Nilsson</h5>
            <p className='message-p'>53 v</p>
            </div>
            </div>
            <div>
              <p className='message-p'>53 v</p>
            </div>
          </div>
          </Link>
          <hr  className='message-bar'/>
                    <Link to={"/meddelande"}>
          <div className='single-message'>
            <div className='message-img-text'>
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bild på säljare" className='renterImg' />
            <div>
            <h5 className='message-name'>Sven-Gösta Nilsson</h5>
            <p className='message-p'>2 å</p>
            </div>
            </div>
            <div>
              <p className='message-p'>2 å</p>
            </div>
          </div>
          </Link>
          <hr  className='message-bar'/>
                    <Link to={"/meddelande"}>
          <div className='single-message'>
            <div className='message-img-text'>
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bild på säljare" className='renterImg' />
            <div>
            <h5 className='message-name'>Sven-Gösta Nilsson</h5>
            <p className='message-p'>5 å</p>
            </div>
            </div>
            <div>
              <p className='message-p'>5 å</p>
            </div>
          </div>
          </Link>
          <hr  className='message-bar'/>
                    <Link to={"/meddelande"}>
          <div className='single-message'>
            <div className='message-img-text'>
            <img src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bild på säljare" className='renterImg' />
            <div>
            <h5 className='message-name'>Sven-Gösta Nilsson</h5>
            <p className='message-p'>5 å</p>
            </div>
            </div>
            <div>
              <p className='message-p'>5 å</p>
            </div>
          </div>
          </Link>
      </div>
    </div>
  );
};

export default MessagePage;
