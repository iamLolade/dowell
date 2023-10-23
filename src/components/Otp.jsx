import logo from "../public/dowell-logo.svg"
import { useNavigate } from "react-router-dom"

const Otp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/signin')
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
                    <label>One Time Password</label>
                    <input 
                        type="text" 
                        placeholder="****" 
                        name='password'
                    />
                </div>
                <button>
                    Proceed
                </button>
            </form>
        </div>
    )
}

export default Otp;