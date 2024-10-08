import  React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Midsection from './Midsection/Midsection';
import Footer from './Footer';
import Home from './Homepath/Home';
import About from './About/About';
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
            element={<About />} ></Route> 
         <Route  path="/Contact"
            element={<ContactList />} ></Route> 
          
       </Routes>
       <Footer />
     </BrowserRouter>
      
    </>
  );
}

export default App;
