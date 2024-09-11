import React,{useState,useEffect} from "react";
import { Document, Page,pdfjs } from 'react-pdf';
import Mypdf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';

export default function Pdfviewer() {
    const [numPages, setNumPages] = useState(null);
    const [loading,setLoading] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {

        setNumPages(numPages);

        console.log(setNumPages);
      
    }
    function loadingDocument(){

      try{
        if(loading !== null){
          
          if(numPages.length <= 8){
            console.log('in loading')
            if(numPages.length === 8){
              setLoading(false);
            }
            return(
              
              <Document file={Mypdf}>
                Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              
              ))
              </Document>
            )
          }
      }else{
        onDocumentLoadSuccess(8);
      }
      }catch(e){
        console.log(e);
      }
    }
  
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
       
    return (
      <div>
        {loadingDocument}
      </div>
    );
  }
  