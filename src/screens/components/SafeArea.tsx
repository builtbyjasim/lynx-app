import { isAndroid } from "../../utils/platform/isAndroid";

export default function SafeArea({ children }: any) {
  return (
    <view
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        paddingTop: "env(safe-area-inset-top)",
        //  paddingTop: isAndroid() ? "32px" : "env(safe-area-inset-top)",
        // paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        background: "white",
      }}
    >
      {children}
    </view>
  );
}
