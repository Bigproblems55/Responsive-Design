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
        
        <img src={`http://localhost:4000/${image}`} alt={imagealt} />
        <p>
            {paragraph}
        </p>

            </div>
        </div>
            
    )
}