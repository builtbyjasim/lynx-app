import { useNavigate } from "react-router";
import SafeArea from "../components/SafeArea";
import "./HomeScreen.css";

export default function HomeScreen() {
  const navigate = useNavigate();
  return (
    <SafeArea>
      <view
        className="HomeScreen"
        // style={{ marginTop: "env(safe-area-inset-top)" }}
      >
        <text>Home </text>
      </view>
    </SafeArea>
  );
}
