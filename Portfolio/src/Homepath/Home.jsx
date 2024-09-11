import React,{useState} from "react";
import Pdfviewer from "./Pdfviewer";
export default function Home(){

    const [numPages, setNumPages] = useState([0,1,2,3,4,5,6,7]);
   
    return(
        <>
            {
                numPages !== null && <Pdfviewer  
                setNumPages={setNumPages}
                numPages={numPages} />
            }
        </>
    )
}