"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 240 * 2,
      height: 240 * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.02, 0.36, 1], // Blue color similar to #045CFF
      markerColor: [0.02, 0.36, 1],
      glowColor: [0.5, 0.7, 1],
      markers: [],
      onRender: (state) => {
        // Rotate the globe automatically
        phi += 0.005;
        state.phi = phi;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: 240,
        height: 240,
        maxWidth: "100%",
        aspectRatio: 1,
        display: "block",
      }}
    />
  );
}
