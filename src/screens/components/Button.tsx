export function Button({ title, onPress }: any) {
  return (
    <view
      bindtap={onPress}
      style={{
        background: "#000",
        padding: "8px 20px",
        borderRadius: "8px",
        alignItems: "center",
      }}
    >
      <text style={{ color: "#fff", fontSize: "14px" }}>
        {title}
      </text>
    </view>
  );
}