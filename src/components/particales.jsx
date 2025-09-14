import { useContext } from "react";
import { ThemeContext } from "./theme";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

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
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.1,
                    sync: false
                }
            }
        },
        detectRetina: true
    };

    return (
        <div
            style={{
                position: "absolute",
                inset: 0, // top:0, right:0, bottom:0, left:0
                zIndex: 0, // keep it behind content
                pointerEvents: "none"
            }}
        >
            <Particles
                id="tsparticles"
                options={options}
                init={async (engine) => {
                    await loadSlim(engine);
                }}
            />
        </div>
    );
}
