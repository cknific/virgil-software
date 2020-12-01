import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import breakpoint from 'styled-components-breakpoint'

const StyledContainer = styled(Container)`
  && {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
`

const EducationContainer = styled.div`
  padding-bottom: 1.5rem;
  ${breakpoint('tablet')`
    padding-bottom: 0;
  `};
`

const SectionHeading = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
  color: orange;
  font-size: 12px;
  letter-spacing: 0.2rem;
`

const Education = () => (
  <StyledContainer>
    <SectionHeading>EDUCATION & TRAINING</SectionHeading>
    <Row>
      <Col sm="12" md="6">
        <EducationContainer>
          <h5>Emory University | Goizueta Business School (2010)</h5>
          <p>Bachelors, Business Administration<br/>Concentration in Organization & Management</p>
        </EducationContainer>
      </Col>
      <Col sm="12" md="6">
        <h5>ArtCenter College of Design (2012)</h5>
        <p>Completed courses in Typography and Advanced Photoshop</p>
      </Col>
    </Row>
  </StyledContainer>

)

export default Education
