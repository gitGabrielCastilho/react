import {Container} from './styled'; 
import { Link } from 'react-router-dom';
import background from "../assets/bg.jpg";
import f5 from '../assets/f5.jpg';
import f2 from '../assets/f2.jpg';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




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

            <section className='plan-dic'>
                <div className='planos' style={{ backgroundImage: `url(${c1})`}}>
                    <button className="link1">
                        <Link className="link" to={"/planos"} >Planos do seu <br></br> jeito!</Link></button>
                </div>

                <div className='dicas' style={{ backgroundImage: `url(${c2})`}}>
                    <button className="link1">
                        <Link className="link" to={"/dicas"}>Dicas Incriveis!</Link></button>
                </div>
            </section>
            <section className='carrossel'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height: 500}}
                    src="https://mercadoeconsumo.com.br/wp-content/uploads/2019/09/Starbucks-diminui-proje%C3%A7%C3%B5es-de-crescimento-para-2020.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height: 500}}
                    src="https://tribunapr.uol.com.br/wp-content/uploads/2021/09/16153606/starbucks-unsplash-angelica-reyes-970x550.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    
                    <img  
                    className="d-block w-100"
                    style={{height: 500}}
                    src="https://tribunapr.uol.com.br/wp-content/uploads/2021/06/17123720/Starbucks-1-970x550.jpg" 
                    alt="Third slide" 
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </section>


            
          
        </Container>  
          
    );
    
}

export default Home;