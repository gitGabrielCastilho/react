import styled from 'styled-components';

export const Container = styled.div`


img {

    cursor: pointer;
}

.container {
    justify-content: center;
    max-width: 540px;
   
}

.container .selected {
    width: 500px;
    height: 500px;
    border: 4px solid purple;
}

.container .imgContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0 0 0;
   
}

.container .imgContainer img {
    height: 100px;
    margin: 5px 0;
}

`

