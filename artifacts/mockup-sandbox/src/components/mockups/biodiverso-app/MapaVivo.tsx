import { Plus, Search, MapPin, Layers, FileText, Users, BarChart3, ChevronRight } from "lucide-react";

const FONT_LINK = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap";

if (typeof document !== "undefined" && !document.querySelector(`link[href="${FONT_LINK}"]`)) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = FONT_LINK;
  document.head.appendChild(link);
}

const SANS = "'IBM Plex Sans', 'DM Sans', sans-serif";
const MONO = "'JetBrains Mono', monospace";

export function MapaVivo() {
  const PAPER = "#f4ede0";
  const PAPER_DARK = "#e8dec9";
  const INK = "#1a3a2a";
  const MOSS = "#446b3f";
  const RUST = "#b85c2a";
  const LINE = "#bfb29a";

  return (
    <div
      className="w-full h-full overflow-hidden flex flex-col relative"
      style={{
        background: PAPER,
        fontFamily: SANS,
        color: INK,
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent 0 24px, rgba(26,58,42,0.04) 24px 25px), repeating-linear-gradient(90deg, transparent 0 24px, rgba(26,58,42,0.04) 24px 25px)",
      }}
    >
      <div
        className="px-4 pt-4 pb-3 flex items-center justify-between"
        style={{ borderBottom: `1px dashed ${LINE}` }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center"
            style={{ background: INK, color: PAPER }}
          >
            <Layers size={16} />
          </div>
          <div>
            <div
              className="text-[14px] font-semibold leading-none"
              style={{ color: INK }}
            >
              BIODIVERSO
            </div>
            <div
              className="text-[8px] mt-1 tracking-[0.2em]"
              style={{ fontFamily: MONO, color: MOSS }}
            >
              OPS · v2.4 · ARAUCANÍA
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: MOSS }}
          />
          <span className="text-[10px]" style={{ fontFamily: MONO, color: MOSS }}>
            ONLINE
          </span>
        </div>
      </div>

      <div className="px-4 pt-3 pb-2">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-md"
          style={{
            background: PAPER_DARK,
            border: `1px solid ${LINE}`,
          }}
        >
          <Search size={14} color={MOSS} />
          <span className="text-[11px]" style={{ fontFamily: MONO, color: "#7d6f55" }}>
            Buscar predio, cliente, especie...
          </span>
          <span
            className="ml-auto text-[9px] px-1.5 py-0.5 rounded"
            style={{ fontFamily: MONO, background: PAPER, color: "#7d6f55", border: `1px solid ${LINE}` }}
          >
            ⌘K
          </span>
        </div>
      </div>

      <div className="px-4 pb-3 grid grid-cols-2 gap-2">
        <Tile label="COTIZADO" value="$48.7M" sub="+23% vs abr" mono />
        <Tile label="ACTIVAS" value="14" sub="9 aprobadas" mono />
        <Tile label="HECTÁREAS" value="287" sub="ha · plantadas" mono />
        <Tile label="CLIENTES" value="42" sub="6 nuevos" mono />
      </div>

      <div className="px-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-3" style={{ background: RUST }} />
          <span className="text-[11px] font-semibold tracking-wide" style={{ color: INK }}>
            COTIZACIONES
          </span>
          <span
            className="text-[9px] px-1.5 py-0.5 rounded"
            style={{ background: INK, color: PAPER, fontFamily: MONO }}
          >
            14
          </span>
        </div>
        <div className="text-[10px]" style={{ fontFamily: MONO, color: MOSS }}>
          ÚLTIMA · 2H
        </div>
      </div>

      <div className="flex-1 px-4 overflow-hidden flex flex-col gap-1.5">
        <Row code="COT-2024-087" name="Forestal Arauco" amount="12,400,000" status="OK" mono mossColor={MOSS} ink={INK} line={LINE} paperDark={PAPER_DARK} />
        <Row code="COT-2024-086" name="Pred. Los Maitenes" amount="8,900,000" status="WAIT" mono mossColor={MOSS} ink={INK} line={LINE} paperDark={PAPER_DARK} statusColor={RUST} />
        <Row code="COT-2024-085" name="Com. Pewenche" amount="15,200,000" status="SENT" mono mossColor={MOSS} ink={INK} line={LINE} paperDark={PAPER_DARK} />
        <Row code="COT-2024-084" name="Hda. Lonquimay" amount="6,700,000" status="DRAFT" mono mossColor={MOSS} ink={INK} line={LINE} paperDark={PAPER_DARK} statusColor="#7d6f55" />
      </div>

      <div className="px-4 pt-3 pb-2">
        <button
          className="w-full py-2.5 flex items-center justify-center gap-2 text-[12px] font-semibold rounded-md"
          style={{
            background: INK,
            color: PAPER,
            fontFamily: MONO,
            letterSpacing: "0.06em",
          }}
        >
          <Plus size={14} strokeWidth={2.5} />
          + NUEVA COTIZACIÓN
        </button>
      </div>

      <div
        className="grid grid-cols-4 px-2 pt-2 pb-3"
        style={{ borderTop: `1px solid ${LINE}`, background: PAPER_DARK }}
      >
        <NavBtn icon={<MapPin size={16} />} label="MAPA" active ink={INK} moss={MOSS} />
        <NavBtn icon={<FileText size={16} />} label="COT." ink={INK} moss={MOSS} />
        <NavBtn icon={<Users size={16} />} label="CLIE." ink={INK} moss={MOSS} />
        <NavBtn icon={<BarChart3 size={16} />} label="DATA" ink={INK} moss={MOSS} />
      </div>
    </div>
  );

  function Tile({ label, value, sub }: { label: string; value: string; sub: string; mono?: boolean }) {
    return (
      <div
        className="px-3 py-2.5 rounded-md"
        style={{ background: PAPER_DARK, border: `1px solid ${LINE}` }}
      >
        <div className="text-[8px] tracking-[0.18em]" style={{ fontFamily: MONO, color: MOSS }}>
          {label}
        </div>
        <div
          className="text-[20px] font-semibold leading-tight mt-0.5"
          style={{ color: INK, fontFamily: MONO }}
        >
          {value}
        </div>
        <div className="text-[9px] mt-0.5" style={{ fontFamily: MONO, color: "#7d6f55" }}>
          {sub}
        </div>
      </div>
    );
  }
}

