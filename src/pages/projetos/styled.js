import styled from 'styled-components';

export const Container = styled.div`

min-height: calc(100vh - 250px);
width: 100%;
margin-top: 100px;


.tags {
	
	text-align: center;
	padding: 20px 0px;
	background-color: rgb(73, 116, 67);
}

.tag {
	outline: none;
	border: none;
	color: #eee;
	margin: 0px 10px;
	background-color: transparent;
	cursor: pointer;
}

.active {
	font-weight: bold;
	border-bottom: 1px solid #eee;
}
.container {
	width: 80%;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
}

.image-card {
	padding: 5px;
	margin: 5px;
	border: 1px solid #ddd;
	border-radius: 2px;
}

.image {
	width: 100%;
}

.App {
	margin: 0 auto;
}`