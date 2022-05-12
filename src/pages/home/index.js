import {Container} from './styled'; 
import { Link } from 'react-router-dom';
import React from "react";
import background from "../assets/bg.jpg";
import f5 from '../assets/f5.jpg';
import f2 from '../assets/f2.jpg';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';



export const Home = () => {
    return (
        <Container>    
            <section className='banner' style={{ backgroundImage: `url(${background})`}}>
    
                <h1>PAGINA HOME  <br/> DECORAÇOES</h1>

                <span> Deslize para baixo! bla bla bla </span>
        
            </section>
            <section className='area1'>
                
                <div className='area1--content'>
                
                    <div className='bar'></div>
                    <h2>FALE ALGO SOBRE ISSO</h2>
                    <div className='area1--quote'><em>"proerd é a solução"</em> - albert einsten</div>
                    <div className='area1--text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                    <button className='bt'><Link to={"/about"}> SAIBA MAIS </Link></button>

                </div>

                <div className='area1--img1' style={{ backgroundImage: `url(${f2})`}}></div>
                <div className='area1--img2' style={{ backgroundImage: `url(${f5})`}}></div>
               
            </section>
            <section className='carousel'>

                <div className='planos' style={{ backgroundImage: `url(${c1})`}}>
                    <button className="link1">
                        <Link className="link" to={"/planos"} >plano do seu jeito</Link></button>
                </div>

                <div className='projetos' style={{ backgroundImage: `url(${c2})`}}>
                    <button className="link1">
                        <Link className="link" to={"/projetos"}>projetos personalizado</Link></button>
                </div>

            </section>

        </Container>    
    );
}

export default Home;