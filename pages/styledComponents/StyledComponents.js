const { default: styled } = require("styled-components");

const StyledImg = styled.img`
width: 200px;
height: 150px;
margin: auto 30px;
`

const StyledP = styled.p`
margin: 20px;
font-family: serif;
font-style: italic;
font-size: 14pt;
`

const StyledButton = styled.button`
position:fixed;
right: 50px;
bottom: 50px;
background-color: lightblue;
border-radius: 10%;
border: 1px solid black;
height: 40px;
font-weight:bold;
align-self: center;
`

const StyledDiv = styled.div`
width:400px;
height: 150px; 
margin: 30px auto;
border: 1px solid black;
padding: 0 40px;
`

export {StyledImg, StyledP, StyledButton, StyledDiv}