import React from "react";
import Mypdf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';
import { Document, Page } from 'react-pdf';
export default function Loadingdoc({numPages,loading}){
 
    return(
       
         <Document file={Mypdf}>
        {
            numPages.map((v,index)=>{
                if(loading){
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                }
            })
        }
        
      </Document>
       
    )
}