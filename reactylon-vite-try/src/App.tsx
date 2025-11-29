import { Engine } from "reactylon/web";
import "./App.css";
import { Scene } from "reactylon";
import { Content } from "./components/Content";

function App() {
  return (
    <Engine engineOptions={{ antialias: true }}>
      <Scene
        onSceneReady={(scene) => {
          scene.createDefaultCameraOrLight(true, true, true);
        }}
      >
        <Content />
      </Scene>
    </Engine>
  );
}

export default App;
