import { useNavigate } from "react-router";
import SafeArea from "../components/SafeArea";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <view className="ProfileScreen">
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

        <text>ProfileScreen</text>
      </view>
    </SafeArea>
  );
};

export default ProfileScreen;
