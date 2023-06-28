import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../.firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const UserState = createContext(null);

const UserStateProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [idUser, setIdUser] = useState(null);
  const [reservations, setReservations] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email);
        setIsAuthenticated(true);
      } else {
        navigate("/login");
      }
    });
    const idSessionStorage = sessionStorage.getItem('sessionId')
    if(idSessionStorage) {
      setIdUser(idSessionStorage)
    }
    const reservationStorage = JSON.parse(sessionStorage.getItem('reservations'))
    if(reservationStorage) {
      setReservations(reservationStorage)
    }
  }, []);

  return (
    <UserState.Provider
      value={{
        currentUser,
        setCurrentUser,
        email,
        password,
        setEmail,
        setPassword,
        isAuthenticated,
        setIsAuthenticated,
        idUser,
        setIdUser,
        reservations,
        setReservations
      }}
    >
      {children}
    </UserState.Provider>
  );
};

export default UserStateProvider;
