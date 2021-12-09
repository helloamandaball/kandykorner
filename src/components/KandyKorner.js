
import React, { useState } from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css";
import { Routes, Route, Navigate } from "react-router";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const KandyKorner = () => {
  const [loggedin, setLoggedin] = useState(false);

  const changeState = (bool) => setLoggedin(bool);

  if (localStorage.getItem("kandy_customer")) {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login setLoggedin={changeState} />} />
        <Route path="/register" element={<Register setLoggedin={changeState} />} />
      </Routes>
    );
  }
};


////Previous code, before adding Login Ch.9
// import React from "react";
// import { NavBar } from "./nav/NavBar"
// import { ApplicationViews } from "./ApplicationViews"
// import "./KandyKorner.css"

// export const KandyKorner = () => (
//     <>
//         <NavBar />
//         <ApplicationViews />
//     </>
// )