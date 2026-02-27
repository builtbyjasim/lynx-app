import "./SplashScreen.css";
import { useCallback, useEffect, useState } from "react";
import lynxLogo from "../../assets/lynx-logo.png";
import reactLynxLogo from "../../assets/react-logo.png";
import { useNavigate } from "react-router";

export default function SplashScreen() {
  const nav = useNavigate();

  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      nav("/home", {replace: true});
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const onTap = useCallback(() => {
    "background only";
    setAlterLogo((prevAlterLogo) => !prevAlterLogo);
  }, []);

  return (
    <view className="SplashScreen">
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={lynxLogo} className="Logo--lynx" />
            ) : (
              <image src={reactLynxLogo} className="Logo--react" />
            )}
          </view>
          <text className="Title">Lynx App</text>
        </view>
      </view>
    </view>
  );
}
