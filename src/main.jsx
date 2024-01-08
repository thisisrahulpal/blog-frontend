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
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import App from "./App";
import PrivateRoute from "./Components/PrivateRoute";
import Foryou from "./Components/Feed/Foryou";
import Following from "./Components/Feed/Following";
import Trending from "./Components/Search/Trending";
import Search from "./pages/Search";
import News from "./Components/Search/News";
import Sports from "./Components/Search/Sports";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verifyOtp" element={<Otp />} />

        <Route path="" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />}>
            <Route index={true} path="/home/foryou" element={<Foryou />} />
            <Route path="/home/following" element={<Following />} />
          </Route>
          <Route path="/search" element={<Search />}>
            <Route path="/search/trending" element={<Trending />} />
            <Route path="/search/news" element={<News />} />
            <Route path="/search/sports" element={<Sports />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="319303294247-tc4et7pbskrsi6n84c4e8t9fqjnloeng.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
