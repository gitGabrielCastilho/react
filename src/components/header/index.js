import { Link } from "react-router-dom"
import React from "react"
import {HeaderArea} from './styled';


export const Header = () => {

    return (

        <HeaderArea>
           
            <div className="line"></div> 
            <div className="container"> 
              

                <div className="logo">
                    <li><Link to="/">HOME</Link></li>
                </div>

                <nav>     
                    <ul>
                        
                        <li ><Link to="/about">SOBRE</Link></li>
                        <li ><Link to="/dicas">DICAS</Link></li>
                        <li ><Link to="/projetos">PROJETOS</Link></li>
                        <li ><Link to="/planos">PLANOS</Link></li>  
                    </ul>        
                </nav>

            </div>
            
            
        </HeaderArea>
    )
}

export default Header;