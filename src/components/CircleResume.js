import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { currentPageAtom } from "./SkillsUI";
import { useAtom } from "jotai";

const ExperienceNew = ({ controls }) => {
  const meshFitCameraCert = useRef();
  const { setCurrentPage, currentPage } = useAtom(currentPageAtom);

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

    if (currentPage === "cert") {
      controls.current.smoothTime = 0.9;
      controls.current.fitToBox(meshFitCameraCert.current, true);
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

  return <></>;
};

function InteractiveCircleResume({ onClick, rotation = [2, 1.6, 0] }) {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const controls = useRef();
  const controlsRef = useRef(controls); // Keep a ref to controls for ExperienceNew
  const meshFitCameraCert = useRef();
  
 

  const position = [-0.851, 0.614, 6.5];
  const updatedRotation = [Math.PI / 2, rotation[1], rotation[2]];

  const moveCameraToCertPosition = () => {
    if (meshFitCameraCert.current && controls.current) {
      controls.current.smoothTime = 0.9;
      controls.current.fitToBox(meshFitCameraCert.current, true);
    }
  };

  const handleButtonClick = () => {
    moveCameraToCertPosition();
    setCurrentPage("cert");
  };

  // Load GLB model
  const gltf = useLoader(GLTFLoader, "/models/Number1.glb");

  return (
    <group position={position} rotation={updatedRotation}>
      {/* Number GLB model */}
      <primitive object={gltf.scene} scale={[4.3, 4.3, 4.2]} onClick={handleButtonClick} />
    </group>
  );
}

export default InteractiveCircleResume;
