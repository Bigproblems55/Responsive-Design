import React,{useState,useEffect} from "react";
import { Document, Page,pdfjs } from 'react-pdf';
import Mypdf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';

export default function Pdfviewer() {
    const [numPages, setNumPages] = useState(null);
  
    function onDocumentLoadSuccess({ numPages }) {
      try{
        setNumPages(numPages);
      }catch(er){
        console.log(er);
      }
    }
  
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
       
    return (
      <div>
        <Document file={Mypdf} 
        onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    );
  }
  