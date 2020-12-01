import React from 'react'
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #beece3;
  padding: 5rem 0;
`

const SectionHeading = styled.div`
  margin-bottom: 1.5rem;
`

const FormContainer = styled.div`
  max-width: 40rem;
`

const Contact = () => (
  <Wrapper id="contact">
    <Container>
      <SectionHeading>
        <h3>Contact</h3>
      </SectionHeading>
      <FormContainer>
        <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="user@example.com" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Message</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button type="submit">Submit</Button>
          <input type="hidden" name="form-name" value="contact" />
        </Form>
      </FormContainer>
    </Container>
  </Wrapper>
)

export default Contact
