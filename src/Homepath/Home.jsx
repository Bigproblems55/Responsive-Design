import React,{useState} from "react"; 
import Mydf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';
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
            <iframe src={Mydf} />
            </div>
         
        </>
    )
}