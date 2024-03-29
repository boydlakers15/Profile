/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/room.glb -o src/components/Room.js -k -K -r public 
*/

import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations, Html ,  CameraControls,
  Environment,
  MeshReflectorMaterial,
  RenderTexture,
  Line 
 } from '@react-three/drei';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Profile from './Profile';
import './About.css';
import * as THREE from 'three'
import { UISkills } from './SkillsUI'; 
import PDFFile from "./IMG/Jared-Boyd.pdf";
import { degToRad , lerp } from "three/src/math/MathUtils";
import { currentPageAtom } from "./SkillsUI";
import { useAtom } from "jotai";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";
import InteractiveCircleResume from "./CircleResume.js";
import {Computer} from './Computer.js';

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);



export function Room(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/room.glb')
  const { actions, names } = useAnimations(animations, group)
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCert, setIsHoveredCert] = useState(false);
  const [isHoveredFace, setIsHoveredFace] = useState(false);
  const [isHoveredLink, setIsHoveredLink] = useState(false);
  const [isHoveredInsta, setIsHoveredInsta] = useState(false);
  const [isHoveredGit, setIsHoveredGit] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [popupWindow, setPopupWindow] = useState(null);
  const width = 10
  const height =60.55
  const [hidden, set] = useState()
  const position=([-0.05249 , 0, 0])
  const rotation=([ 0, 10.25, 0])

// Define the gradient colors
const gradientColors = [0x53B7ED, 0x71C9E8, 0xAAFC87, 0x96F3FA, 0x7BA1EA, 0x8477FD, 0xB6F8FF, 0x6DC7BF];

// Create a linear gradient texture
const gradientTexture = new THREE.TextureLoader().load(generateLinearGradientTexture(gradientColors));

// Create the material with the linear gradient texture
const hoveredMaterial = new THREE.MeshStandardMaterial({
  map: gradientTexture, // Use the gradient texture as the map
});
const hoveredMaterial1 = new THREE.MeshStandardMaterial({
  color: 0x645655, // Set the color to dark grey
});

const hoveredMaterial2 = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF, // Set the color to dark grey
});

const hoveredMaterial3 = new THREE.MeshStandardMaterial({
  color: 0x3b5998, // Set the color to dark grey
});

const hoveredMaterial4 = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF, // Set the color to dark grey
});

const hoveredMaterial5 = new THREE.MeshStandardMaterial({
  color: 0x3b5998, // Set the color to dark grey
});

const hoveredMaterial6 = new THREE.MeshStandardMaterial({
  color: 0xFFFFFF, // Set the color to dark grey
});

const hoveredMaterial7 = new THREE.MeshStandardMaterial({
  color: 0x3b5998, // Set the color to dark grey
});

// Function to generate a linear gradient texture
function generateLinearGradientTexture(colors) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set canvas size (width, height)
  canvas.width = 256;
  canvas.height = 1;

  // Create a linear gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

  // Add color stops
  colors.forEach((color, index) => {
    const hexColor = '#' + color.toString(16).padStart(6, '0');
    const stop = index / (colors.length - 1);
    gradient.addColorStop(stop, hexColor);
  });

  // Fill the canvas with the gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return canvas.toDataURL();
}

const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
const ExperienceNew = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraSkills = useRef();
  const meshFitCameraProfile = useRef();
  const meshFitCameraCert = useRef();
  const meshFitCameraResume = useRef();
  const textMaterial = useRef();
  const group = useRef();


  const intro = async () => {
    if (controls.current) {
      controls.current.dolly(162);
      controls.current.smoothTime = 1.6;
      setCurrentPage("home");
      fitCamera();
    }
  };
  

  const fitCamera = async () => {
    if (!controls.current) {
    
      return;
    }
  
    if (currentPage === "skills") {
      controls.current.smoothTime = 0.9;
      controls.current.fitToBox(meshFitCameraSkills.current, true);
    } else if (currentPage === "profile") {
      controls.current.smoothTime = 0.9;
      controls.current.fitToBox(meshFitCameraProfile.current, true);
    } else if (currentPage === "cert") {
      controls.current.smoothTime = 0.9;
      controls.current.fitToBox(meshFitCameraCert.current, true);
    } else if (currentPage === "resume") {
        controls.current.smoothTime = 0.9;
        controls.current.fitToBox(meshFitCameraResume.current, true);
    } else {
      controls.current.smoothTime = 0.6;
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
       
      </>
      
    );
  };
  

