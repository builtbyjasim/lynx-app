import { isAndroid } from "../../utils/platform/isAndroid";
import { SafeArea } from "../components/SafeArea";
import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <SafeArea>
      <view className="HomeScreen">
        <text>Home </text>
        <text>{JSON.stringify(SystemInfo.platform)}</text>
        <text>{JSON.stringify(SystemInfo)}</text>
        <view style={{ flex: 1, background: "red" }} />
      </view>
    </SafeArea>
  );
}
