import styled from 'styled-components';
export const Container = styled.div`

min-height: calc(100vh - 250px);
width: 100%;
margin-top: 100px;
padding-left: 5%;
padding-right: 5%;

.h2 {
    font-size: 40px;
    margin: 0;
}

.bar {
    background-color: #709071;
    width: 168px;
    height: 22px;
}

.banner{ 
    background-position: center;
    background-size: cover;
    padding-top: 150px;
    padding-bottom: 90px;
    
}

.banner h1 {
    font-size: 90px;
    line-height: 100px;
    margin: 0;
    margin-bottom: 100px;
}

.banner span {
    font-size: 40px;
}

.area1{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.area1--content {
    padding: 50px;
}

.area1--img1 {
    height: 350px;
    background-size: cover;
    background-position: center;
}

.area1--img2 {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background-size: cover;
    background-position: center;
}

.area1--quote {
    padding: 15px;
}

.area1--text {
    margin-bottom: 30px;
}

.bt {
    background-color: white;
    border: none;   
}

.plan-dic {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #95bd9a;
    height:500px;        
}

.planos{
    padding: 150px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 20px;
    transition: margin 0.5s;
    border-radius:25px;
    box-shadow: 3px 3px 15px ;
    &: hover {
        margin:5px; 
        }
}

.dicas {
    padding: 150px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 20px;
    transition: margin 0.5s;
    border-radius:25px;
    box-shadow: 3px 3px 15px;
    &: hover {
        margin:5px;
        }
}

.link1 {
    
    background-color: #709071;
    box-shadow: 3px 3px 15px;
    border-radius: 15px;
    border: none; 
    text-align: center;
    display: flex;
    &: hover {
        background-color:#3e523f;}   
}

a {
    text-decoration:none;
    color:#000;
    border: 1px solid;
    padding: 10px;
    &: hover {
        color:#999;}
}

.link {
    border: none;
    padding: 10px;
    font-size: 20px;
    color: white;
    &: hover {
        color:#999;}
}


.carro {
    
}
`;