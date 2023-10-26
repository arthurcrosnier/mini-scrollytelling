import React, { useState, createContext, useContext, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import Scene from "./partials/Scene";

const CameraContext = createContext();

function CameraBounds() {
  const { setCameraPosition } = useContext(CameraContext);

  const bounds = {
    xMin: -150,
    xMax: 150,
    yMin: 2,
    yMax: 150,
    zMin: -150,
    zMax: 150,
  };

  useFrame((state) => {
    const camera = state.camera;
    if (camera.position.x < bounds.xMin) camera.position.x = bounds.xMin;
    if (camera.position.x > bounds.xMax) camera.position.x = bounds.xMax;
    if (camera.position.y < bounds.yMin) camera.position.y = bounds.yMin;
    if (camera.position.y > bounds.yMax) camera.position.y = bounds.yMax;
    if (camera.position.z < bounds.zMin) camera.position.z = bounds.zMin;
    if (camera.position.z > bounds.zMax) camera.position.z = bounds.zMax;

    setCameraPosition({
      x: camera.position.x.toFixed(2),
      y: camera.position.y.toFixed(2),
      z: camera.position.z.toFixed(2),
    });
  });

  return null;
}

function Model3d({ isModelLoaded, setIsModelLoaded }) {
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 0 });
  return (
    <CameraContext.Provider value={{ setCameraPosition }}>
      <div className="App">
        <a href="#two" className="arrow up"></a>
        <a href="#four" className="arrow down"></a>

        <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
          X: {cameraPosition.x} | Y: {cameraPosition.y} | Z: {cameraPosition.z}
        </div>
        <Canvas
          style={{
            background: "black",
            width: "100vw",
            height: "100vh",
            keys: {
              LEFT_ARROW: 37,
              UP_ARROW: 38,
              RIGHT_ARROW: 39,
              BOTTOM_ARROW: 40,
            },
            keyPanSpeed: 10,
            //hidden or visible if isModelLoaded is false
            visibility: isModelLoaded ? "visible" : "hidden",
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 100, 90]} />
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[0, 50, 0]} // positionnée au-dessus du plan
            //target={[0, 0, 0]} // pointe vers le centre du plan
            intensity={1}
          />
          <OrbitControls minDistance={0.3} maxDistance={300} enablePan={true} />
          <CameraBounds />
          <Stage>
            <Scene setIsModelLoaded={setIsModelLoaded} />
          </Stage>
        </Canvas>
      </div>
    </CameraContext.Provider>
  );
}

export default Model3d;
