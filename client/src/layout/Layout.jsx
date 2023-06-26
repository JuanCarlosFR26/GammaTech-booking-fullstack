import React, { useContext } from "react";
import logo from "../img/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserState } from "../context/UserStateProvider";
import Button from '../components/Button';
import { signOut } from "firebase/auth";
import { auth } from "../.firebase/firebaseConfig";

const Layout = () => {

  const { currentUser, setIsAuthenticated, setCurrentUser } = useContext(UserState);

  const navigate = useNavigate();

  const logout = async () => {
    signOut(auth).then(() => {
      console.log('Signout')
    }).catch((error) => {
      console.log(error);
    })
    setIsAuthenticated(false)
    setCurrentUser(null)
    navigate('/login')
  }

  return (
    <>
      <nav className="bg-green-400">
        <ul className="flex items-center justify-evenly">
          <li>
            <Link to="/">
              <img src={logo} />
            </Link>
          </li>
          <li>
            Usuario: {currentUser}
          </li>
          <li>
            <Button onClick={() => logout()} text={'Cerrar sesión'}/>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
