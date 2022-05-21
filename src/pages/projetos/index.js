import {Container} from './styled'; 
import React, {useState} from "react";

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
           {active === "Card1" && <div> ISSO EH TODOS </div>}
           {active === "Card2" && <div> ISSO EH SALA </div>}
           {active === "Card3" && <div> ISSO EH COZINHA </div>}
           {active === "Card4" && <div> ISSO EH QUARTO </div>}
           {active === "Card5" && <div> ISSO EH JARDIM </div>}
       </div>
       </div>
        </Container>
    )
}