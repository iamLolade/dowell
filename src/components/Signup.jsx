import logo from "../public/dowell-logo.svg"
import { useNavigate } from "react-router-dom"


const Signup = () => {
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
                <p className="desc">Sign up by entering information below</p>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        placeholder="John" 
                        name='firstname'
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        placeholder="Wick" 
                        name='lastname'
                    />
                </div>
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
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input 
                        type="text" 
                        placeholder="******************" 
                        name='confirmPassword'
                    />
                </div>
                <button>
                    Sign up
                </button>
                <p className="desc">
                    Already have an account? <span style={{ color: "#61B84C" }} onClick={() => navigate('/signin')}>Sign in</span>
                </p>
            </form>
        </div>
    )
}

export default Signup;