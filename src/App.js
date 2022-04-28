import './App.css';
import { Rotas } from './components/rotas';
import { Template } from './components/mainComponents';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <div >
      
      <Template>
        <Header/>
        <Rotas/>
        <Footer/>
      </Template>



    </div>
  );
}

export default App;
