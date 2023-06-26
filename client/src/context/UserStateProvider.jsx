import React, { createContext, useState } from "react";

export const UserState = createContext(null);

const UserStateProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <UserState.Provider value={{ currentUser, setCurrentUser, email, password, setEmail, setPassword, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserState.Provider>
  );
};

export default UserStateProvider;
