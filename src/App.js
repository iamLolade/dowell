import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
