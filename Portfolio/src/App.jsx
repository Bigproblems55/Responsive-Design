import  React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Midsection from './Midsection';
import Footer from './Footer';
import Contact from './Contact/Contact';
import ContactList from './Contact/ContactList'
function App() {
 
  return (
    <>
      
        
        <BrowserRouter>
        <Header /> 
        <Footer />
       <Routes>
        
       <Route  path="/"
            element={<Contact />} ></Route> 
        <Route  path="/Projects"
            element={<Midsection />} ></Route> 
        <Route  path="/About"
            element={<Contact />} ></Route> 
         <Route  path="/Contact"
            element={<ContactList />} ></Route> 
          
       </Routes>
     </BrowserRouter>
      
    </>
  );
}

export default App;
