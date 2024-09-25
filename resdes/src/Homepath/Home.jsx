import React from "react"; 
import Mydf from '../Data/NicholasAnthonyLacapriapdfresume.pdf';
export default function Home(){

    function handleIframe(){

        if(window.matchMedia("(min-width: 680px)") <= 680){
            console.log(window.matchMedia("all and (min-width: 680px)"))
        //     return(
        //         <iframe src={Mydf} 
        // width="100%" 
        // height="100%" />
        //     )
        }
    }
    return(
        <>
            <div>
                {handleIframe()}
            <iframe title="Nick Lacapria PDF"src={Mydf} />
            </div>
         
        </>
    )
}