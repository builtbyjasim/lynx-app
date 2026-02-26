import { MemoryRouter, Route, Routes } from "react-router";
import Home from "../screens/home/HomeScreen";
import Splash from "../screens/splash/SplashScreen";

export default function AppRouter() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
}
