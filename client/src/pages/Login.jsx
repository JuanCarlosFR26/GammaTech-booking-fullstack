import React, { useContext } from "react";
import Form from "../components/Form";
import banner from "../img/registerbanner.jpg";
import logo from "../img/logo.png";
import { UserState } from "../context/UserStateProvider";
import { auth } from "../.firebase/firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getData } from "../functions/functions";

const Login = () => {
  const {
    setCurrentUser,
    email,
    password,
    setEmail,
    setPassword,
    setIsAuthenticated,
    setIdUser,
    setReservations
  } = useContext(UserState);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    navigate("/");
    setCurrentUser(email);
    setIsAuthenticated(true);

    getData(`http://localhost:8001/user/email/${email}`).then(res => {
      console.log(res.result);
      const [{user_id}] = res.result
      if(user_id) {
        window.sessionStorage.setItem('sessionId', user_id)
        setIdUser(user_id)
        getData(`http://localhost:8001/reservations/email/${user_id}`).then(
      (res) => {
        if(res.result) {
          window.sessionStorage.setItem('reservations', JSON.stringify(res.result))
          setReservations(res.result)
        }
      }
    );
      }
    })

    window.sessionStorage.setItem('currentUser', email);
  };

  return (
    <>
      <div className="flex justify-center items-center  w-[1480px] h-screen">
        <div
          className="flex items-center justify-center bg-cover bg-center w-2/4 h-screen"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <img className="w-96 relative bottom-32" src={logo}></img>
        </div>
        <div className="flex items-center justify-center w-2/4 h-screen bg-yellow-100">
          <Form
            handleSubmit={handleSubmit}
            text={"Login"}
            path={"/register"}
            onChangeEmail={(e) => setEmail(e.target.value)}
            onChangePassword={(e) => setPassword(e.target.value)}
            linkText={"No tienes una cuenta?"}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
