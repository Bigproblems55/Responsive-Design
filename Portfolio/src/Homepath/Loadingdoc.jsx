'use client';
import React,{ useEffect, useRef, useState } from 'react';
import Mypdf from '../../Data/Nicholas Anthony Lacapria pdf resume.pdf';
import { Document, Page } from 'react-pdf';
import Pdfviewer from './Pdfviewer';

export default function Loadingdoc({numPages,loading}){
 


// app/page.jsx
	const containerRef = useRef(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (isClient) {
			const container = containerRef.current;

			if (container && typeof window !== 'undefined') {
				import('pspdfkit').then((PSPDFKit) => {
					if (PSPDFKit) {
						PSPDFKit.unload(container);
					}

					PSPDFKit.load({
						container,
						document: '/document.pdf',
						baseUrl: `${window.location.protocol}//${window.location.host}/`,
					});
				});
			}
		}
	}, [isClient]);

	if (!isClient) {
		return null; // Prevents rendering on the server.
	}

	return <div ref={containerRef} style={{ height: '100vh' }} />;



}