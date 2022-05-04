import React from "react";
import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/home';
import { About } from '../pages//about';
import { NotFound } from '../pages/notfound';
import { Planos } from '../pages/planos';
import { Dicas } from '../pages/dicas';
import { Projetos } from '../pages/projetos';

export const Rotas = () => {
    return (
        
        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/projetos' element={<Projetos/>} />
            <Route path='/dicas' element={<Dicas/>} />
            <Route path='/planos' element={<Planos/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    
    );
}

