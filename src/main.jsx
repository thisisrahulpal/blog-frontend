import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import Login from "./Components/Authentication/Login";
import Otp from "./Components/Authentication/Otp";
import Signup from "./Components/Authentication/Signup";
import Home from "./Components/Feed/Home";
import Tweet from "./Components/Tweet/NewTweet";
import Welcome from "./pages/Welcome";
import App from "./App.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verifyOtp" element={<Otp />} />
        
        <Route path="" element={<PrivateRoute />}>
          <Route path="/tweet" element={<Tweet />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="288082114001-hub28lb80pjqlu4hpntm1a877m12gu4l.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
