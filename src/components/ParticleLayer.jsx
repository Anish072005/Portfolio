"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleLayer() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: "#94a3b8" }, // Aesthetic Slate
          links: {
            enable: true,
            distance: 150,
            color: "#94a3b8",
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: { min: 0.1, max: 0.4 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
          },
        },
        background: { color: "transparent" },
      }}
      className="absolute inset-0"
    />
  );
}