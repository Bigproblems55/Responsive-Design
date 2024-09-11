import  React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Midsection from './Midsection';
import Footer from './Footer';
import Home from './Homepath/Home';
import Contact from './Contact/Contact';
import ContactList from './Contact/ContactList'
function App() {
 
  return (
    <>
      
        
        <BrowserRouter>
        <Header /> 
        
       <Routes>
        
       <Route exact path="/"
            element={<Home />} ></Route> 
        <Route  path="/Projects"
            element={<Midsection />} ></Route> 
        <Route  path="/About"
            element={<Contact />} ></Route> 
         <Route  path="/Contact"
            element={<ContactList />} ></Route> 
          
       </Routes>
       <Footer />
     </BrowserRouter>
      
    </>
  );
}

export default App;
