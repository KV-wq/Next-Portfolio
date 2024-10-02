"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle2() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="h-[80vh]"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 90,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#16592D",
          },
          links: {
            color: "#16592D",
            enable: true,
            distance: 200,
            width: 3,
            opacity: 0.6,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            direction: "none",
            outModes: {
              default: "destroy",
            },
            random: true,
            straight: true,
            speed: 1.2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 90,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 5, max: 15 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