function InteractiveCircle({ onClick, rotation = [2, 1.6, 0] }) {
  
  const circleRadius = 2.0;
  const position = [-0.851, 0.614, 6.5];
  const updatedRotation = [Math.PI / 2, rotation[1], rotation[2]];
  const controls = useRef();
  const { meshFitCameraCert } = ExperienceNew({ controls });
  const moveCameraToCertPosition = () => {
    if (meshFitCameraCert.current && controls.current) {
     
      controls.current.smoothTime = 0.9;
      controls.current.fitToBox(meshFitCameraCert.current, true);
    }
  };

  const handleButtonClick = () => {
    moveCameraToCertPosition();

    if (onClick) {
      onClick();
    }
  };

  return (
    <mesh position={position} rotation={updatedRotation} onClick={handleButtonClick}>
      {/* Circle */}
      <circleGeometry args={[circleRadius, 32]} attach="geometry" />
      <meshBasicMaterial color={0x00f00} attach="material" transparent opacity={0.5} />

      {/* Number and Circle */}
      <Html transform distanceFactor={1.2} center className={`w-48 rounded-md overflow-hidden`}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <button
            style={{ fontSize: '862px', width: '100%', height: '100%' }}
            className={`hover:bg-opacity-50 transition-colors duration-500 px-10 py-2 font-bold text-white`}
            onClick={() => setCurrentPage("cert")}
          >
            1
          </button>
        </div>
        <div class="annotation selected" data-hotspot="4" style={{transform: 'none',  left: '292.265px' , top: '167.392px',  maxHeight: '294px'}}></div>
      </Html>
    </mesh>
  );
}

function InteractiveCircleProfile({ onClick, rotation = [0, 0, 0] }) {
  const circleRadius = 0.13;
  const position = [0.006, 0.35,-0.007];
  const updatedRotation = [rotation[0], rotation[1], rotation[2]]; // Keep the provided rotation

  const controls = useRef();
  const { meshFitCameraProfile } = ExperienceNew({ controls });

  const moveCameraToProfilePosition = () => {
    if (meshFitCameraProfile.current && controls.current) {
    
      controls.current.smoothTime = 0.9;
      controls.current.fitToBox(meshFitCameraProfile.current, true);
    }
  };

  const handleButtonClick = () => {
    moveCameraToProfilePosition();

    if (onClick) {
      onClick();
    }
  };

  return (
    <mesh position={position} rotation={updatedRotation} onClick={handleButtonClick}>
      {/* Circle */}
      <circleGeometry args={[circleRadius, 32]} attach="geometry" />
      <meshBasicMaterial color={0x00f00} attach="material" transparent opacity={0.5} />

      {/* Number and Circle */}
      <Html transform distanceFactor={1.2} center className={`w-48 rounded-md overflow-hidden`}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <button
            style={{ fontSize: '62px', width: '100%', height: '100%' }}
            className={`hover:bg-opacity-50 transition-colors duration-500 px-10 py-2 font-bold text-white`}
            onClick={() => setCurrentPage("profile")}
          >
            2
          </button>
        </div>
      </Html>
    </mesh>
  );
}




