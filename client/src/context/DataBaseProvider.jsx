import React, { createContext, useState } from 'react'

export const DataProvider = createContext(null);

const DataBaseProvider = ({children}) => {

    const [userId, setUserId] = useState(0);
    const [reservations, setReservations] = useState(null);
  return (
    <DataProvider.Provider value={{ userId, setUserId, reservations, setReservations }}>
        {children}
    </DataProvider.Provider>
  )
}

export default DataBaseProvider