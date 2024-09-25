import React from 'react';
import githubpng from '../Assets/github.png'
export default function  About(){

    return(
        <>
           <div className='contactAbout'>
             <h1 className='abconh1'>About Nicholas Lacapria</h1>
            <p >
                I am a full stack webdeveoper using Mernstack Technology. I use node.js as backend and React for the front-end. I have been programming in general with other languages since 2012 but I have specialized in Mern stack development since 2018 and I am seeking a job in this field currently. If anyone is looking for someone dedicated enough to for development... I am available immediatly and I am willing to relocate if I have to. I work on projects all the time to better myself and I am constantly updating old applications so they adhear to the new standards. I enjoy solving problems and would be greatful to be apart of a team that does what I am learning so I am able to do  it professionally while making money and doing what I like. I do have a github where you can see my profile and organizations I have worked with. A major one has been with the school of Lambda who taught me alot about the field and the way application programming works with react and Nodejs. My githubs are viewable here:      
            </p>
            <div className='abcon1'>
                <p >
            <img className="imgicon" alt="Current Account"src={githubpng}/>
                <a href='https://www.github.com/Bigproblems55'> Current Account</a>
            </p>
            <p>
            <img className="imgicon" alt="Learning Videos"src={githubpng}/>
                <a href='https://www.github.com/Knewmule'> Learning Videos</a>
            </p>
            <p>
            <img className="imgicon" alt="Lambda"src={githubpng}/>
                <a href='https://www.github.com/Extrude575757'> School of Lambda</a>
            </p>
            </div>
           </div>
        </>
    )
}