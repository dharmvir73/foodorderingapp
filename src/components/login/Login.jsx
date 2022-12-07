import "./Login.css"

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
            <div className="registration">Need an account? <span style={{textDecoration:"underline", cursor: "pointer"}}>SIGN UP</span></div>
        </div>
     );
}
 
export default Login;