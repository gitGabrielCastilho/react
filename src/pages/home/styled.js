import styled from 'styled-components';
export const Container = styled.div`

min-height: calc(100vh - 250px);
width: 100%;
margin-top: 100px;
padding-left: 300px;
padding-right: 300px;

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

a {
    text-decoration:none;
    color:#000;
    border: 1px solid;
    padding: 10px;
    &: hover {
        color:#999;}
`;