function ScreenComputer({  }) {
  const [hidden, set] = useState()
  const position=([-0.05249 , 0, 0])

  return (
    
   
    <mesh  name="Object_290" geometry={nodes.Object_290.geometry} material={new THREE.MeshBasicMaterial({ side: THREE.FrontSide })}>
      {/* Drei's HTML component can "hide behind" canvas geometry */}
        <Html
          material={new THREE.MeshBasicMaterial({ side: THREE.BackSide })}
          className="content"
          position={position}
          scale={0.04}
          transform
          occlude
          onOcclude={set}
          distanceFactor={5} // Adjust this value based on your needs
          style={{
            transition: "0.1s",
            opacity: hidden ? 0 : 2,
            transform: `scale(${hidden ? 0 : 1})`,
          }}
        >
          
            <Profile />
            <UISkills />
        
        </Html>
    </mesh>
   

  )
}

  
 

  const handlePointerOverCert = () => {
    setIsHoveredCert(true);
  };

  const handlePointerOutCert = () => {
    setIsHoveredCert(false);
  };

  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  const handlePointerOverFace = () => {
    setIsHoveredFace(true);
  };

  const handlePointerOverInsta = () => {
    setIsHoveredInsta(true);
  };

  const handlePointerOverLink = () => {
    setIsHoveredLink(true);
  };

  const handlePointerOverGit = () => {
    setIsHoveredGit(true);
  };

  const handlePointerOutFace = () => {
    setIsHoveredFace(false);
  };

  const handlePointerOutInsta = () => {
    setIsHoveredInsta(false);
  };

  const handlePointerOutLink = () => {
    setIsHoveredLink(false);
  };

  const handlePointerOutGit = () => {
    setIsHoveredGit(false);
  };

 

  const handleClickPop = () => {
    setIsClicked(!isClicked);

    // Open a new popup window with the desired PDF link
    const newPopupWindow = window.open(PDFFile, 'ResumePopup', 'width=800,height=600');
    
    // Set the reference to the opened window in the state
    setPopupWindow(newPopupWindow);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);

    // Open a new popup window with the desired website URL
    const websiteUrl = "https://github.com/boydlakers15/certificates-jared";
    const newPopupWindow = window.open(websiteUrl, 'WebsitePopup', 'width=800,height=600');

    // Set the reference to the opened window in the state
    setPopupWindow(newPopupWindow);
  };

  const openFacebookLinkInPopup = (url) => {
    const width = 1000;
    const height = 600;

    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      url,
      'Facebook Popup',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Room" rotation={[-Math.PI / 2, 0, 0]}>
        
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Bar" position={[10.979, 17.258, -3.708]} rotation={[Math.PI / 2, 0, 0]} scale={[2.136, 1.493, 2.136]}>
                <mesh name="Object_303" geometry={nodes.Object_303.geometry} material={materials['Screen.002']} />
              </group>
              <group name="ChairBack" position={[-7.594, 5.711, 1.186]} rotation={[0, -0.284, 0]} scale={2.101}>
                <mesh name="Object_275" geometry={nodes.Object_275.geometry} material={materials['Screen.002']} position={[2.522, 0, -0.735]} />
              </group>
              <group name="ChairBase" position={[-5.541, 2.065, 2.246]} rotation={[0, -0.284, 0]} scale={[1.174, 0.569, 1.174]}>
                <mesh name="Object_285" geometry={nodes.Object_285.geometry} material={materials['Screen.002']} position={[4.45, 0, -1.297]} />
              </group>
              <group name="ChairHandle_Left" position={[-3.132, 5.737, 2.499]} rotation={[-Math.PI, 0.284, 0]} scale={-2.101}>
                <mesh name="Object_281" geometry={nodes.Object_281.geometry} material={materials['Screen.002']} position={[-2.522, 0, -0.735]} />
              </group>
              <group name="ChairHandle_Right" position={[-7.655, 5.742, 1.181]} rotation={[0, -0.284, 0]} scale={2.101}>
                <mesh name="Object_279" geometry={nodes.Object_279.geometry} material={materials['Screen.002']} position={[2.522, 0, -0.735]} />
              </group>
              <group name="ChairWheels" position={[-5.541, 1.095, 2.246]} rotation={[0, -0.284, 0]} scale={[1.527, 0.512, 1.527]}>
                <mesh name="Object_283" geometry={nodes.Object_283.geometry} material={materials['Screen.002']} position={[3.421, 0, -0.997]} />
              </group>
              <group name="Desk" position={[-6.015, 5.573, 8.309]}>
                <group name="Object_8" position={[3.81, 0, 0]}>
                  <mesh name="Object_2_1" geometry={nodes.Object_2_1.geometry} material={materials['Material.016']} />
                  <mesh name="Object_2_2" geometry={nodes.Object_2_2.geometry} material={materials['Material.026']} />
                </group>
              </group>
              <group name="DoorHandle" position={[-17.042, 7.693, 15.735]} scale={0.766}>
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.material_0} />
              </group>
              <group name="Floor">
                <mesh name="Object_293" geometry={nodes.Object_293.geometry} material={materials['Material.031']} />
              </group>
              <group name="FrontDoor" position={[-16.421, 6.831, 18.312]} rotation={[0, -1.571, 0]} scale={3.941}>
                <mesh name="Object_301" geometry={nodes.Object_301.geometry} material={materials['Material.016']} />
              </group>
              <group name="Monitor_1_126" position={[-5.014, 8.375, 9.088]} rotation={[Math.PI, -0.175, Math.PI]} scale={9.341}>
                <mesh name="Object_287" geometry={nodes.Object_287.geometry} material={materials['Material.023']} position={[-0.655, 0, -0.1]} rotation={[0, 0.608, 0]} />
                <mesh name="Object_288" geometry={nodes.Object_288.geometry} material={materials['Screen.002']} position={[-0.655, 0, -0.1]} rotation={[0, 0.608, 0]} />
              </group>
              <group name="Monitor_2_127" position={[-10.629, 8.375, 9.101]} rotation={[-Math.PI, 0.175, -Math.PI]} scale={9.341}>
           

                <mesh name="Object_290" geometry={nodes.Object_290.geometry} material={materials['Material.024']} position={[-0.626, 0, 0.047]} rotation={[0, 0.231, 0]} >
                  <ScreenComputer />
                  <InteractiveCircleProfile />
                  <Computer position={[0.56, 0.085, 0.126]} scale={[0.025, 0.025, 0.025]} rotation={[0, -1.62, 0]}/>
                </mesh>
                <mesh name="Object_291" geometry={nodes.Object_291.geometry} material={materials['Screen.002']} position={[-0.626, 0, 0.047]} rotation={[0, 0.209, 0]} />
              </group>
              <group name="Mouse_Pad_119" position={[-7.775, 6.012, 7.194]}>
                <mesh name="Object_273" geometry={nodes.Object_273.geometry} material={materials['Material.017']} position={[4.433, 0, 0]} />
              </group>
              <group name="Panel" position={[10.178, 1.578, 0.642]}>
                <mesh name="Object_299" geometry={nodes.Object_299.geometry} material={materials['Material.001']} />
              </group>
              <group name="SeatPad" position={[-5.556, 4.537, 2.392]} rotation={[0, -0.284, 0]} scale={[2.043, 2.143, 2.143]}>
                <mesh name="Object_277" geometry={nodes.Object_277.geometry} material={materials.Leather_blue} position={[2.591, 0, -0.72]} />
              </group>
              <group name="Shade_Left" position={[10.428, 12.677, 1.05]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1.817, 6.578, 1.799]}>
                <mesh name="Object_305" geometry={nodes.Object_305.geometry} material={materials.Leather_blue} />
              </group>
              <group name="Shade_Right" position={[10.47, 11.902, -7.294]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[1.83, 4.37, 1.83]}>
                <mesh name="Object_307" geometry={nodes.Object_307.geometry} material={materials.Leather_blue} />
              </group>
              <group name="Wall_Door" position={[-16.286, 12.721, 17.234]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                <mesh name="Object_297" geometry={nodes.Object_297.geometry} material={materials.Nikon} />
              </group>
              <group name="Wall_Left" position={[11.695, 12.7, 0.745]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                <mesh name="Object_295" geometry={nodes.Object_295.geometry} material={materials.Nikon} />
              </group>
              <group name="WhiteWalls" position={[0, -4.453, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_313" geometry={nodes.Object_313.geometry} material={materials.Cert} position={[-0.009, 0.017, -0.001]} />
                <mesh name="Object_313001" geometry={nodes.Object_313001.geometry} material={materials.Cert} position={[-48.057, 5.754, 0.017]} rotation={[0, 0, -1.573]} />
              </group>
              <group name="Window_Left" position={[11.463, 11.163, -1.78]} scale={[0.833, 1, 1]}>
                <mesh name="Object_311" geometry={nodes.Object_311.geometry} material={materials.material_0} />
              </group>
              <group name="Wondow_Right" position={[11.251, 11.163, -1.78]} scale={[0.833, 1, 1]}>
                <mesh name="Object_309" geometry={nodes.Object_309.geometry} material={materials.material_0} />
              </group>
              <group name="Text001" position={[1.942, 12.556, 11.052]} rotation={[1.515, 0, -3.139]} scale={[1.146, 13.875, 1.538]}>
                <mesh name="Text001_1" geometry={nodes.Text001_1.geometry} material={materials['Material.014']} />
                <mesh name="Text001_2" geometry={nodes.Text001_2.geometry} material={materials['Material.015']} />
              </group>
            </group>
          </group>
          <group name="Text" position={[3.051, -10.921, 13.787]} rotation={[-Math.PI, 0, -Math.PI]} scale={[3.707, 11.226, 1.966]}>
            <mesh name="Text_1" geometry={nodes.Text_1.geometry} material={materials['Material.012']} />
            <mesh name="Text_2" geometry={nodes.Text_2.geometry} material={materials['Material.013']} />
          </group>
        </group>
        <group name="Keyboard" position={[-7.998, 6.065, 8.259]} rotation={[-Math.PI / 2, 0, 3.108]} scale={[0.073, 0.254, 0.124]}>
          <group name="keyboardFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="Plane004" rotation={[-Math.PI / 2, 0, 0]} scale={0.085}>
                <group name="Object_4" position={[7.95, 2.951, 2.749]}>
                  <mesh name="Plane004_13_-_Default_0" geometry={nodes['Plane004_13_-_Default_0'].geometry} material={materials['13_-_Default.001']} position={[-787.47, -47.942, 7.164]} rotation={[0, 0, 0.01]} scale={[1.614, 0.457, 0.566]} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Mouse" position={[-11.911, 6.063, 7.452]} rotation={[Math.PI / 2, 0, -1.945]} scale={0.001}>
          <group name="Ice_Clawfbx" position={[0.004, -0.004, 0]} rotation={[-Math.PI, 0, 0]}>
            <group name="RootNode001" position={[0.007, -0.001, -0.001]}>
              <group name="Plane001" position={[0.008, -0.001, -23.176]} rotation={[0, -0.031, Math.PI / 2]} scale={[159.237, 159.237, 170.519]}>
                <mesh name="Plane001_Material002_0" geometry={nodes.Plane001_Material002_0.geometry} material={materials['Material.027']} position={[-32.056, 13.199, 0.379]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Headphones" position={[0.905, 6.069, 6.581]} rotation={[0.012, -0.739, -1.563]} scale={[0.096, 0.064, 0.052]}>
          <group name="c36ef99cf19e49e38387bd4c9f825655fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode002">
              <group name="Headphones001" position={[0, 25.168, 0]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={100}>
                <group name="Headphones|Circle002_L_headphones_blend_e96bd0c6-6bc2-4e5a-a8f" position={[-0.073, 0.002, 0.051]}>
                  <mesh name="Headphones|Circle002_L_headphones_blend_e96bd0c6-6bc2-4e5a" geometry={nodes['Headphones|Circle002_L_headphones_blend_e96bd0c6-6bc2-4e5a'].geometry} material={materials['BlackPlastic.001']} />
                </group>
                <group name="Headphones|Circle005_L_headphones_blend_e96bd0c6-6bc2-4e5a-a8f" position={[-0.073, 0.002, 0.051]}>
                  <mesh name="Headphones|Circle005_L_headphones_blend_e96bd0c6-6bc2-4e5a" geometry={nodes['Headphones|Circle005_L_headphones_blend_e96bd0c6-6bc2-4e5a'].geometry} material={materials['BlackPlastic.001']} />
                  <mesh name="Headphones|Circle005_L_headphones_blend_e96bd0c6-6bc2-4e5a001" geometry={nodes['Headphones|Circle005_L_headphones_blend_e96bd0c6-6bc2-4e5a001'].geometry} material={materials['Material.029']} />
                  <mesh name="Headphones|Circle005_L_headphones_blend_e96bd0c6-6bc2-4e5a002" geometry={nodes['Headphones|Circle005_L_headphones_blend_e96bd0c6-6bc2-4e5a002'].geometry} material={materials['Material.030']} />
                </group>
                <group name="Headphones|Circle006_L_headphones_blend_e96bd0c6-6bc2-4e5a-a8f" position={[-0.078, 0.075, 0.052]}>
                  <mesh name="Headphones|Circle006_L_headphones_blend_e96bd0c6-6bc2-4e5a" geometry={nodes['Headphones|Circle006_L_headphones_blend_e96bd0c6-6bc2-4e5a'].geometry} material={materials.BlackLeazer} />
                </group>
                <group name="Headphones|Circle007_L_headphones_blend_e96bd0c6-6bc2-4e5a-a8f" position={[0.014, -0.11, 0.033]}>
                  <mesh name="Headphones|Circle007_L_headphones_blend_e96bd0c6-6bc2-4e5a" geometry={nodes['Headphones|Circle007_L_headphones_blend_e96bd0c6-6bc2-4e5a'].geometry} material={materials['Metal.001']} />
                </group>
                <group name="Headphones|Circle018_L_headphones_blend_e96bd0c6-6bc2-4e5a-a8f" position={[-0.073, 0.002, 0.051]}>
                  <mesh name="Headphones|Circle018_L_headphones_blend_e96bd0c6-6bc2-4e5a" geometry={nodes['Headphones|Circle018_L_headphones_blend_e96bd0c6-6bc2-4e5a'].geometry} material={materials['BlackPlastic.001']} />
                </group>
                <group name="Headphones|Circle019_L_headphones_blend_e96bd0c6-6bc2-4e5a-a8f" position={[-0.073, 0.002, 0.051]}>
                  <mesh name="Headphones|Circle019_L_headphones_blend_e96bd0c6-6bc2-4e5a" geometry={nodes['Headphones|Circle019_L_headphones_blend_e96bd0c6-6bc2-4e5a'].geometry} material={materials['BlackPlastic.001']} />
                </group>
                <group name="Headphones|Circle048_L_headphones_blend_e96bd0c6-6bc2-4e5a-a8f" position={[-0.073, 0.002, 0.051]}>
                  <mesh name="Headphones|Circle048_L_headphones_blend_e96bd0c6-6bc2-4e5a" geometry={nodes['Headphones|Circle048_L_headphones_blend_e96bd0c6-6bc2-4e5a'].geometry} material={materials['Material.028']} />
                </group>
                <group name="Headphones|Circle049_L_headphones_blend_e96bd0c6-6bc2-4e5a-a8f" position={[-0.073, 0.002, 0.051]}>
                  <mesh name="Headphones|Circle049_L_headphones_blend_e96bd0c6-6bc2-4e5a" geometry={nodes['Headphones|Circle049_L_headphones_blend_e96bd0c6-6bc2-4e5a'].geometry} material={materials['Material.028']} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Couch" position={[-20.559, 0.447, -9.238]} rotation={[-Math.PI / 2, 0, 0.006]} scale={[0.069, 0.1, 0.121]}>
          <group name="4f114a690ffe4ddcb16bea7ad43f6beffbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode003">
              <group name="Frame_low1" position={[-39.931, 13.189, -719.901]} scale={5.707}>
                <mesh name="Frame_low1_Backing1_0" geometry={nodes.Frame_low1_Backing1_0.geometry} material={materials.Backing1} position={[-20.096, 2.803, 115.291]} />
                <mesh name="Frame_low1_Cushions1_0" geometry={nodes.Frame_low1_Cushions1_0.geometry} material={materials.Cushions1} position={[-17.563, 2.587, 121.819]} />
                <mesh name="Frame_low1_Frame1_0" geometry={nodes.Frame_low1_Frame1_0.geometry} material={materials.Frame1} position={[-18.068, 0.302, 129.027]} />
              </group>
              <group name="pPlane2" scale={[400.848, 400.849, 400.848]} />
            </group>
          </group>
        </group>
        <group name="Picture" position={[9.939, 7.048, 11.033]} rotation={[-Math.PI / 2, 0, 1.575]} scale={[7.299, 3.495, 4.65]}>
          <group name="emapale_enmarcateobjcleanermaterialmergergles">
           
            <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials['Material.032']} />
            <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Material.035']} />
          </group>
        </group>
        
        <group name="TV1" position={[8.923, 0.498, -14.227]} rotation={[-Math.PI / 2, 0, 1.572]} scale={[10.891, 31.376, 8.665]}>
          <group name="66ad50af0c92483395cf2b9aea3738b0fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode004">
              <group name="Camera" position={[0, 54, -300]} rotation={[0, -1.571, 0]} scale={100}>
                <group name="Object_4001" />
              </group>
              <group name="Table" position={[0, 15.287, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Table_Table_0" geometry={nodes.Table_Table_0.geometry} material={materials.Table} rotation={[Math.PI, 0, Math.PI]} scale={[-1, -0.198, -1]} />
              </group>
              <group name="TV" position={[0, 69.3, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="TV_TVFramework_0" geometry={nodes.TV_TVFramework_0.geometry} material={materials.TVFramework} />
                <mesh name="TV_TVScreen_0" geometry={nodes.TV_TVScreen_0.geometry} material={materials['Material.003']} position={[0.001, 0.26, 0]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model" position={[-8.981, 6.049, 9.486]} rotation={[-Math.PI / 2, 0, 1.026]} scale={0.515}>
          <group name="2cb675eff3214530bef1bb5d812ba1b9objcleanermaterialmergergle">
        
              <InteractiveCircleResume />
            <group name="Object_2002" position={[-0.251, 0.414, 0]} scale={0.823}>
              <mesh name="Object_0009" geometry={nodes.Object_0009.geometry} material={materials.initialShadingGroup} />
              <mesh name="Object_0009_1" geometry={nodes.Object_0009_1.geometry} material={materials['Material.025']} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" position={[-12.102, 5.793, 1.398]} rotation={[-Math.PI / 2, 0, -1.58]} scale={0.266}>
          <group name="4ce49cd2dd754c0ebd3c2fc714c4cc1eobjcleanermaterialmergergle" />
        </group>
        <group name="Sketchfab_model002" position={[-12.116, 5.794, 1.386]} rotation={[-Math.PI / 2, 0, -1.58]} scale={0.266}>
          <group name="4ce49cd2dd754c0ebd3c2fc714c4cc1eobjcleanermaterialmerger" />
        </group>
        <group name="Sketchfab_model003" position={[-12.093, 5.794, -2.583]} rotation={[-Math.PI / 2, 0, -1.58]} scale={0.266}>
          <group name="4ce49cd2dd754c0ebd3c2fc714c4cc1eobjcleanermaterialmerger001">
            <mesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials['alpha.002']} position={[14.684, 0.129, 1.739]} />
          </group>
        </group>
        <group name="Sketchfab_model004" position={[-11.898, 6.294, -0.9]} rotation={[-3.055, -1.512, 1.657]} scale={0.15}>
          <group name="earthobjcleanermaterialmergergles">
            <mesh name="Object_2003" geometry={nodes.Object_2003.geometry} material={materials['Material.037']} />
            <mesh name="Object_3001" geometry={nodes.Object_3001.geometry} material={materials.atmosphere} />
            <mesh name="Object_4002" geometry={nodes.Object_4002.geometry} material={materials.clouds} />
          </group>
        </group>
        <group name="Sketchfab_model005" position={[-6.511, 6.004, -0.584]} rotation={[-Math.PI / 2, 0, -1.633]} scale={0.921}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Curve012_0" position={[-0.055, 2.945, 6.336]} rotation={[Math.PI / 2, 0, 0]} scale={28.364}>
                <mesh name="Object_4003" geometry={nodes.Object_4003.geometry} material={materials.glossy_putih} position={[0.001, -0.017, 0.07]} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model006" position={[-11.898, 5.806, -0.9]} rotation={[-Math.PI / 2, 0, 3.074]} scale={0.245}>
          <group name="4ce49cd2dd754c0ebd3c2fc714c4cc1eobjcleanermaterialmerger002">
            <group name="Object_2004" />
          </group>
        </group>
        <group name="Resume" position={[9.08, 12.023, 11.005]} rotation={[-1.567, -0.001, -0.001]} scale={[-1.036, -0.901, -1.198]}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClickPop}
            >
          <mesh name="Text002_1" geometry={nodes.Text002_1.geometry} material={isHovered ? hoveredMaterial : materials['Material.004']} />
          <mesh name="Text002_2" geometry={nodes.Text002_2.geometry} material={isHovered ? hoveredMaterial1 : materials['Material.005']} />
         
        </group>
        <group name="Cert" position={[-7.82, 5.977, 9.404]} rotation={[-Math.PI / 2, 0, -0.558]} scale={-0.516}onPointerOver={handlePointerOverCert}
            onPointerOut={handlePointerOutCert}
            onClick={handleClick}>
          <mesh name="Text003" geometry={nodes.Text003.geometry}  material={isHoveredCert ? hoveredMaterial : materials['Material.021']} />
          <mesh name="Text003_1" geometry={nodes.Text003_1.geometry}  material={isHoveredCert ? hoveredMaterial1 : materials['Material.022']} />
        </group>
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.041']} position={[-12.122, 6.336, 3.01]} rotation={[-Math.PI, 1.556, -Math.PI]} scale={0.281} />
        <group name="Cube" position={[-11.633, 7.13, 3.011]} rotation={[-Math.PI, 1.556, -Math.PI]} scale={0.54}>
          <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry}  onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut} material={isHovered ? hoveredMaterial4 : materials['Material.042']} />
          <mesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={isHovered ? hoveredMaterial5 : materials['Material.043']} />
          <mesh name="Cube002_3" geometry={nodes.Cube002_3.geometry} material={materials['Material.044']} />
          <mesh name="Cube002_4" geometry={nodes.Cube002_4.geometry} material={materials['Material.045']} />
          <mesh name="Cube002_5" geometry={nodes.Cube002_5.geometry} material={materials['Material.046']} />
        </group>
        <mesh name="Text002" 
          onPointerOver={handlePointerOverFace}
          onPointerOut={handlePointerOutFace}
          geometry={nodes.Text002.geometry} 
          material={isHoveredFace ? hoveredMaterial3 : materials['Material.047']} 
          position={[-12.072, 6.852, 4.629]} 
          rotation={[Math.PI / 2, 0, -1.586]} 
          scale={1.083} 
          
         
          onClick={() => openFacebookLinkInPopup('https://www.facebook.com/jared.boyd.10' )} 
        />
         
        <group name="Cylinder" position={[-12.072, 6.267, 4.668]} rotation={[Math.PI / 2, 0, 1.565]} scale={0.512}>
          <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={materials['Material.048']} />
          <mesh name="Cylinder007_1" geometry={nodes.Cylinder007_1.geometry} material={materials['Material.049']} />
        </group>
        <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Material.050']} position={[-12.072, 6.014, 4.668]} scale={0.761} />
        <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.058']} position={[-12.093, 6.886, 1.32]} scale={0.869} />
        <group name="Cube002" position={[-12.093, 6.01, 1.32]} scale={0.761}>
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.059']} />
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials['Material.060']} />
        </group>
        <mesh name="Cone" geometry={nodes.Cone.geometry} material={materials['Material.061']} position={[-12.093, 6.097, 1.32]} rotation={[-Math.PI, 0, 0]} scale={0.266} />
        <group name="Sphere001" position={[-11.898, 6.901, -0.9]} rotation={[Math.PI, -1.512, Math.PI]} scale={0.921}>
          <mesh name="Sphere012" geometry={nodes.Sphere012.geometry} material={materials['Material.034']} />
          <mesh name="Sphere012_1" geometry={nodes.Sphere012_1.geometry} material={materials['Material.036']} />
        </group>
        <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.038']} position={[-11.898, 6.004, -0.9]} rotation={[Math.PI, -1.512, Math.PI]} scale={0.921} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/room.glb')