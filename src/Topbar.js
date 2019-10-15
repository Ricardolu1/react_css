import React from 'react';
import styled from 'styled-components'


const Title = styled.div`
  font-size:50px;
  color:green;
  border:1px solid red;
`

function Topbar() {
  return(
    <div>
      <Title>topbar</Title>
      其他
    </div>
  )
}



export default Topbar