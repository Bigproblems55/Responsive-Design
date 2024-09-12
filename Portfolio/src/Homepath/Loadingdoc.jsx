import React from "react";
import Mypdf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';
import { Document, Page } from 'react-pdf';
import PdfViewer from './Pdfviewer';

export default function Loadingdoc({numPages,loading}){
 
    return(
       
        <div className="PDF-viewer">
			<PdfViewer
				document={"document.pdf"}
			/>
		</div>
       
    )

}