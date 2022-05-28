import React from "react";
import Apps from './Apps';
import SimpleReactLightbox from 'simple-react-lightbox';
import ReactDOM from 'react-dom';
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Container } from "./styled";

export const Projetos = () => {
 
    return (
        
        <div>  
             
        {ReactDOM.render(
            
            <React.StrictMode>
             <Header/>   
            <Container>    
                <SimpleReactLightbox>
          
                 <Apps />
                                
                </SimpleReactLightbox>
            </Container>
            <Footer/>    
            </React.StrictMode>,
            document.getElementById('root')
        )}           
            
        </div>
    );
}