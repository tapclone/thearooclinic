import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Admin.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

function AdminLogin() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setErrror] = useState(false);
  
    const navigete = useNavigate();

    const handleLogin = async (e) => {
       
        if(username&&password){
            e.preventDefault();
            await axios.post("/api/admin/login",{username,password}).then(res=>{
                console.log(res.data);
                localStorage.setItem("adminToken", res.data);
                navigete("/adminHome");
            }).catch(err=>{
                setErrror(true);
            })
        }
        
    };

    function togglePassword() {
        var x = document.getElementById("typePasswordX");
        if (x.type === "password") {
          x.type = "text";
          document.querySelector('.visibleIcon').style.color='rgb(57, 119, 234)'
        } else {
          x.type = "password";
          document.querySelector('.visibleIcon').style.color='white'
        }
      }

      

    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style={{borderRadius:'1rem'}}>
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase" >Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your username and password!</p>
                                    <form >
                                    <div class="form-outline form-white mb-4">
                                        <input required onChange={(e)=>{setUsername(e.target.value);setErrror(false)}}type="text" id="typeEmailX" class="form-control form-control-lg" autoComplete="off" autoCorrect='false'/>
                                        <label class="form-label" for="typeEmailX">Username</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input required onChange={(e)=>{setPassword(e.target.value);setErrror(false)}} type="password" id="typePasswordX" class="form-control form-control-lg" autoComplete="off" autoCorrect='false'/>
                                        <label class="form-label" for="typePasswordX">Password</label><VisibilityIcon className='visibleIcon' onClick={togglePassword} sx={{marginLeft:'60%',cursor:'pointer'}}></VisibilityIcon>
                                    </div>
                                    
                                    <input onClick={handleLogin} class="btn btn-outline-light btn-lg px-5" type="submit"  value='Login' />

                                    </form>
                                    <small className='text-danger'>{error?'invalid login details':''}</small>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin