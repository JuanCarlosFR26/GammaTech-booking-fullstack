import React from 'react'

const FormWithInputs = () => {
  return (
    <form className='border mt-10 p-10 rounded-3xl shadow-2xl bg-nav flex flex-col'>
        <div className='flex flex-col gap-2'>
            <label className='font-bold' htmlFor='userId'>User Id</label>
            <input className='border rounded-2xl shadow-md pl-4 outline-none' type='number' name='userId'/>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='font-bold' htmlFor='roomId'>Room Id</label>
            <input className='border rounded-2xl shadow-md pl-4 outline-none' type='number' name='roomId'/>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='font-bold' htmlFor='timeStart'>Time Start</label>
            <input className='border rounded-2xl p-2 shadow-lg' type='datetime-local' name='timeStart'/>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='font-bold' htmlFor='timeEnd'>Time End</label>
            <input className='border rounded-2xl p-2 shadow-lg' type='datetime-local' name='timeEnd'/>
        </div>
        <input className='border p-3 rounded-2xl mt-8 font-bold bg-li cursor-pointer hover:bg-orange-600 hover:text-white' type='submit' value={'Make Reservation'}/>
    </form>
  )
}

export default FormWithInputs