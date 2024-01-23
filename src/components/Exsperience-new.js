import {
    CameraControls,
    Environment,
    MeshReflectorMaterial,
    RenderTexture,
    Text,
    useFont,
  } from "@react-three/drei";
  import { useFrame } from "@react-three/fiber";
  import { useAtom } from "jotai";
  import { useEffect, useRef } from "react";
  import { Color } from "three";
  import { degToRad, lerp } from "three/src/math/MathUtils";
  import { Room } from "./Room.js";
  import { currentPageAtom } from "./SkillsUI.js";
  
  import {UI} from './UI.js'

  const bloomColor = new Color("#fff");
  bloomColor.multiplyScalar(1.5);
  
  export const ExperienceNew = () => {
    const controls = useRef();
    const meshFitCameraHome = useRef();
    const meshFitCameraSkills = useRef();
    const textMaterial = useRef();
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  
    useFrame((_, delta) => {
      textMaterial.current.opacity = lerp(
        textMaterial.current.opacity,
        currentPage === "home" || currentPage === "intro" ? 1 : 0,
        delta * 1.5
      );
    });
  
    const intro = async () => {
      controls.current.dolly(-62);
      controls.current.smoothTime = 1.6;
      setTimeout(() => {
        setCurrentPage("home");
      }, 100);
      fitCamera();
    };
  
    const fitCamera = async () => {
      if (currentPage === "skills") {
        controls.current.smoothTime = 1.9;
        controls.current.fitToBox(meshFitCameraSkills.current, true);
      } else {
        controls.current.smoothTime = 1.6;
        controls.current.fitToBox(meshFitCameraHome.current, true);
      }
    };
  
    useEffect(() => {
      intro();
    }, []);
  
    useEffect(() => {
      fitCamera();
      window.addEventListener("resize", fitCamera);
      return () => window.removeEventListener("resize", fitCamera);
    }, [currentPage]);
  
    return (
      <>
        <CameraControls ref={controls} />
        <mesh ref={meshFitCameraHome} position={[30.5, 40.5, 40]} visible={false}>
          <boxGeometry args={[190.9, 110, 190]} />
          <meshBasicMaterial color="orange" transparent opacity={0.9} />
        </mesh>
      
          <meshBasicMaterial
            color={bloomColor}
            toneMapped={true}
            ref={textMaterial}
          >
            <RenderTexture attach={"map"}>
              <color attach="background" args={["#fff"]} />
              <Environment preset="sunset" />
              
                <Room
                  scale={1.2}
                  rotation-y={-degToRad(90.5)}
                  position-x={1.23} // Adjust the X position to move it to the right
                  position-y={0.61}
                  position-z={100.967}
                />
             
            </RenderTexture>
          </meshBasicMaterial>
      
  
       
        <group rotation-y={degToRad(-180)} position-x={0.7} position-y={-35} position-z={40.1}>
          <Room scale={8} html />
          <mesh ref={meshFitCameraSkills} position={[45, 120, 30]} visible={true}>
            <boxGeometry args={[30, 40, 40]} />
            <meshBasicMaterial color="red" transparent opacity={0.5} />
          </mesh>
        </group>

        
        <mesh position-y={-20} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[600, 600]} />
          <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={10}
            roughness={1}
            depthScale={1.1}
            opacity={0.5}
            transparent
            minDepthThreshold={0.2}
            maxDepthThreshold={1.4}
            color="#333"
            metalness={0.5}
          />
        </mesh>
        
        
        <Environment preset="sunset" />

      </>
      
    );
  };
  
  useFont.preload("fonts/Poppins-SemiBoldItalic.ttf");