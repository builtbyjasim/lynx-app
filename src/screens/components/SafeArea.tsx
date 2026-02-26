import { isAndroid } from "../../utils/platform/isAndroid";

export default function SafeArea({ children }: any) {
  return (
    <view
      style={{
        height: "100%",
        paddingTop: isAndroid() ? "32px" : "env(safe-area-inset-top)",
        // paddingBottom: "env(safe-area-inset-bottom)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      {children}
    </view>
  );
}
