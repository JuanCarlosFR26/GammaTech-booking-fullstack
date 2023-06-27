import React, { useContext } from "react";
import logo from "../img/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserState } from "../context/UserStateProvider";
import Button from "../components/Button";
import { signOut } from "firebase/auth";
import { auth } from "../.firebase/firebaseConfig";

const Layout = () => {
  const { currentUser, setIsAuthenticated, setCurrentUser } =
    useContext(UserState);

  const navigate = useNavigate();

  const logout = async () => {
    signOut(auth)
      .then(() => {
        console.log("Signout");
      })
      .catch((error) => {
        console.log(error);
      });
    setIsAuthenticated(false);
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-teal-400 w-screen">
        <ul className="flex items-center justify-between w-full">
          <li className="ml-10">
            <Link to="/">
              <img src={logo} />
            </Link>
          </li>
          <div className="flex items-center gap-6 mr-10">
            <li className="text-white font-bold">Usuario: {currentUser}</li>
            <li>
              <Button
                className={
                  "flex items-center justify-center p-3 border rounded-2xl text-white font-bold cursor-pointer bg-orange-600 hover:bg-yellow-400 hover:text-black"
                }
                onClick={() => logout()}
                text={"Cerrar sesión"}
              />
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
