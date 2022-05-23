import React, { Component, useState } from 'react';
import {Container} from './imgstyled';
import imgtodos from './assets/imgtodos'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 

export default function Todos()  {  
  
      
  const [selectedImg, setSelectedImg] = useState(imgtodos[0]);
  
  return (
    <Container>
     <div className='container'>
      <Carousel>
        <Carousel.Item>
          <img src={selectedImg} alt="Selected" className='selected'  />
        </Carousel.Item>
      </Carousel>       
     <div className='imgContainer'>
        {imgtodos.map((img, index) => (
          <img 
          style={{border: selectedImg === img ? "4px solid purple" : ""}} 
          key={index} 
          src={img} 
          alt='dog'
          onClick={() => setSelectedImg(img)}
          />
        ))}
    </div>    
    </div>    
    </Container>
    );
}




export class Sala extends Component {
    
  render() {
  return (
    <Container>
     "THIS IS SALA" 
    </Container>        
  );
}
}


export class Cozinha extends Component {
    
  render() {
  return (
    <Container>
     "THIS IS COZINHA" 
    </Container>        
  );
}
}


export class Quarto extends Component {
    
  render() {
  return (
    <Container>
     "THIS IS QUARTO" 
    </Container>        
  );
}
}

export class Jardim extends Component {
    
  render() {
  return (
    <Container>
     "THIS IS JARDIM" 
    </Container>        
  );
}
}


