import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Room = () => {
  const { scene } = useGLTF('/models/Billboard.gltf', GLTFLoader);
  return <primitive object={scene} />;
};

export default Room;
