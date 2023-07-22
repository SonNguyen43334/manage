
import React from 'react'
import { Container, Select, TextInput, Textarea,Button } from 'react-materialize'

export default function Contact() {
    const handleSubmit =(e)=> {
        e.preventDefault()
      }
    
  return (
    <Container >
        <h3 className='boldtext2'>Contact Us</h3>
        <form className='margin-bot' onSubmit={handleSubmit}>
            <TextInput id="TextInput-36" label="First Name"/>
            <TextInput id="TextInput-37" label="Last Name"/>
            <TextInput id="TextInput-38" label="Display Name"/>
            <TextInput id="TextInput-39" label="Phone Number"/>
            <TextInput email id="TextInput-40" label="Email" validate/>
            <Select id="select-46" multiple={false} onChange={function noRefCheck(){}} value="">
                <option disabled value="">
                    Language
                </option>
                <option value="1">
                    English
                </option>
                <option value="2">
                    Korean
                </option>
                <option value="3">
                    Chinese
                </option>
                <option value="4">
                    Vietnamese
                </option>
            </Select>
            <Textarea id="Textarea-28" label="Your content" />
            <Button>Submit</Button>
        </form>
    </Container>
  )
}
