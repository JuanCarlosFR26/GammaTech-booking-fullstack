import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserStateProvider from "./context/UserStateProvider";
import Rooms from "./pages/Rooms";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import DataBaseProvider from "./context/DataBaseProvider";

function App() {
  return (
    <BrowserRouter>
      <UserStateProvider>
        <DataBaseProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="reservations" element={<Reservations />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path={"login"} element={<Login />} />
            <Route path={"register"} element={<Register />} />
          </Routes>
        </DataBaseProvider>
      </UserStateProvider>
    </BrowserRouter>
  );
}

export default App;
