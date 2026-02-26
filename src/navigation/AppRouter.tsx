import { MemoryRouter, Route, Routes } from "react-router";
import Home from "../screens/home/HomeScreen";
import Splash from "../screens/splash/SplashScreen";
import TabLayout from "./TabLayout";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SettingScreen from "../screens/setting/SettingScreen";
import HelpAndSupport from "../screens/helpAndSupport/HelpAndSupport";

export default function AppRouter() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/helpAndSupport" element={<HelpAndSupport />} />

        {/* Bottom Tab Layout */}
        <Route element={<TabLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/setting" element={<SettingScreen />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
