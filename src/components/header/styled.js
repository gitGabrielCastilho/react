import styled from 'styled-components';

export const HeaderArea = styled.div`

background-color:#FFF;
height: 80px;
border-bottom: 1px solid #CCC;
position:fixed;
top:0;
width:100%;


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
        } 
}

.logo {
        flex:1;
        display:flex;
        align-items:center;
        height: 80px;
       

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

        a {
            color:#000; 
            text-decoration:none;
            font-size:14px;
        
        &: hover {
            color:#999;
        } 
        }
    }
}
`;