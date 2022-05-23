import styled from 'styled-components';

export const Container = styled.div`

min-height: calc(100vh - 250px);
display: flex;
width: 100%;
margin-top: 100px;

.todos {
    margin: 30px auto;
    
}

.btprojeto {
    display: inline-block;
    margin: 30px 540px;    
}

.bt {
    padding: 0 20px;
    border: 1px solid;
    cursor: pointer;
    
}


.bt: first-child {
    border-radius:30px 0 0 30px;
}

.bt: last-child {
    border-radius:0 30px 30px 0;
}

`;