import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    outline: 1px solid red;
    margin: 18px 0px;
    box-sizing: border-box;
    border-radius: 14px;
    padding: 8px 16px;
    height: 1000px;
`;

const Heading = styled.h4`
    outline: 1px solid red;
    margin: 0px;
    margin-bottom: 8px;
    padding: 0px;
    letter-spacing: .5px;
`;

const QuickFeed = ({heading}) => {
  return (
    <Wrapper>
        <Heading>{heading}</Heading>
    </Wrapper>
  )
}

export default QuickFeed