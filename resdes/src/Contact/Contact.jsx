import React from 'react'; 
import linkd from '../Assets/linkedin.png'
import styles from './style.module.css'
export default function Contact(){

    return(
        <div className='contactAbout'>
            <div id="contactme">
            <h1 className='h1style'>Contact Me</h1>
            <a id={styles.upwork} href='https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~01d427babcfd8db6b1?mp_source=share'>upwork </a>
            
            <a href='https://www.linkedin.com/in/web-dev-nicholas-lacapria'>
            <img alt="Nicks Linkedin"src={linkd} /></a>
            <a id={styles.fiverr} href='http://www.fiverr.com/s/EgZXR1e'>fiverr<span id={styles.fiverrp}>.</span></a>
        
            </div>
            </div>
    )
}