import React from "react";
import {AiOutlineClose} from "react-icons/ai";
import {Container} from './styled'; 

export const NotFound = () => {
    return (
        <Container>        
            <div className="div1">
                <div className="logo"><AiOutlineClose/></div>
                <h1 className="texto">404 - pagina não encontrada</h1>
                <button className="bt">Home</button>
            </div>
        </Container>
    );
}

export default NotFound;