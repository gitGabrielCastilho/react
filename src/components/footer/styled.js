import styled from 'styled-components';

export const FooterArea = styled.div`

background-color: #333;
height:150px;

.redesocial{
    margin: 12px;
        &: hover {
            color:white;
            border-bottom: 1px solid;}
}
.footer {
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-text {
   border-right: 5px solid white;
   padding: 20px;
   


}



.footer ul li{
    list-style: none;
    padding: 3px;
    
    
}

.redesocial {
    margin-right: 8px;
    
}

a {
    text-decoration: none;
    color: white;
}
`;
