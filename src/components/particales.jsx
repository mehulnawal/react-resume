import { useContext } from "react";
import Particles from "@tsparticles/react";
import { ThemeContext } from "./theme";
import { loadSlim } from "@tsparticles/slim"; // slim version = smaller bundle

export default function ParticleBackground() {
    const { theme } = useContext(ThemeContext);

    const particleColor = theme === "dark" ? "#ffffff" : "#000000";

    const options = {
        background: { color: { value: "transparent" } },
        particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: particleColor },
            links: { enable: false },
            move: { enable: true, speed: 0.6, outModes: { default: "bounce" } },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 3 } },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                }
            }
        },
        detectRetina: true
    };

    return (
        <Particles
            id="tsparticles"
            options={options}
            init={async (engine) => {
                await loadSlim(engine); // load slim bundle
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none"
            }}
        />
    );
}
