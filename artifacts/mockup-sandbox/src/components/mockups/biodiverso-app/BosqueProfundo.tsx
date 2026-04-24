import { Plus, FileText, Users, Sprout, Home, BarChart3, Settings, Search, MapPin, ChevronRight } from "lucide-react";

const FONT_LINK = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap";

if (typeof document !== "undefined" && !document.querySelector(`link[href="${FONT_LINK}"]`)) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = FONT_LINK;
  document.head.appendChild(link);
}

const SERIF = "'Fraunces', 'Playfair Display', serif";
const SANS = "'Inter', 'DM Sans', sans-serif";

export function BosqueProfundo() {
  return (
    <div
      className="w-full h-screen overflow-hidden flex flex-col"
      style={{
        background: "radial-gradient(120% 80% at 50% 0%, #0d3a2a 0%, #061d15 60%, #03100b 100%)",
        fontFamily: SANS,
        color: "#e9efe6",
      }}
    >
      <div
        className="px-5 pt-6 pb-3 flex items-start justify-between"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div>
          <div
            className="text-[10px] uppercase tracking-[0.3em] mb-1"
            style={{ color: "#7fbf95" }}
          >
            Biodiverso
          </div>
          <div
            className="text-[22px] leading-tight"
            style={{ fontFamily: SERIF, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            Buen día,<br />
            <span style={{ color: "#a8e6c1", fontStyle: "italic" }}>Andrés</span>
          </div>
        </div>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(168,230,193,0.12)",
            border: "1px solid rgba(168,230,193,0.25)",
            fontFamily: SERIF,
            fontWeight: 600,
            color: "#a8e6c1",
            fontSize: 14,
          }}
        >
          AC
        </div>
      </div>

      <div className="px-5 pt-4 pb-3">
        <div
          className="rounded-2xl p-4"
          style={{
            background: "linear-gradient(135deg, rgba(168,230,193,0.10) 0%, rgba(168,230,193,0.02) 100%)",
            border: "1px solid rgba(168,230,193,0.15)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "#7fbf95" }}>
                Cotizado este mes
              </div>
              <div
                className="text-[34px] leading-none mt-1"
                style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}
              >
                $48.7M
              </div>
            </div>
            <div
              className="text-[11px] px-2 py-1 rounded-full"
              style={{ background: "rgba(168,230,193,0.18)", color: "#a8e6c1" }}
            >
              ↑ 23%
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <Stat label="Activas" value="14" />
            <Stat label="Aprobadas" value="9" />
            <Stat label="Hectáreas" value="287" />
          </div>
        </div>
      </div>

      <div className="px-5 pb-2 flex items-center justify-between">
        <div
          className="text-[15px]"
          style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}
        >
          Cotizaciones recientes
        </div>
        <div className="text-[11px]" style={{ color: "#7fbf95" }}>Ver todas</div>
      </div>

      <div className="flex-1 px-5 overflow-hidden flex flex-col gap-2">
        <Quote name="Forestal Arauco" type="Reforestación · Pino" amount="$12.4M" status="Aprobada" tone="ok" />
        <Quote name="Predio Los Maitenes" type="Plantación · Mixto" amount="$8.9M" status="Pendiente" tone="warn" />
        <Quote name="Comunidad Pewenche" type="Restauración · Nativo" amount="$15.2M" status="Enviada" tone="info" />
        <Quote name="Hacienda Lonquimay" type="Manejo · Lenga" amount="$6.7M" status="Borrador" tone="muted" />
      </div>

      <div className="px-5 pt-3 pb-2">
        <button
          className="w-full rounded-2xl py-3 flex items-center justify-center gap-2 text-[13px] font-medium"
          style={{
            background: "linear-gradient(180deg, #a8e6c1 0%, #6dc88a 100%)",
            color: "#03200f",
            boxShadow: "0 8px 24px rgba(108,200,138,0.25)",
            fontFamily: SANS,
          }}
        >
          <Plus size={16} strokeWidth={2.5} />
          Nueva cotización
        </button>
      </div>

      <div
        className="grid grid-cols-4 px-2 pt-2 pb-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(3,16,11,0.6)" }}
      >
        <NavBtn icon={<Home size={18} />} label="Inicio" active />
        <NavBtn icon={<FileText size={18} />} label="Cotizar" />
        <NavBtn icon={<Users size={18} />} label="Clientes" />
        <NavBtn icon={<BarChart3 size={18} />} label="Métricas" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="text-[18px] leading-none"
        style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}
      >
        {value}
      </div>
      <div className="text-[9px] uppercase tracking-[0.12em] mt-1" style={{ color: "#7fbf95" }}>
        {label}
      </div>
    </div>
  );
}

function Quote({
  name,
  type,
  amount,
  status,
  tone,
}: {
  name: string;
  type: string;
  amount: string;
  status: string;
  tone: "ok" | "warn" | "info" | "muted";
}) {
  const toneMap: Record<string, { bg: string; fg: string }> = {
    ok: { bg: "rgba(168,230,193,0.18)", fg: "#a8e6c1" },
    warn: { bg: "rgba(255,210,140,0.16)", fg: "#ffd28c" },
    info: { bg: "rgba(140,200,255,0.16)", fg: "#8cc8ff" },
    muted: { bg: "rgba(255,255,255,0.08)", fg: "#cbd6cd" },
  };
  const t = toneMap[tone];
  return (
    <div
      className="rounded-xl p-3 flex items-center gap-3"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(168,230,193,0.10)" }}
      >
        <Sprout size={14} color="#a8e6c1" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="text-[13px] font-medium truncate" style={{ color: "#f0f5ee" }}>
            {name}
          </div>
          <div
            className="text-[14px]"
            style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}
          >
            {amount}
          </div>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <div className="text-[10px]" style={{ color: "#7fbf95" }}>
            {type}
          </div>
          <div
            className="text-[9px] px-2 py-0.5 rounded-full"
            style={{ background: t.bg, color: t.fg, fontWeight: 500 }}
          >
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBtn({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className="flex flex-col items-center gap-1 py-1.5 rounded-lg"
      style={{
        background: active ? "rgba(168,230,193,0.10)" : "transparent",
        color: active ? "#a8e6c1" : "rgba(233,239,230,0.5)",
      }}
    >
      {icon}
      <span className="text-[9px]" style={{ letterSpacing: "0.04em" }}>{label}</span>
    </button>
  );
}
