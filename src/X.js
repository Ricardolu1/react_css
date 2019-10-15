import React from 'react';
import styled from 'styled-components'
import Topbar from './Topbar'

const Title = styled.div`
  color:red;
  font-size:20px;
  border:1px solid blue;

`


function X() {
  return(
    <div>
      <Topbar theme="green"/>
      <Title>X</Title>
    </div>
  )
}



export default X