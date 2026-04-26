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
  device: "mobile" | "desktop";
};

const screens: Screen[] = [
  { id: "bosque-mobile", label: "Bosque · Móvil", component: BosqueProfundo, device: "mobile" },
  { id: "bosque-desktop", label: "Bosque · Desktop", component: BosqueProfundoDesktop, device: "desktop" },
  { id: "mapa-mobile", label: "Mapa · Móvil", component: MapaVivo, device: "mobile" },
  { id: "mapa-desktop", label: "Mapa · Desktop", component: MapaVivoDesktop, device: "desktop" },
  { id: "verde-mobile", label: "Verde · Móvil", component: VerdeVivo, device: "mobile" },
];

export default function App() {
  const [active, setActive] = useState("bosque-mobile");
  const current = screens.find((s) => s.id === active) ?? screens[0];
  const Component = current.component;
  const isMobile = current.device === "mobile";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        minHeight: "-webkit-fill-available",
        maxHeight: "100dvh",
        overflow: "hidden",
        background: "hsl(var(--background))",
      }}
    >
      {/* Nav bar */}
      <nav
        aria-label="Pantallas"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          padding: "6px 10px",
          background: "hsl(var(--card))",
          borderBottom: "1px solid hsl(var(--border))",
          overflowX: "auto",
          flexShrink: 0,
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {screens.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              padding: "5px 12px",
              borderRadius: 8,
              border: active === s.id ? "1px solid hsl(var(--primary) / 0.4)" : "1px solid transparent",
              cursor: "pointer",
              fontSize: 11,
              fontFamily: "'Inter', sans-serif",
              fontWeight: active === s.id ? 600 : 400,
              background: active === s.id
                ? "hsl(var(--primary) / 0.15)"
                : "transparent",
              color: active === s.id
                ? "hsl(var(--primary))"
                : "hsl(var(--muted-foreground))",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
              flexShrink: 0,
            }}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Screen content */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          minHeight: 0,
          display: "flex",
          justifyContent: isMobile ? "center" : "stretch",
          alignItems: "stretch",
          background: isMobile ? "hsl(var(--muted))" : "hsl(var(--background))",
        }}
      >
        {isMobile ? (
          /* En desktop, centra el mockup móvil con ancho fijo */
          <div
            style={{
              width: "100%",
              maxWidth: 420,
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Component />
          </div>
        ) : (
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <Component />
          </div>
        )}
      </div>
    </div>
  );
}
