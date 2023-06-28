import React from 'react'

const Reservation = ({ className, id, room, start, end }) => {
  return (
    <div className={className}>
        <h2>Reservation {id}</h2>
        <p>Room: {room}</p>
        <p>Time: {start} - {end}</p>
    </div>
  )
}

export default Reservation