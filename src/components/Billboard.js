/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Billboard.glb -o src/components/Billboard.js -k -K -r public 
*/


import React, {useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useNavigate } from 'react-router-dom';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/Billboard.glb')
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleEnterButtonClick = () => {
    // Navigate to the profile page when the model is clicked
    navigate('/Home');
  };
  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    handleEnterButtonClick()
  };

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Billboard_2" position={[-7.24, 0, -6.443]} rotation={[0, 0.594, 0]} scale={0.062}>
          <mesh name="Billboard_2_1002" geometry={nodes.Billboard_2_1002.geometry} material={materials['lambert3SG.002']} />
          <mesh name="Billboard_2_1002_1" geometry={nodes.Billboard_2_1002_1.geometry} material={materials['Material.006']} />
          <mesh name="Billboard_2_1002_2" geometry={nodes.Billboard_2_1002_2.geometry} material={materials['Material.001']} />
          <mesh name="Billboard_2_1002_3" geometry={nodes.Billboard_2_1002_3.geometry} material={materials['Material.002']} />
          <mesh name="Billboard_2_1002_4" geometry={nodes.Billboard_2_1002_4.geometry} material={materials['Material.004']} />
          <mesh name="Billboard_2_1002_5" geometry={nodes.Billboard_2_1002_5.geometry} material={materials['Material.005']} />
          <mesh name="Billboard_2_1002_6" geometry={nodes.Billboard_2_1002_6.geometry} material={materials['Material.003']} />
          <mesh name="Billboard_2_1002_7" geometry={nodes.Billboard_2_1002_7.geometry} material={materials['Material.007']} />
        </group>
        <group name="Text" position={[66.964, 0, 59.032]} rotation={[Math.PI / 2, 0, -2.436]} scale={22.71}>
          <mesh name="Text_1" geometry={nodes.Text_1.geometry} material={materials['Material.008']} />
          <mesh name="Text_2" geometry={nodes.Text_2.geometry} material={materials['Material.009']} />
        </group>
        <group name="Text001" position={[-6.76, 41.668, -14.009]} rotation={[1.57, -0.002, -1.903]} 
            scale={isHovered ? [2.525 * 1.2, 3.883 * 1.2, 2.461 * 1.2] : [2.525, 3.883, 2.461]}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClick}
        >
          <mesh name="Text002" geometry={nodes.Text002.geometry} material={materials['Material.010']} />
          <mesh name="Text002_1" geometry={nodes.Text002_1.geometry} material={materials['Material.011']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Billboard.glb')
