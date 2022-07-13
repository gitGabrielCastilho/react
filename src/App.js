import './App.css';
import React from 'react';
import  { Rotas }  from './components/routes';
import { Template } from './components/mainComponents';
import Header from './components/header';
import Footer from './components/footer';



const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);


  return (

        <Template>
          <p>{!data ? "Loading..." : data}</p>
          <Header/>
          
            <Rotas/>
          
          <Footer/>
        </Template>
     
    
  );
}

export default App;
