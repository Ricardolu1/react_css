import React from "react"
import styled from "styled-components"

function Topbar(props) {
  let {theme}= props
  const Logo = styled.div`
    width: 100px;
    height: 40px;
    background: grey;
  `
  const Nav = styled.nav`
    height: 30px;
    background: #333;
    width: 300px;
    color: white;
    margin-left: 10px;
  `
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    background: ${theme}
  `
  const onClick = () => {
    console.log(1)
  }
  return (
    <Wrapper>
      <Logo>logo</Logo>
      <Nav onClick={onClick}>nav</Nav>
    </Wrapper>
  )
}

export default Topbar
