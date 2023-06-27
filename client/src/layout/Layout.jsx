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
      <nav className="flex justify-center bg-nav w-[1480px] h-[80px]">
        <ul className="flex items-center justify-between w-11/12">
          <div className="flex items-center justify-between font-bold w-5/12">
            <li>
              <Link to="/">
                <img className="relative bottom-3" src={logo} />
              </Link>
            </li>
            <li className="border-[1px] white hover:border-white hover:text-white p-2 rounded-2xl bg-li text-teal-900 hover:bg-liHover">
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="border-[1px] white hover:border-white hover:text-white p-2 rounded-2xl bg-li text-teal-900 hover:bg-liHover">
              <Link to="/reservations">Reservations</Link>
            </li>
            <li className="border-[1px] white hover:border-white hover:text-white p-2 rounded-2xl bg-li text-teal-900 hover:bg-liHover">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div className="flex items-center gap-6 mr-10">
            <li className="text-white font-bold">Usuario: {currentUser}</li>
            <li>
              <Button
                className={
                  "flex items-center justify-center p-3 border rounded-2xl text-teal-900 font-bold cursor-pointer bg-li hover:bg-red-400 hover:text-black"
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
