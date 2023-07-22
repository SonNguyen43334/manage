import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Container } from 'react-materialize';
function Detail() {
    const id = useParams();
    const pr = id.id;
    const [staffs, setStaff] = useState([]);
    const baseUrl = `https://649cea6a9bac4a8e669d104e.mockapi.io/apidata/`
    useEffect(() => {
        fetch(baseUrl + pr)
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => console.log(error.message));

    }, [id]);

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });

    return (
        <Container>
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 1200,
                flexGrow: 1,
                backgroundColor: 'rgba(180, 180, 180, 0.1)'
            }}
            key={staffs.id}
            style={{ boxShadow: '10px', marginTop: '60px', marginBottom: '50px', borderRadius: '20px' }}
        >
            <div className='grid-container2'>
                    <div class='column'>
                        <div className='product-tumb'>
                            <img className='picturesize1' src={staffs.avatar} alt='' />
                        </div>
                    </div>
                    <div class='column'>
                        <div className='textalign'>
                            <h3 className='detailtext'> {staffs.name} </h3>
                            <h3 className='detailtext'>Age: {staffs.age}</h3>                            
                            <h3 className='detailtext'> Address: {staffs.address}</h3>                            
                            <div className='product-bottom-details'></div>
                        </div>
                    </div>
                </div>
        </Paper>
        </Container>
    )
}

export default Detail