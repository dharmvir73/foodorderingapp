import "./Login.css"
import { Link } from "react-router-dom";


const Login = () => {
    return ( 
            
        <div className="wrapper">
            <div className="text">LOGIN</div>
            <div className="input-field">
                <span className="text light">Email</span>
                <input type="email" />
            </div>
            <div className="input-field">
                <span className="text light">Password</span>
                <input type="password" />
            </div>
            <div className="remeber">
                <input type="checkbox" />
                <span>Remember me?</span>
            </div>
            <div className="login-btn">
                LOGIN
            </div>
            <span className="forgotPass">Forgot Password?</span>
            <hr />
            <div className="registration" >Need an account? 
                <Link to="/register" >
                    <span style={{textDecoration:"none", cursor: "pointer", color:"black"}}> SIGN UP</span>
                </Link>
        </div>
        </div>
     );
}
 
export default Login;