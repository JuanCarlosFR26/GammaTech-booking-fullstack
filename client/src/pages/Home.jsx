import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserState } from "../context/UserStateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../.firebase/firebaseConfig";

const Home = () => {
  const { setCurrentUser, isAuthenticated } = useContext(UserState);
  const navigate = useNavigate();


  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if(user) {
        setCurrentUser(user.email);
      }
    })


  }, [])

  return (
    <>
      {
        isAuthenticated ? <div>Home</div>
        : navigate("/login")}
    </>
  );
};

export default Home;
