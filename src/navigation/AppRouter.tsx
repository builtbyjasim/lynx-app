import { MemoryRouter, Route, Routes } from "react-router";
import Home from "../screens/home/HomeScreen";
import Splash from "../screens/splash/SplashScreen";
import TabLayout from "./TabLayout";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SettingScreen from "../screens/setting/SettingScreen";

export default function AppRouter() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/profile" element={<ProfileScreen />} />

        {/* Bottom Tab Layout */}
        <Route element={<TabLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/setting" element={<SettingScreen />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
