import { Outlet, useNavigate, useLocation } from "react-router";
import { isAndroid } from "../utils/platform/isAndroid";

export default function TabLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const activePath = location.pathname;

  const isActive = (path: string) => activePath === path;

  return (
    <view style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <view style={{ flex: 1 }}>
        <Outlet />
      </view>

      <view
        style={{
          height: isAndroid() ? "50px" : "60px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#ffffff62",
          position: "absolute",
          bottom: isAndroid() ? "44px" : "0px",
          right: isAndroid() ? "8px" : "0px",
          left: isAndroid() ? "8px" : "0px",
          borderRadius: isAndroid() ? "16px" : "0px",
        }}
      >
        <text
          bindtap={() => navigate("/home")}
          style={{
            padding: "8px 16px",
            background: isActive("/home") ? "#000" : "#00000005",
            color: isActive("/home") ? "#fff" : "#000",
            borderRadius: "16px",
            fontSize: "12px",
          }}
        >
          Home
        </text>

        <text
          bindtap={() => navigate("/profile")}
          style={{
            padding: "8px 16px",
            background: isActive("/profile") ? "#000" : "#00000005",
            color: isActive("/profile") ? "#fff" : "#000",
            borderRadius: "16px",
            fontSize: "12px",
          }}
        >
          Profile
        </text>
      </view>
    </view>
  );
}
