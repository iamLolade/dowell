import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgotPassword";
import Otp from "./components/Otp";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/otp" element={<Otp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
