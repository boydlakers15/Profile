// LandingPage.js

import React, {  forwardRef, useState, Suspense, useMemo , useRef, useEffect } from "react";
import "./LandingPage.css";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useVideoTexture, Grid, Center, AccumulativeShadows, RandomizedLight, Environment, useGLTF, CameraControls } from '@react-three/drei'
import { ExperienceNew } from './Exsperience-new';
import { UISkills } from "./SkillsUI.js";
import { Canvas } from '@react-three/fiber';
import Navbar from './Navbar.js';
import FooterPage from './FooterPage.js';
import { Room } from "./Room.js";
import vid1 from './IMG/video.001.mp4'
import {
  MDBCol,
  MDBContainer,
  MDBRow,

} from 'mdb-react-ui-kit';
import * as THREE from 'three'
import { useControls, button } from 'leva'
import CurvedPlane from './CurvedPlane'
import { suspend } from 'suspend-react'





const About = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  };
  return (
    <div className="landing-page">
        <MDBRow className="new">
        <MDBCol className='fa-lg2'>
      
            <a className={`menu ${isSidebarOpen ? 'sidebar-open' : ''}`} href='#' onClick={toggleSidebar} >
              <button className={`btn menu-button ${isSidebarOpen ? 'raised' : ''}`} style={{ color: 'white', fontSize: '2rem', padding: '10px 20px', border: '1px solid #ddd', textShadow: '2px 2px 4px #000' }}>
                <i className={`bi bi-house-down-fill ${isSidebarOpen ? '' : ''}`}></i> Menu
              </button>
            </a>
           
         
        </MDBCol>
       
      
        </MDBRow>
        <br />
       <hr />
       <MDBRow>
  {isSidebarOpen && (
    <MDBCol lg="2" className={`d-lg-block ${isSidebarOpen ? 'raised' : ''}`}>
      {/* Sidebar content */}
      <div>
        <br />
        <Navbar />
        
      </div>
    </MDBCol>
  )}
  </MDBRow>
      <Canvas shadows camera={{ position: [0, 0, 2], fov: 42 }}>
          <color attach="background" args={["#171720"]} />
          <Scene />
          <AccumulativeShadows frames={100} color="#9d4b4b" colorBlend={0.5} alphaTest={0.9} scale={20}>
        <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
      </AccumulativeShadows>
        <Suspense>
        <ExperienceNew />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      
             <UISkills />  
                 
      {/* Header */}
      <div className="header-container">
      
       
        
        <h3 className="header-text"></h3>
        
      </div>
    </div>
  );
};

function Scene() {
  
  const { url } = useControls({
    url: {
      value: vid1,
      options: { 'Custom Video': vid1 }
    }
    
  })
  

  return (
    <>
    
      <group >
        <Screen src={url} />
      </group>

   
    </>
  )
}

function Screen({ src }) {
  const [video, setVideo] = useState()

  const width = 130
  const height =60.55

  const z = 100
  const position=([-69.793, 52.406, 153.78])
  const rotation=([ 2.015, -4.71, 4.27])

  return (
    
      <CurvedPlane rotation={rotation}  width={width} height={height}  position={position}>
        <Suspense fallback={<meshStandardMaterial side={THREE.DoubleSide} wireframe />}>
          <VideoMaterial src={src} setVideo={setVideo} />
        </Suspense>
      </CurvedPlane>

  )
}

function VideoMaterial({ src, setVideo }) {
  const videoRef = useRef();

  const texture = useVideoTexture(src, { muted: true, start: true });

  useEffect(() => {
    setVideo?.(videoRef.current);
  }, [setVideo]);

  return (
    <meshBasicMaterial
      side={THREE.DoubleSide}
      map={texture}
      toneMapped={false}
      transparent
      opacity={0.9}
      
    />
  );
}






export default About;
