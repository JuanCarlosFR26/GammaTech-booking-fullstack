import React, { useEffect, useState } from 'react'
import { getData } from '../functions/functions';
import { Form } from 'react-router-dom';

const Reservations = () => {

  const [reservationsList, setReservationsList] = useState(null);

  useEffect(() => {
    getData(`http://localhost:8001/reservations`).then((res) => setReservationsList(res.result))
  }, [])

  return (
    <div className='bg-white h-screen flex flex-col items-center'>
      <h1 className='text-3xl font-bold mt-8'>Reservations:</h1>
      <div className='mt-8'>
        {reservationsList ? reservationsList.map((reservation) => (
          <div className='bg-reservationCard p-4 rounded-2xl font-bold'>
            <h1>Reservation ID: {reservation.reservation_id}</h1>
            <p>Room: {reservation.room_id}</p>
            <p>Time: {reservation.time_start} - {reservation.time_end}</p>
            <p>Reserved by {reservation.user_id}</p>
          </div>
        )) : <div>No reservations yet</div>}
      </div>
      {/* <Form /> */}
    </div>
  )
}

export default Reservations