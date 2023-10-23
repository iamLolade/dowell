import logo from "../public/dowell-logo.svg"
import { useNavigate } from "react-router-dom"

const ForgetPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/otp')
    }

    return (
        <div className="signinComponent">
            <form className="form" onSubmit={handleSubmit}>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1 className="title">Reset your password</h1>
                <p className="desc">Provide the following details to reset your password</p>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder="john.wick" 
                        name='username'
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
                <button>
                    Proceed
                </button>
            </form>
        </div>
    )
}

export default ForgetPassword;