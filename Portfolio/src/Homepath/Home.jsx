import React,{useState} from "react"; 
import Mydf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';
export default function Home(){

 
    return(
        <>
            {
                <iframe src={Mydf} 
                width="100%" 
                height="100%" />
            }
        </>
    )
}