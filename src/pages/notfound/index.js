import React from "react";
import {AiOutlineClose} from "react-icons/ai";
import { Link } from "react-router-dom";
import {Container} from './styled'; 

export const NotFound = () => {
    return (
        <Container>        
            <div className="div1">
                <div><AiOutlineClose size={"5em"} color={"#709071"}/></div>
                <h1 className="texto">404 - pagina não encontrada</h1>
                <div className="logo">
                    <Link className="logo-texto" to="/">VOLTAR AO INÍCIO</Link>
                </div>
            </div>
        </Container>
    );
}

export default NotFound;