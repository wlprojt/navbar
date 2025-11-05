import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { ThreeElements } from '@react-three/fiber';

declare module 'meshline' {
  export const MeshLineGeometry: typeof MeshLineGeometry;
  export const MeshLineMaterial: typeof MeshLineMaterial;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ThreeElements['mesh'];
      meshLineMaterial: ThreeElements['mesh'];
    }
  }
}

export {};
