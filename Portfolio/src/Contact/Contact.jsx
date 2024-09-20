import React from 'react';
import googleMail from '../Assets/gmail.png'
import linkd from '../Assets/linkedin.png'
export default function Contact(){

    return(
        <div className='contactAbout'>
            <div id="contactme">
            <h1 className='h1style'>Contact Me</h1>
            <a href='Nicholas.a.lacapria@gmail.com '><img src={googleMail} />Nicholas.a.lacapria@gmail.com </a>
            <h1 className='h1style'> or </h1>
            
            <a href='https://www.linkedin.com/in/web-dev-nicholas-lacapria'>
            <img src={linkd} />linkedin.com/in/web-dev-nicholas-lacapria</a>
        
            </div>
            </div>
    )
}