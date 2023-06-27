import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserStateProvider from "./context/UserStateProvider";

function App() {

  return (
    <BrowserRouter>
      <UserStateProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path={"login"} element={<Login />} />
          <Route path={"register"} element={<Register />} />
        </Routes>
      </UserStateProvider>
    </BrowserRouter>
  );
}

export default App;