function NavBtn({ icon, label, active = false, ink, moss }: { icon: React.ReactNode; label: string; active?: boolean; ink: string; moss: string }) {
  return (
    <button
      className="flex flex-col items-center gap-1 py-1.5"
      style={{ color: active ? ink : "#9a8c70" }}
    >
      <div className="relative">
        {icon}
        {active && (
          <div
            className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
            style={{ background: moss }}
          />
        )}
      </div>
      <span
        className="text-[8px] font-semibold tracking-[0.1em]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </span>
    </button>
  );
}

function Row({
  code, name, amount, status, mossColor, ink, line, paperDark, statusColor,
}: {
  code: string; name: string; amount: string; status: string; mono?: boolean;
  mossColor: string; ink: string; line: string; paperDark: string; statusColor?: string;
}) {
  const sColor = statusColor ?? mossColor;
  return (
    <div
      className="px-3 py-2 rounded-md flex items-center gap-3"
      style={{ background: paperDark, border: `1px solid ${line}` }}
    >
      <div className="flex flex-col items-start min-w-0 flex-1">
        <div className="flex items-center gap-2 w-full">
          <div className="text-[8px]" style={{ fontFamily: "'JetBrains Mono', monospace", color: mossColor }}>
            {code}
          </div>
          <div
            className="ml-auto text-[8px] px-1.5 py-0.5 rounded font-bold"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: sColor, border: `1px solid ${sColor}` }}
          >
            {status}
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-0.5">
          <div className="text-[12px] font-semibold truncate" style={{ color: ink }}>
            {name}
          </div>
          <div className="text-[12px] font-semibold ml-2" style={{ fontFamily: "'JetBrains Mono', monospace", color: ink }}>
            ${amount}
          </div>
        </div>
      </div>
    </div>
  );
}
