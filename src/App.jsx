import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Otp from "./Components/Authentication/Otp";
import Signup from "./Components/Authentication/Signup";
import Home from "./Components/Feed/Home";
import Tweet from "./Components/Tweet/NewTweet"
import Welcome from "./pages/Welcome"


const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verifyOtp" element={<Otp />} />
      <Route path="/tweet" element={<Tweet/>} />
      <Route path="/" element={<Welcome/>} />
    </Routes>
  );
};

export default App;
