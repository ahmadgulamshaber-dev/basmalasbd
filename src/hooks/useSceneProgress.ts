"use client";

import { useEffect } from "react";
import { useBirthdayStore } from "@/lib/store";

/** Mount this once in each scene with the scene's index. */
export function useSceneProgress(sceneIndex: number) {
  const setCurrentScene = useBirthdayStore((s) => s.setCurrentScene);

  useEffect(() => {
    setCurrentScene(sceneIndex);
  }, [sceneIndex, setCurrentScene]);
}
