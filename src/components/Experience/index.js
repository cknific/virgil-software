import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 3rem 0;
`

const Position = styled.h6``

const JobContainer = styled.div`
  margin-bottom: 2.5rem;
`

const StyledList = styled.ul`
  padding-left: .9rem;
  font-size: .9rem;
`
const SectionHeading = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
  color: orange;
  font-size: 12px;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`

const YearsActive = styled.div`
  color: #666;
  font-size: 11px;
  letter-spacing: 0.05rem;
  margin-bottom: .25rem;
  text-transform: uppercase;
`

const Experience = () => (
  <Wrapper>
    <Container>
      <SectionHeading>Work Experience</SectionHeading>
      <JobContainer>
        <YearsActive>Feb 2020 - Present</YearsActive>
        <h5>Bruvi — IoT Enabled Single-Serve Coffee Machine</h5>
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
        <h5>Patreon — Membership Platform for Creators</h5>
        <Position>UX & UI Consultant</Position>
        <StyledList>
          <li>Redesigned the Patreon Blog from scratch, growing traffic by 70% and doubled key conversion rates</li>
          <li>Designed the site for mobile and desktop experiences, helping to optimize SEO and UX</li>
          <li>Managed a team of developers and organized project management tasks, balancing security fixes and features</li>
          <li>Integrated CMS and analytics systems to give Patreon control and visibility into the efficacy of their content </li>strategy
          <li>Designed new features to enhance the blog and implemented code changes to the user interface</li>
        </StyledList>
      </JobContainer>
      <JobContainer>
        <YearsActive>Oct 2016 - Oct 2019</YearsActive>
        <h5>Mutations Limited — Software Development Agency</h5>
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
        <h5>01Click — Enterprise Software Company with Fortune 500 Clients</h5>
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
        <h5>Stageit.com — Live Entertainment Streaming Platform</h5>
        <Position>Product Manager and Designer</Position>
        <StyledList>
          <li>Developed a consumer-facing platform that allowed artists to perform live, ticketed, interactive performances online</li>
          <li>Solved technical issues to allow for over 10,000 simultaneous users in custom chat interface (10x improvement)</li>
          <li>Met routinely with the sales team to quickly optimize the product, growing monthly revenue to over $100,000</li>
          <li>Transitioned internal software development to an o!shore team in Bulgaria</li>
          <li>Wireframed and mocked the UI for all feature requests and attached designs to detailed user stories I wrote</li>
          <li>Monitored thousands of support tickets from paying customers to help prioritize bugs and feature requests</li>        </StyledList>
      </JobContainer>
    </Container>
  </Wrapper>
)

export default Experience
