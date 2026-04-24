import { useState } from "react";
import { BosqueProfundo } from "./components/mockups/biodiverso-app/BosqueProfundo";
import { BosqueProfundoDesktop } from "./components/mockups/biodiverso-app/BosqueProfundoDesktop";
import { MapaVivo } from "./components/mockups/biodiverso-app/MapaVivo";
import { MapaVivoDesktop } from "./components/mockups/biodiverso-app/MapaVivoDesktop";
import { VerdeVivo } from "./components/mockups/biodiverso-app/VerdeVivo";

type Screen = {
  id: string;
  label: string;
  component: React.ComponentType;
};

const screens: Screen[] = [
  { id: "bosque-mobile", label: "Bosque Profundo · Móvil", component: BosqueProfundo },
  { id: "bosque-desktop", label: "Bosque Profundo · Desktop", component: BosqueProfundoDesktop },
  { id: "mapa-mobile", label: "Mapa Vivo · Móvil", component: MapaVivo },
  { id: "mapa-desktop", label: "Mapa Vivo · Desktop", component: MapaVivoDesktop },
  { id: "verde-mobile", label: "Verde Vivo · Móvil", component: VerdeVivo },
];

export default function App() {
  const [active, setActive] = useState("bosque-mobile");
  const current = screens.find((s) => s.id === active) ?? screens[0];
  const Component = current.component;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#0a0a0a" }}>
      {/* Nav bar */}
      <div
        style={{
          display: "flex",
          gap: 4,
          padding: "8px 12px",
          background: "#111",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          overflowX: "auto",
          flexShrink: 0,
        }}
      >
        {screens.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "'Inter', sans-serif",
              fontWeight: active === s.id ? 600 : 400,
              background: active === s.id ? "rgba(168,230,193,0.15)" : "transparent",
              color: active === s.id ? "#a8e6c1" : "rgba(255,255,255,0.45)",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Screen content */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <Component />
      </div>
    </div>
  );
}
