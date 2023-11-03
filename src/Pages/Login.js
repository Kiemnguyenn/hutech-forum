import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';

function Login() {
  const navigate = useNavigate();
  return (
    <div className='flex-container'>
        <div className='formLogin'>
            <div className='title'>
                <img className='hutech-logo'src="./HUTECH.jpg" alt="HUTECH LOGO" />

                <form>
                    <div className="formInput">
                        <input className='input-login'
                               type="text" 
                               placeholder="Username"/>
                    </div>
                    <div className="formInput">
                        <input className='input-login'
                               type="password" 
                               placeholder="Password"/>
                    </div>
                    <div className="formInput" >
                        <button onClick={()=>{navigate('/homepage', {replace:true})}}
                                className="btLogin" 
                                type="submit" 
                                value="Login" >Login</button>
                    </div>
                </form>

                <Link to ='#' className='forgot-password'>Forgot Password ?</Link>

                <hr className='hr-login'/>

                <form>
                    <div className="formInput" >
                        <button className="btLogins" 
                                type="submit" 
                                value="account" >Don't have an account yet?</button>
                    </div>
                </form>

                <p class="copyright">
                    C O P Y R I G H T &copy; 2 0 2 3 &nbsp; D E V E L O P M E N T &nbsp; B Y &nbsp;
                    N G U Y E N &nbsp; T R A N G &nbsp; C H I &nbsp; K I E M  &nbsp; & &nbsp;
                    T R A N &nbsp; N G U Y E N &nbsp; T I E N <br/>
                    F I N A L &nbsp; Y E A R &nbsp; P R O J E C T 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login