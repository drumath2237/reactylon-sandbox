import { MeshBuilder, Vector3, } from "@babylonjs/core";
import { useEffect } from "react";
import { useScene } from "reactylon";

export function Content() {
  const scene = useScene()

  useEffect(() => {
    const box = MeshBuilder.CreateBox("box", { size: 0.2 })

    scene.registerBeforeRender(() => {
      box.rotate(Vector3.Up(), 0.01)
    })
  });

  return <></>
}
