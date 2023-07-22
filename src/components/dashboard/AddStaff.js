import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Dashboard.scss'
import { Container, TextInput } from 'react-materialize';

function AddStaff() {
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const baseUrl = `https://649cea6a9bac4a8e669d104e.mockapi.io/apidata`

  const handleSubmit = (e) => {
    e.preventDefault();
    const staff = { id, avatar, name, age, address };
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(staff)
    })
      .then((res) => {
        alert('Add successfully!');
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err.message);
      })

  }

  return (
    <Container>
      <form className='margin-bot' onSubmit={handleSubmit}>
        <div className='add-form'>
          <div className='form-title'>
            <h2 className='boldtext2'>ADD NEW MEMBER</h2>
          </div>
          <div className='form-body'>
            <div className='form-group'>
              <TextInput id="standard-basic" label="Avatar" variant="standard"
                value={avatar}
                onChange={e => setAvatar(e.target.value)} />
            </div>
            <div className='form-group'>
              <TextInput id="standard-basic" label="Name" variant="standard"
                value={name}
                onChange={e => setName(e.target.value)}
                required />
            </div>
            <div className='form-group'>
              <TextInput id="standard-basic" label="Age" variant="standard"
                value={age}
                onChange={e => setAge(e.target.value)}
                required />
            </div>
            <div className='form-group'>
              <TextInput id="standard-basic" label="Address" variant="standard"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required />
            </div>
            <div className='form-group'>
              <div className="container11">
                <div className="column11">
                  <div className='save-btn'>
                    <Button variant="contained" color="success" type='submit'>Save</Button>
                  </div>
                </div>
                <div className="column11">
                  <div className='cancel-btn'>
                    <Link to='/dashboard'><Button variant="contained" color="error">Cancel</Button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default AddStaff