import { useNavigate } from "react-router";
import "./SettingScreen.css";
import SafeArea from "../components/SafeArea";
import { Button } from "../components/Button";

export default function SettingScreen() {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <view className="SettingScreen">
        <text
          bindtap={() => navigate(-1)}
          style={{
            padding: "12px",
            fontSize: "14px",
            color: "#007aff",
          }}
        >
          ← Go Back
        </text>

        <view
          style={{
            margin: "12px 8px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Button title={"Profile"} onPress={()=> navigate('/profile')} />
          <Button title={"Help and Support"} />

          <text
            style={{
              fontSize: "14px",
              fontWeight: "600",
              padding: "8px",
              textAlign: "center",
              color: "#ff0000",
              alignSelf: "center",
            }}
          >
            Sign out
          </text>
        </view>
      </view>
    </SafeArea>
  );
}
