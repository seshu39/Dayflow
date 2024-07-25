import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'
import Navbar from "../Navbar/Navbar";
import { LoginHandle } from "./LoginContext";
import Footer from "../Footer/Footer";
const Signup = () => {
    const navigate1 = useNavigate();

    const [fname, fnamechange] = useState("");
    const [lname, lnamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("");
    const [gender, genderchange] = useState("female");

    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [countryError, setCountryError] = useState("");
    

    const navigate = useNavigate();
    const HandleSubmit = () => {
        LoginHandle.islogedin = true;
        LoginHandle.name = fname;
        console.log(fname)
        navigate('/')
    }

 const hand=()=>{
   navigate('/Login');
 }

    const handle=()=>{

    
    axios.get("https://jsonplaceholder.typicode.com/users")    
      .then(response => {
       
        const user = response.data.find(user => user.email === email && user.website === password);
        if (user) {
       
          navigate('/');
        } 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
        let isValid = true;

        if (fname.trim() === '') {
            setFnameError("First name is required.");
            isValid = false;
        } else {
            setFnameError("");
        }

        if (lname.trim() === '') {
            setLnameError("Last name is required.");
            isValid = false;
        } else {
            setLnameError("");
        }
        if(email.trim()===''){
            setEmailError("Email is required.");
            isValid=false;
        }
        else{
            setEmailError("")
        }
        
        if(password.trim()===''){
            setPasswordError("Password is Required")
            isValid=false;
        }
        else{
            setPasswordError("");
        }
        
       
        if (phone.trim() === '') {
            setPhoneError("Phone number is required.");
            isValid = false;
        } else {
            setPhoneError("");
        }

        if (country.trim() === '') {
            setCountryError("Country is required.");
            isValid = false;
        } else {
            setCountryError("");
        }

        if (isValid) {
            navigate1("/");
        }
        
    };


    const handleLogin = () => {
        navigate1("/HomePage");
    };

    const handleFnameChange = (value) => {
        fnamechange(value.charAt(0).toUpperCase() + value.slice(1));
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        
        
    };

    const buttonStyle = {
        marginRight: '10px',
        width: '100px', 
    height: '50px'  
    };

    const labelStyle = {
        marginBottom: '1px'
    };

    const containerStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '50px',
        width: '50%',
        // backgroundImage: 'linear-gradient(to right, #ff9966, #ff5e62)',
        // background: '#005AA7',  
        // background: '-webkit-linear-gradient(to right, #FFFDE4, #005AA7)',  
        // background: 'linear-gradient(to right, #FFFDE4, #005AA7)', 
        
        
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    return (
      <div class="loginsignup">
        <Navbar/>
        <div style={containerStyle}>
            {/* <h1 style={{fontFamily:'cursive', textAlign: 'center', marginBottom: '20px' ,color:'white'}}>LOGIN</h1> */}
            <form onSubmit={HandleSubmit}>
                <div style={{fontFamily:'cursive', border: '1px solid #ccc', borderRadius: '5px', padding: '20px', backgroundColor: '#202d3e' ,marginTop:'25px'}}>
                    <h3 style={{textAlign: 'center',fontFamily:'cursive',color:'white'}}>SIGNUP</h3>
                    <br/>

                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                        <div style={{ flex: 1, marginRight: '10px' ,color:'white'}}>
                            <label style={labelStyle} minlength='4' >First Name <span style={{ color: 'red' }}>*</span></label>
                            <input value={fname} onChange={e => handleFnameChange(e.target.value)} style={inputStyle} />
                            {fnameError && <div style={{ color: 'red' }}>{fnameError}</div>}
                        </div>
                        <div style={{ flex: 1 ,color:'white'}}>
                            <label style={labelStyle} >Last Name <span style={{ color: 'red' }}>*</span></label>
                            <input value={lname} onChange={e => lnamechange(e.target.value)} style={inputStyle} />
                            {lnameError && <div style={{ color: 'red' }}>{lnameError}</div>}
                        </div>
                    </div>

                    <div style={{ marginBottom: '10px' ,color:'white'}}>
                        <label style={labelStyle}>Email <span style={{ color: 'red' }}>*</span></label>
                        <input value={email} onChange={e => emailchange(e.target.value)} style={inputStyle} />
                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                    </div>

                    <div style={{ marginBottom: '10px' ,color:'white'}}>
                        <label style={labelStyle}>Password <span style={{ color: 'red' }}>*</span></label>
                        <input value={password} onChange={e => passwordchange(e.target.value)} style={inputStyle} type="password" />
                        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                    </div>

                    <div style={{ marginBottom: '10px' ,color:'white'}}>
                        <label style={labelStyle}>Phone Number <span style={{ color: 'red' }}>*</span></label>
                        <input value={phone} onChange={e => phonechange(e.target.value)} style={inputStyle} />
                        {phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
                    </div>

                    <div style={{ marginBottom: '10px' ,color:'white'}}>
                        <label style={labelStyle}>Country <span style={{ color: 'red' }}>*</span></label>
                        <input value={country} onChange={e => countrychange(e.target.value)} style={inputStyle} />
                        {countryError && <div style={{ color: 'red' }}>{countryError}</div>}
                    </div>

                    <div style={{ marginBottom: '10px' ,color:'white'}}>
                        <label style={labelStyle}>Gender</label>
                        <br />
                        <input type="radio" checked={gender === 'male'} onChange={() => genderchange('male')} name="gender" value="male" />
                        <label style={{ marginRight: '10px', marginLeft: '5px' }}>Male</label>
                        <input type="radio" checked={gender === 'female'} onChange={() => genderchange('female')} name="gender" value="female" />
                        <label style={{ marginRight: '10px', marginLeft: '5px' }}>Female</label>
                    </div>
                    <br></br>
                    <a style={{marginLeft:"140px", color:"white" }} onClick={hand}>Already have an Account ? Login here!</a><br/>
                    <br></br>
                    {/* <span className="color">Already a user ? <span class="sing">Signup Here</span></span> */}
                    <div style={{ textAlign: 'center' }}>
                        <button type="button" onClick={handle} className="btn-btn-primary" style={buttonStyle}>Signup</button>
                        
                    </div>
                  
                </div>
            </form>
        </div>
        {/* <Footer/> */}
        </div>
    );
}

export default Signup;