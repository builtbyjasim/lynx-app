import "./App.css";
import Router from "./navigation/AppRouter";

export function App(props: { onRender?: () => void }) {
  return (
    <view className="App">
      <Router />
    </view>
  );
}
