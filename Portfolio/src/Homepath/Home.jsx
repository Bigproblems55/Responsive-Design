import React,{useState} from "react"; 
import Mydf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';
export default function Home(){

    const [numPages, setNumPages] = useState([0,1,2,3,4,5,6,7]);
   
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