import { useNavigate } from "react-router";
import SafeArea from "../components/SafeArea";
import "./HelpAndSupport.css";

export default function HelpAndSupport() {
  const navigate = useNavigate();

  return (
    <SafeArea>
      <view className="HelpAndSupport">
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

        <text>HelpAndSupport</text>
      </view>
    </SafeArea>
  );
}
