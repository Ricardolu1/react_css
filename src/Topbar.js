import React from 'react';
import styled from 'styled-components'

function Topbar(props) {
const Title = styled.div`
  font-size:50px;
  color:green;
  border:1px solid red;
`
const Logo = styled.div`
  width:40px;
  height:40px;
  background:grey;

`
const Nav = styled.nav `
  height:30px;
  background:#333;
  width:200px;
  color:white;
  margin-left:10px;
`
const Wrapper = styled.div`
  display:flex;
  align-items:center;
  border:1px solid black;
  padding:10px;
`
const onClick = ()=>{
  console.log(1)
}
  return(
    <Wrapper>
      <Logo>logo</Logo>
      <Nav onClick={onClick}>nav</Nav>
    </Wrapper>
    
  )
}



export default Topbar