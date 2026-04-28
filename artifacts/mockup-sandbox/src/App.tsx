import { useState, useEffect } from "react";
import { BosqueProfundo } from "./components/mockups/biodiverso-app/BosqueProfundo";
import { BosqueProfundoDesktop } from "./components/mockups/biodiverso-app/BosqueProfundoDesktop";
import { MapaVivo } from "./components/mockups/biodiverso-app/MapaVivo";
import { MapaVivoDesktop } from "./components/mockups/biodiverso-app/MapaVivoDesktop";
import { VerdeVivo } from "./components/mockups/biodiverso-app/VerdeVivo";
import { ErrorBoundary } from "./components/ErrorBoundary";

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
  const [isLoading, setIsLoading] = useState(false);
  
  const current = screens.find((s) => s.id === active) ?? screens[0];
  const Component = current.component;
  const isMobile = current.device === "mobile";

  // Simular carga al cambiar de pantalla para una experiencia más fluida
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <ErrorBoundary name="App Global">
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
            zIndex: 50,
          }}
        >
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              disabled={isLoading}
              style={{
                padding: "5px 12px",
                borderRadius: 8,
                border: active === s.id ? "1px solid hsl(var(--primary) / 0.4)" : "1px solid transparent",
                cursor: isLoading ? "wait" : "pointer",
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
                opacity: isLoading && active !== s.id ? 0.5 : 1,
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
            position: "relative",
          }}
        >
          {isLoading && (
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(4px)",
              zIndex: 10,
              transition: "opacity 0.2s",
            }}>
               <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          <ErrorBoundary key={active} name={current.label}>
            {isMobile ? (
              /* En desktop, centra el mockup móvil con ancho fijo */
              <div
                style={{
                  width: "100%",
                  maxWidth: 420,
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 0 40px rgba(0,0,0,0.1)",
                }}
              >
                <Component />
              </div>
            ) : (
              <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                <Component />
              </div>
            )}
          </ErrorBoundary>
        </div>
      </div>
    </ErrorBoundary>
  );
}
