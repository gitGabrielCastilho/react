import {Container} from './styled'; 
import React, {useState} from "react";
import {Jardim, Quarto, Sala, Cozinha} from './imgProjetos';
import Todos from './imgProjetos';



export const Projetos = () => {
    const [active, setActive] = useState("FirstCard")
    return (
        <Container>
       <div className='todos'>     
       <nav className='btprojeto'>
           <button onClick={()=> setActive("Card1")} className='bt'>Todos</button>
           <button onClick={()=> setActive("Card2")} className='bt'>Sala</button>
           <button onClick={()=> setActive("Card3")} className='bt'>Cozinha</button>
           <button onClick={()=> setActive("Card4")} className='bt'>Quarto</button>
           <button onClick={()=> setActive("Card5")} className='bt'>Jardim</button>
       </nav>
       <div className='area--projeto'>
           {active === "Card1" && <Todos></Todos> }
           {active === "Card2" && <Sala></Sala> }
           {active === "Card3" && <Cozinha></Cozinha> }
           {active === "Card4" && <Quarto></Quarto> }
           {active === "Card5" && <Jardim></Jardim> }
           
       </div>
      
       </div>
        </Container>
    )
}