import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { YearsActive, SectionHeading } from '../Shared'

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 3rem 0;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.75rem;
`

const IconContainer = styled.div`
  margin-right: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  color: #adadad;
`

const Position = styled.h6`
  margin-bottom: 0.75rem;
`

const Company = styled.h5`
  color: #428be5;
`

const JobContainer = styled.div`
  margin-bottom: 2.5rem;
`

const StyledList = styled.ul`
  padding-left: .9rem;
  font-size: .9rem;
  line-height: 1.75;
`

const Experience = () => (
  <Wrapper>
    <Container>
      <FlexContainer>
        <IconContainer>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </IconContainer>
        <SectionHeading>Work Experience</SectionHeading>
      </FlexContainer>
      <JobContainer>
        <YearsActive>Feb 2020 - Present</YearsActive>
        <Company>Bruvi — IoT Enabled Single-Serve Coffee Machine</Company>
        <Position>Director of Software</Position>
        <StyledList>
          <li>Oversaw Bruvi’s e-commerce website, IoT coffee machine, mobile app, and the resulting ecosystem's cloud</li>
          <li>Implemented project management process within the company, writing user stories for 13 project backlogs</li>
          <li>Coordinated software, hardware, and design teams in China, Japan, Canada, Portugal, India, and the US</li>
          <li>Wireframed the mobile app UX and vetted engineering firms to handle development</li>
          <li>Evaluated security compliance of technology partners in China</li>
        </StyledList>
      </JobContainer>
      <JobContainer>
        <YearsActive>Jan 2018 - Present</YearsActive>
        <Company>Patreon — Membership Platform for Creators</Company>
        <Position>UX & UI Consultant</Position>
        <StyledList>
          <li>Redesigned the Patreon Blog from scratch, growing traffic by 70% and doubled key conversion rates</li>
          <li>Designed the site for mobile and desktop experiences, helping to optimize SEO and UX</li>
          <li>Managed a team of developers and organized project management tasks, balancing security fixes and features</li>
          <li>Integrated CMS and analytics systems to give Patreon control and visibility into the efficacy of their content strategy</li>
          <li>Designed new features to enhance the blog and implemented code changes to the user interface</li>
        </StyledList>
      </JobContainer>
      <JobContainer>
        <YearsActive>Oct 2016 - Oct 2019</YearsActive>
        <Company>Mutations Limited — Software Development Agency</Company>
        <Position>Co-Founder, Developer, PM, and Designer</Position>
        <StyledList>
          <li>Created a profitable consulting business alongside four senior software engineers</li>
          <li>Generated over $2 million in revenue through 14,000 billable consulting hours</li>
          <li>Maintained multiple product roadmaps across ~15 clients simultaneously</li>
          <li>Employed the agile workflow to satisfy customers through early and continuous delivery</li>
          <li>Led weekly calls with customers to communicate budget usage, capture requirements, and gather feedback</li>
          <li>Switched between a mixture of consumer applications and internal tooling</li>
          <li>Used technical fluency to communicate expectations between developers and customers</li>
          <li>Managed in-house contractors as well as external teams within the same projects</li>
        </StyledList>
      </JobContainer>
      <JobContainer>
        <YearsActive>Sept 2013 – Dec 2016</YearsActive>
        <Company>01Click — Enterprise Software Company with Fortune 500 Clients</Company>
        <Position>Product Manager and Designer</Position>
        <StyledList>
          <li>Designed and managed the roadmap of a mobile app distributed to 40,000 IBM sales reps</li>
          <li>Managed multiple product backlogs containing more than 6,000 user stories</li>
          <li>Guided adoption of the product by a second Fortune 500 Company, Schneider Electric</li>
          <li>Coordinated schedules of teams in India, Europe, Mexico, and the continental US</li>
          <li>Attended IBM conferences to demo products to real users and gather direct feedback</li>
          <li>Balanced competing feature requests from IBM executives with other priorities to deliver changes at the right time</li>
          <li>Defined project plans in Statements of Work that clearly outlined expectations and deliverables</li>
          <li>Oversaw software integration projects from conception to completion (e.g., Single Sign-On, CMS, Reporting)</li>
          <li>Managed quality assurance personnel and implemented processes to improve testing</li>
        </StyledList>
      </JobContainer>
      <JobContainer>
        <YearsActive>Feb 2011 - Sept 2014</YearsActive>
        <Company>Stageit.com — Live Entertainment Streaming Platform</Company>
        <Position>Product Manager and Designer</Position>
        <StyledList>
          <li>Developed a consumer-facing platform that allowed artists to perform live, ticketed, interactive performances online</li>
          <li>Solved technical issues to allow for over 10,000 simultaneous users in custom chat interface (10x improvement)</li>
          <li>Met routinely with the sales team to quickly optimize the product, growing monthly revenue to over $100,000</li>
          <li>Transitioned internal software development to an o!shore team in Bulgaria</li>
          <li>Wireframed and mocked the UI for all feature requests and attached designs to detailed user stories I wrote</li>
          <li>Monitored thousands of support tickets from paying customers to help prioritize bugs and feature requests</li>
        </StyledList>
      </JobContainer>
    </Container>
  </Wrapper>
)

export default Experience
