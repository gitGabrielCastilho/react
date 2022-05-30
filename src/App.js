import './App.css';
import React from 'react';
import  { Rotas }  from './components/routes';
import { Template } from './components/mainComponents';
import Header from './components/header';
import Footer from './components/footer';



const App = () => {
  return (

        <Template>
          <Header/>
         
            <Rotas/>
          
          <Footer/>
        </Template>
     
    
  );
}

export default App;
