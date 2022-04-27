import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>

            <div >     
                <div ><Link to="/">HOME</Link></div>
                <div ><Link to="/about">SOBRE</Link></div>
                <div ><Link to="/dicas">DICAS</Link></div>
                <div ><Link to="/projetos">PROJETOS</Link></div>
                <div ><Link to="/planos">PLANOS</Link></div>          
            </div>

            <div>TITULO SITE CAROL</div>
                
            <div>Carrinho de Compras</div>

      
        </div>
    )
}