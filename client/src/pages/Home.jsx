import React, { useContext, useEffect, useState } from "react";
import { getData } from "../functions/functions";
import { UserState } from "../context/UserStateProvider";
import Reservation from "../components/Reservation";

const Home = () => {
  const {  currentUser, reservations } = useContext(UserState);


  console.log(reservations);
  return (
    <>
      <div className="bg-white h-screen flex items-center flex-col gap-8">
        <h1 className="font-bold text-3xl mt-10">Welcome {currentUser}. This is your reservations list:</h1>
        <div className="flex flex-wrap gap-8">
          {reservations ? (
            reservations.map((reservation, i) => (
              <div key={i}>
                <Reservation
                  className={'w-88 flex flex-col items-start rounded-2xl p-4 bg-reservationCard font-bold'}
                  id={i}
                  room={reservation.room_id}
                  start={reservation.time_start}
                  end={reservation.time_end}
                />
              </div>
            ))
          ) : (
            <div>No tienes reservations</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
