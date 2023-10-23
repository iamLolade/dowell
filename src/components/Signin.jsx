import logo from "../public/dowell-logo.svg"
import { useNavigate } from "react-router-dom"


const Signin = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (
        <div className="signinComponent">
            <form className="form" onSubmit={handleSubmit}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1 className="title">Welcome to Dowell Wallet</h1>
                <p className="desc">Sign in by entering information below</p>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="text" 
                        placeholder="admin@example.com" 
                        name='email'
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="text" 
                        placeholder="******************" 
                        name='password'
                    />
                </div>
                <div className="forgot">
                    <p className="desc"><span onClick={() => navigate('/forgetpassword')}>Forgot password?</span></p>
                </div>
                <button>
                    Sign in
                </button>
                <p className="desc">
                    Don't have an account? <span style={{ color: "#61B84C" }} onClick={() => navigate('/signup')}>Sign up</span>
                </p>
            </form>
        </div>
    )
}

export default Signin;