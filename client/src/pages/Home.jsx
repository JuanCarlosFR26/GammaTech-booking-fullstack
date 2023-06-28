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
        console.log(res.result);
        const [{user_id}] = res.result;
        console.log(user_id);
        getData(`http://localhost:8001/reservations/email/${user_id}`).then((res) => {
          setReservations(res.result)
        })
      }
    });
  }, []);

  return (
    <>
      <div>
        {
          reservations ? reservations.map((reservation, i) => (
            <div key={i}>
              <h1>User: {reservation.name}</h1>
              <p>Room: {reservation.room_id}</p>
              <p>Time start: {reservation.time_start}</p>
              <p>Time end: {reservation.time_end}</p>
            </div>
          )) : <div>No tienes reservations</div>
        }
      </div>
    </>
  );
};

export default Home;
