import {React,useEffect,useState} from 'react'
import axios from 'axios'
import './DoctorsSlider.css'


function DoctorsSlider() {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        axios.get('/api/admin/viewAllDoctors').then(res => {

            setDoctors(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className='brandList'>

            <ul>
                {doctors.map((item)=>{
                   return <li>
                    <div class="doctorCard yellow">
                        <div className="doctorImage">
                            <img src={item.image} class="img-fluid" alt="#" />
                        </div>
                        <h4>{item.Name}</h4>
                        <p>{item.Description}</p>
                    </div>
                </li>
                },[])}
                

            </ul>
        </div>
    )
}

export default DoctorsSlider