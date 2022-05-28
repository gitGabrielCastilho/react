import { Link } from "react-router-dom"
import React from "react"
import {HeaderArea} from './styled';


export const Header = () => {

    return (

        <HeaderArea>
           
            <div className="line"></div> 
            <div className="container"> 
              

                <div className="logo">
                    <li><a href="/">HOME</a></li>
                </div>

                <nav>     
                    <ul>
                        
                        <li ><a href="/about">SOBRE</a></li>
                        <li ><a href="/dicas">DICAS</a></li>
                        <li ><a href="/projetos">PROJETOS</a></li>
                        <li ><a href="/planos">PLANOS</a></li>  
                    </ul>        
                </nav>

            </div>
            
            
        </HeaderArea>
    )
}

export default Header;