import React, { useEffect, useState } from 'react'
import { getData } from '../functions/functions';
import red from '../img/red.jpg'
import yellow from '../img/yellow.jpg'
import white from '../img/white.jpg'
import black from '../img/black.jpg'
import violet from '../img/violet.jpg'
import air from '../img/air-conditioner.png'
import noair from '../img/maintenance.png'
import tv from '../img/smart-tv.png'
import notv from '../img/nomonitor.png'

const Rooms = () => {

  const [roomsList, setRoomsList] = useState(null);

  useEffect(() => {
    getData(`http://localhost:8001/rooms`).then((res) => setRoomsList(res.result))
  }, [])

  return (
    <div className='bg-white p-8 h-auto flex flex-col items-center'>
      <h1 className='text-3xl font-bold mt-8'>Rooms</h1>
      <div className='flex flex-wrap flex-col gap-8 mt-8'>
        {
          roomsList && roomsList.map((room, i) => (
            <div key={i} className={`flex flex-col items-center bg-roomCard p-4 rounded-2xl w-[400px] gap-6`}>
              <h1 className='font-bold text-3xl'>Room {room.name} - Room Id: {room.room_id}</h1>
              <img className='w-60 h-42 rounded-2xl' src={room.name === 'Red' ? red : room.name === 'Black' ? black : room.name === 'Yellow' ? yellow : room.name === 'White' ? white : violet}></img>
              <p className='flex gap-4 items-center font-bold'>{room.tv ? 'With TV' : 'Without TV'} - <img className='w-8' src={room.tv ? tv : notv}></img></p>
              <p className='flex gap-4 items-center font-bold'>{room.air_conditioning ? 'With air conditioning' : 'Without air conditioning'} - <img className='w-8' src={room.air_conditioning ? air : noair}></img></p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Rooms