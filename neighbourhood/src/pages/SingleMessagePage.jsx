import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { GoImage } from "react-icons/go";
import { IoCameraOutline } from "react-icons/io5";

const SingleMessagePage = () => { 
return (
    <div className='wrapper'>
        <div className='all-messages'>
            <div className='title-div'>
                <div className='message-img-text'>
                    <Link to={"/meddelanden"}>
                <IoIosArrowBack className='back-icon'/>
                    </Link>
                <img src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bild på säljare" className='renterImg' />
               <h5>Ronny Larsson</h5>
               </div>
               <IoWarningOutline  className='warning-btn'/>
            </div>
            <hr  className='message-bar'/>
            <div className='messages'>
                <div className='message-right'>
                    <p>Hej tack så mycket för lånet! Det räddade verkligen min helg!</p>
                </div>
                <div className='right-trinagle'><TbTriangleInvertedFilled /></div>
                <div className='message-left'>
                    <p>Hej ingen fara! Tack så mycket själv.</p>
                </div>
                <div className='left-trinagle'><TbTriangleInvertedFilled /></div>
            </div>
            <div className='text-bar'>
                <div className='message-write-bar'>
                <IoCameraOutline className='cam-icon' />
                <p>Meddelande....</p>
                </div>
                <GoImage  className='img-icon'/>
            </div>
        </div>
    </div>
)
}

export default SingleMessagePage;