import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import breakpoint from 'styled-components-breakpoint'
import { YearsActive, SectionHeading } from '../Shared'

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

const Education = () => (
  <StyledContainer>
    <SectionHeading>EDUCATION & TRAINING</SectionHeading>
    <Row>
      <Col sm="12" md="6">
        <EducationContainer>
          <YearsActive>2006 - 2010</YearsActive>
          <h5>Emory University | Goizueta Business School</h5>
          <p>Bachelors, Business Administration<br/>Concentration in Organization & Management</p>
        </EducationContainer>
      </Col>
      <Col sm="12" md="6">
        <YearsActive>Summer 2012</YearsActive>
        <h5>ArtCenter College of Design</h5>
        <p>Completed courses in Typography and Advanced Photoshop</p>
      </Col>
    </Row>
  </StyledContainer>

)

export default Education
