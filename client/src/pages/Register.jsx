import React, { useContext } from "react";
import Form from "../components/Form";
import banner from "../img/registerbanner.jpg";
import logo from "../img/logo.png";
import { UserState } from "../context/UserStateProvider";
import { auth } from "../.firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { email, password, setEmail, setPassword } = useContext(UserState);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    navigate("/login");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen  w-[1480px]">
        <div
          className="flex items-center justify-center bg-cover bg-center w-2/4 h-screen"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <img className="w-96 relative bottom-32" src={logo}></img>
        </div>
        <div className="flex items-center justify-center w-2/4 h-screen bg-yellow-100">
          <Form
            text={"Register"}
            path={"/login"}
            handleSubmit={handleSubmit}
            onChangeEmail={(e) => setEmail(e.target.value)}
            onChangePassword={(e) => setPassword(e.target.value)}
            linkText={"Ya tienes una cuenta?"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
