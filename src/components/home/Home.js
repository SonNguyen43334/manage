import React, { useEffect, useState } from 'react'
import { Container } from 'react-materialize';
import { Link } from 'react-router-dom';
function Home() {
    
    const [staff, setStaff] = useState([]);
    const baseUrl = `https://649cea6a9bac4a8e669d104e.mockapi.io/apidata/`
    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => console.log(error.message));

    }, []);
    return (
        <Container>
        <div className='book-items container-fluid mt-5'>
                <div className='row'>
                    {staff.map(staffs => (
                        <div key={staffs.id} className='col-12 col-md-4'>
                            <div style={{ boxShadow: '5px 5px 8px rgb(115, 180, 233)', borderRadius:'20px', margin: '0 10px 20px', backgroundColor:'black'}} className='row my-5'>
                                <div className='item1 col-12 my-5'>
                                    <div className='row Item-inside'>
                                        <div className='col-12 col-md-6 img-div'>
                                            <img src={staffs.avatar} alt='bookPic' className='img-fluid' style={{ width:'220px', height: '250px', borderRadius:'20px' }} />
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <div className='main-title pt-4 pb-3'>
                                                <h2 style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', color: 'darkgray'}}>{staffs.name}</h2>
                                                <i style={{fontWeight:'bold', color:'darkgray'}}>{staffs.age}</i>
                                                <h3 style={{ fontSize: '20px', fontWeight: '400', color: 'darkgray' }}>{staffs.address}</h3>
                                            </div>
                                            <div className='menu-year-book'>
                                                <div style={{ marginBottom: '10px', textAlign: 'center'}} className='year-book-divide d-flex justify-content-between'>                                     
                                                    <Link to={`/detail/${staffs.id}`}>
                                                        <button style={{ backgroundColor: 'darkgray', borderRadius: '20px'}} >Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </Container>
            )
}

export default Home