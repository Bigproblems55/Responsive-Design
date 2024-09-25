import React from "react";
import githubpng from '../Assets/github.png'
export default function Midsec({title,
    image,
    imagealt,
    paragraph,
    link,
    linktext,
    githubrepo}){

    return(
        
        <div className='projCon'>
        <div className='projectBoxes'><b>{title}</b>
        
        <button><a href={link}>{linktext}</a></button>
        
        <img src={`https://responsive-design-1backend.onrender.com/${image}`} alt={imagealt} />
        <p>
            {paragraph}
            <p>
            <a href={githubrepo}><img id="img" className="imgicon"src={githubpng} alt={imagealt}/></a>
            </p>
        </p>
        

            </div>
        </div>
            
    )
}