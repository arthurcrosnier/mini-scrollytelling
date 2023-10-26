import React, { useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Model({ setIsModelLoaded, ...props }) {
  const { nodes, materials } = useGLTF("/src/assets/hegra/scene.gltf");
  const texture0 = useTexture(
    "/src/assets/hegra/textures/Model_0_baseColor.jpeg"
  );
  const texture1 = useTexture(
    "/src/assets/hegra/textures/Model_1_baseColor.jpeg"
  );
  const texture2 = useTexture(
    "/src/assets/hegra/textures/Model_2_baseColor.jpeg"
  );
  const texture3 = useTexture(
    "/src/assets/hegra/textures/Model_3_baseColor.jpeg"
  );
  const texture4 = useTexture(
    "/src/assets/hegra/textures/Model_4_baseColor.jpeg"
  );
  const texture5 = useTexture(
    "/src/assets/hegra/textures/Model_5_baseColor.jpeg"
  );
  const texture6 = useTexture(
    "/src/assets/hegra/textures/Model_6_baseColor.jpeg"
  );
  const texture7 = useTexture(
    "/src/assets/hegra/textures/Model_7_baseColor.jpeg"
  );
  const texture8 = useTexture(
    "/src/assets/hegra/textures/Model_8_baseColor.jpeg"
  );
  const texture9 = useTexture(
    "/src/assets/hegra/textures/Model_9_baseColor.jpeg"
  );

  useEffect(() => {
    if (nodes && materials) {
      setIsModelLoaded(true);
      console.log("model loaded");
    }
  }, [nodes, materials, setIsModelLoaded]);

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Model_0}>
          <meshPhongMaterial map={texture0} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_3.geometry} material={materials.Model_1}>
          <meshPhongMaterial map={texture1} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Model_2}>
          <meshPhongMaterial map={texture2} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_5.geometry} material={materials.Model_3}>
          <meshPhongMaterial map={texture3} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_6.geometry} material={materials.Model_4}>
          <meshPhongMaterial map={texture4} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_7.geometry} material={materials.Model_5}>
          <meshPhongMaterial map={texture5} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_8.geometry} material={materials.Model_6}>
          <meshPhongMaterial map={texture6} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_9.geometry} material={materials.Model_7}>
          <meshPhongMaterial map={texture7} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_10.geometry} material={materials.Model_8}>
          <meshPhongMaterial map={texture8} map-flipY={false} />
        </mesh>
        <mesh geometry={nodes.Object_11.geometry} material={materials.Model_9}>
          <meshPhongMaterial map={texture9} map-flipY={false} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/src/assets/hegra/scene.gltf");

export default Model;
