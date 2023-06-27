import React, { useContext, useEffect } from "react";
import { getData } from "../functions/functions";
import { UserState } from "../context/UserStateProvider";
import { DataProvider } from "../context/DataBaseProvider";

const Home = () => {
  const { currentUser } = useContext(UserState);
  const { userId, setUserId, reservations, setReservations } =
    useContext(DataProvider);

  useEffect(() => {
    getData(`http://localhost:8001/user/email/${currentUser}`).then((res) => {
      if (res.result) {
        const [{ user_id }] = res.result;
        setUserId(user_id);
        console.log(userId);
      }
    });
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default Home;
