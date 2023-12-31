import { Button, TextField, colors } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Container, TextInput } from 'react-materialize';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditStaff() {
  const id = useParams();
  const pr = id.id;
  const baseUrl = `https://649cea6a9bac4a8e669d104e.mockapi.io/apidata/`
  useEffect(() => {
    fetch(baseUrl + pr)
      .then(response => response.json())
      .then(data => {
        setStaff(data.id);
        setAvatar(data.avatar);
        setName(data.name);
        setAge(data.age);
        setAddress(data.address);
      })
      .catch(error => console.log(error.message));

  }, [id]);
  const [staff, setStaff] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const staff = { id, avatar, name, age, address };
    fetch(baseUrl + pr, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(staff)
    })
      .then((res) => {
        alert('Update successfully!');
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err.message);
      })

  }
  return (
    <Container>
      <form className='margin-bot-edit' onSubmit={handleSubmit}>
        <div className='edit-form'>
          <div className='form-title'>
            <h2 className='edittext'>EDIT MEMBER INFORMATION</h2>
          </div>
          <div className='form-body'>
            <div className='form-group'>
              <TextInput id="standard-basic" label="ID" variant="standard"
                value={staff}
                disabled />
            </div>
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
                  <div className='update-btn'>
                    <Button variant="contained" color="success" type='submit'>Update</Button>
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

export default EditStaff