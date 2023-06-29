import React, { useState } from 'react'

const FormWithInputs = () => {


    const [inputId, setInputId] = useState(null);
    const [roomId, setRoomId] = useState(null);
    const [timeStart, setTimeStart] = useState(null);
    const [timeEnd, setTimeEnd] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedTimeStart = timeStart.replace('T', ' ');
        const formattedTimeEnd = timeEnd.replace('T', ' ');
        const intRoomId = parseInt(roomId);
        const intInputId = parseInt(inputId);
        console.log(typeof intRoomId),
        console.log(typeof intInputId)
        console.log(typeof formattedTimeStart);
        console.log(typeof formattedTimeEnd);

        const reservation = {
            user_id: intInputId,
            room_id: intRoomId,
            time_start: formattedTimeStart,
            time_end: formattedTimeEnd
        }


        try {
            const response = await fetch('http://localhost:8001/reservation/create', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(reservation)
            });

            if(response.ok) {
                console.log('Enviado')
            } else {
                console.error('Error')
            }
        } catch (error) {
            console.error(error)
        }
    }

    console.log(timeEnd, timeStart);


  return (
    <form onSubmit={handleSubmit} className='border mt-10 p-10 rounded-3xl shadow-2xl bg-nav flex flex-col'>
        <div className='flex flex-col gap-2'>
            <label className='font-bold' htmlFor='userId'>User Id</label>
            <input onChange={(e) => setInputId(e.target.value)} className='border rounded-2xl shadow-md pl-4 outline-none' type='number' name='userId'/>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='font-bold' htmlFor='roomId'>Room Id</label>
            <input onChange={(e) => setRoomId(e.target.value)} className='border rounded-2xl shadow-md pl-4 outline-none' type='number' name='roomId'/>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='font-bold' htmlFor='timeStart'>Time Start</label>
            <input onChange={(e) => setTimeStart(e.target.value)} className='border rounded-2xl p-2 shadow-lg' type='datetime-local' name='timeStart'/>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='font-bold' htmlFor='timeEnd'>Time End</label>
            <input onChange={(e) => setTimeEnd(e.target.value)} className='border rounded-2xl p-2 shadow-lg' type='datetime-local' name='timeEnd'/>
        </div>
        <input className='border p-3 rounded-2xl mt-8 font-bold bg-li cursor-pointer hover:bg-orange-600 hover:text-white' type='submit' value={'Make Reservation'}/>
    </form>
  )
}

export default FormWithInputs