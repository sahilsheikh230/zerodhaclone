import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
let [err,setError]=useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await axios.post("https://zerodhabackend-ix8a.onrender.com/login", formData,{ withCredentials: true });
      alert(response.data.message || "Logged in!");
      
        navigate("https://zerodha1045.netlify.app");
    } catch (err) {
      console.log(err);
      
    setError(err.response?.data?.message || "Email or password is incorrect");
    }
  };


  return (
    <div className="container text-center">
        {err && (
  <div className="alert alert-danger mt-3">
    {err}
  </div>
)}

      <h1 className="mt-5">Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="mt-3 mb-3 signupinput"
          type="email"
          name="email"
          placeholder="Enter email..."
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          className="mt-3 mb-3 signupinput"
          type="password"
          name="password"
          placeholder="Enter password..."
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button className="mt-3 mb-3 btn btn-primary mb-5" type="submit">
          Login
        </button>
      </form>
       <p>
  Don't have  an account? <Link to="/signup">Create account</Link>
</p>
    </div>
  );
}
