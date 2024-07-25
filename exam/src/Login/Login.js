import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Login = () => {

    const navigate=useNavigate()
    const handleClick=()=>{
      navigate("/")
    }

  return (
    <div className="hii">
      <Navbar/>
    <div className="formStyle">
      <div className="formsign1">
      <h2 class="Log">Welcome Back To DayFlow!</h2>
      <br></br>
      {/* <h2 class="Log">Seize the day with DayFlow!</h2> */}
      <p id="heading"><h3>Unlock the potential of every day with Dayflow!</h3></p>
        <form className='formsign' >
          <label className='labelsign'>Username : </label>
          <input type="text"  placeholder="Enter your Username" className="inputboxsign" />
          <label className='labelsign'>Email : </label>
          <input type="email"  placeholder="Enter your Email" className="inputboxsign" />
          <label className='labelsign'>Password : </label>
          <input type="password"  placeholder="Enter your Password" className="inputboxsign" minLength="7"/>
          <br></br>
          <br></br>
          <div className="checkbox-btn">
              <input className="inputboxsign" type="checkbox"/> 
              <p className="terms">By signing up you are agree to our Term of Use and Privacy Policy.</p>
              <br></br>
            </div>
              <button type="button" onClick={handleClick} className="btn" >Login</button>
           
            <br></br>
          
            {/* <input type="submit"  className="submit-btn" onClick={handClick}/> */}
          </form>
          
            </div>
          <div className="imgContainer">
            {/* <img src = {signUpCover} alt="no img" className="cover" /> */}
          </div>
    </div>
    </div>
  )
}


export default Login;