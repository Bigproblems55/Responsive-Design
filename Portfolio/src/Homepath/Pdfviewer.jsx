import React,{useState,useEffect} from "react";
import {pdfjs } from 'react-pdf';
import Mypdf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';
import Loadingdoc from "./Loadingdoc";
export default function Pdfviewer({numPages,setNumPages}) {
    
    
  const [loading,setLoading] = useState(false);
    function onDocumentLoadSuccess() {
        setNumPages(numPages);
        setLoading(true);
        console.log(numPages);
    }
    function LoadingDocument(){

      try{
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
      
        if(loading ){
          console.log('inLoadingdoc')
          if(numPages.length <= 7){
            console.log('in loading')
            if(numPages.length === 7){
              setLoading(false);
            }
            
          }
      }else{
        onDocumentLoadSuccess([1,2,3,4,5,6,7,8]);
      }
      }catch(e){
        // onDocumentLoadSuccess(7);
        console.log(e);
      }
    }
    useEffect(()=>{
      LoadingDocument
    },[numPages])
     
    return (
      <div>
        <Loadingdoc numPages={numPages} loading={loading} />
      </div>
    );
  }
  