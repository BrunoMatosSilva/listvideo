
import {
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function RoutesComponent() {
  return (
    <Routes>
      {/*<Route path="/" element={<Home />} />*/}
      <Route path="/" element={<Login />} />
    </Routes>
  )
} 