import { Container } from 'reactstrap'
import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
  background-color: ${({ light }) => light ? 'white' : '#efefef'};
  padding: 5rem 0;
  text-align: ${({ textRight }) => textRight ? 'right' : 'left'};
  width: 100%;
`

const StyledContainer = styled(Container)`
  && {
    display: flex;
    justify-content: ${({ textRight }) => textRight ? 'end' : 'start'};;
  }
`

const StyledDiv = styled.div`
  max-width: 30rem;
`

const SectionWrapper = ({ children, light, textRight }) => (
  <Wrapper light={light} textRight={textRight}>
    <StyledContainer textRight={textRight}>
      <StyledDiv>
        {children}
      </StyledDiv>
    </StyledContainer>
  </Wrapper>
)

export default SectionWrapper