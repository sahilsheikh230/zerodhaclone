import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
     const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });
let[error,setError]=useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

axios.post("https://zerodhabackend-ix8a.onrender.com/signup",{
     username: formData.username,
    email: formData.email,
    password: formData.password,
    phone: formData.phone
})
.then((response)=>{
    alert("registered successfully!");
    navigate("https://zerodha1045.netlify.app/");
})
.catch((error)=>{
    
    setError(error.response?.data?.message || "User already exists")
})
    



  };

  return (
    <div className="container text-center">
        {error && (
  <div className="alert alert-danger mt-3">
    {error}
  </div>
)}
      <h1 className="mt-5">SignUp</h1>

      <form onSubmit={handleSubmit}>
        <input className="mt-3 mb-3  signupinput"
          type="text"
          name="username"
          placeholder="Enter username..."
          value={formData.username}
          onChange={handleChange}
        />
<br></br>
        <input  className="mt-3 mb-3  signupinput"
          type="email"
          name="email"
          placeholder="Enter email..."
          value={formData.email}
          onChange={handleChange}
        />
<br></br>
        <input  className="mt-3 mb-3  signupinput"
          type="password"
          name="password"
          placeholder="Enter password..."
          value={formData.password}
          onChange={handleChange}
        />
<br></br>
        <input  className="mt-3 mb-3  signupinput"
          type="tel"
          name="phone"
          placeholder="Enter phone..."
          value={formData.phone}
          onChange={handleChange}
        />
<br></br>
        <button  className="mt-3 mb-3 btn btn-primary mb-5" type="submit" onClick={handleSubmit}>Register</button>
      </form>
   <p>
  Already have an account? <Link to="/login">login</Link>
</p>
    </div>
  );
}
