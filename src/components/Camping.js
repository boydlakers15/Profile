/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/Notebook.glb -o src/components/Camping.js -k -K -r public 
*/

import React, { useRef } from 'react'
import { Html, useGLTF } from "@react-three/drei";
import { useAtom } from "jotai";
import { degToRad } from "three/src/math/MathUtils";
import { currentPageAtom } from "./UI";
const OverlayItem = ({
    className = "",
    title,
    description,
    price,
    bgColor,
    ...props
  }) => {
    const [currentPage] = useAtom(currentPageAtom);
    return (
      <Html
        transform
        distanceFactor={1.9}
        center
        className={`w-48 rounded-md overflow-hidden ${
          currentPage === "store" ? "" : "opacity-0"
        } transition-opacity duration-1000 ${className}`}
        {...props}
      >
        <div className="bg-white bg-opacity-50 backdrop-blur-lg text-xs p-2 w-full">
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <Link to="/Profile" className="open-button btn1 ">
          OPEN
        </Link>
      </Html>
    );
  };

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/Notebook.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group name="Notebook_Cube041">
          <mesh name="Notebook_Cube041_1" geometry={nodes.Notebook_Cube041_1.geometry} material={materials.FFEB3B} />
          <mesh name="Notebook_Cube041_1_1" geometry={nodes.Notebook_Cube041_1_1.geometry} material={materials['795548']} />
          <mesh name="Notebook_Cube041_1_2" geometry={nodes.Notebook_Cube041_1_2.geometry} material={materials.F44336} />
          <group >
          <mesh
            name="Notebook"
           
            
          />
          {Html && (
            <OverlayItem
              title={"Notebook"}
              description={"2 person tent, rest assured you'll be dry."}
              price={"129.99"}
              bgColor={"bg-yellow-500"}
              className={"transition delay-1000"}
            />
          )}
        </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Notebook.glb')