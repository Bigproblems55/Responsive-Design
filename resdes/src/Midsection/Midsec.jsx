import React from "react";
export default function Midsec({title,
    image,
    imagealt,
    paragraph,
    link,
    linktext}){

    return(
        
        <div className='projCon'>
        <div className='projectBoxes'><b>{title}</b>
        
        <button><a href={link}>{linktext}</a></button>
        
        <img src={`https://responsive-design-1backend.onrender.com/${image}`} alt={imagealt} />
        <p>
            {paragraph}
        </p>

            </div>
        </div>
            
    )
}