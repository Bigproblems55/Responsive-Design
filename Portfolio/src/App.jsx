import  React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Midsection from './Midsection';
import Footer from './Footer';
import Contact from './Contact/Contact'
function App() {
 
  return (
    <>
      
        
        <BrowserRouter>
        <Header />
        <Midsection />
        <Footer />
       <Routes>
        
       <Route  path="/Contact"
            element={<Contact />} ></Route> 
        <Route  path="/Projects"
            element={<Contact />} ></Route> 
        <Route  path="/About"
            element={<Contact />} ></Route> 
         <Route  path="/Home"
            element={<Contact />} ></Route> 
          
       </Routes>
     </BrowserRouter>
      
    </>
  );
}

export default App;
