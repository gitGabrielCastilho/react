import styled from 'styled-components';

export const HeaderArea = styled.div`

background-color:#FFF;
height: 100px;
border-bottom: 1px solid #CCC;
position:fixed;
top:0;
width:100%;
z-index:999;

.line {
    background-color: #709071;
    height: 10px;
}

.container {
        max-width: 1140px;
        margin:auto;
        display:flex;
        
    }

a {
    text-decoration:none;
    color:#000;
    &: hover {
        color:#999;
        border-bottom: 5px solid;}
}

.logo {
        flex:1;
        display:flex;
        align-items:center;
        list-style:none;
        
      
    }

nav {

    padding-top: 10px;
    padding-bottom: 10px;

    ul, li {
        margin:0;
        padding:0;
        list-style:none;
    }
    ul { 
        display:flex;
        align-items:center;
        height:60px;
    }
    li {
        margin-left:20px;
        margin-right:20px; 

      
        } 
        }
    }
}
`;