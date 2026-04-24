import { Plus, FileText, Users, Sprout, Home, BarChart3, Settings, TreePine, Leaf, ArrowUpRight } from "lucide-react";

const FONT_LINK = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&display=swap";

if (typeof document !== "undefined" && !document.querySelector(`link[href="${FONT_LINK}"]`)) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = FONT_LINK;
  document.head.appendChild(link);
}

const SANS = "'DM Sans', sans-serif";
const DISPLAY = "'Bricolage Grotesque', 'DM Sans', sans-serif";

export function VerdeVivo() {
  const CREAM = "#fdfaf3";
  const SAGE = "#e8f0d9";
  const FOREST = "#1f3d2a";
  const LIME = "#a8e063";
  const SUN = "#f5b94c";
  const SOIL = "#5b4a36";

  return (
    <div
      className="w-full h-screen overflow-hidden flex flex-col"
      style={{ background: CREAM, fontFamily: SANS, color: FOREST }}
    >
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-2xl flex items-center justify-center"
            style={{ background: FOREST }}
          >
            <TreePine size={18} color={LIME} strokeWidth={2.2} />
          </div>
          <div>
            <div
              className="text-[15px] leading-none"
              style={{ fontFamily: DISPLAY, fontWeight: 700, color: FOREST }}
            >
              biodiverso
            </div>
            <div className="text-[9px] mt-0.5" style={{ color: SOIL, letterSpacing: "0.06em" }}>
              ops forestales · chile
            </div>
          </div>
        </div>
        <div
          className="w-9 h-9 rounded-2xl flex items-center justify-center text-[12px] font-bold"
          style={{ background: SAGE, color: FOREST }}
        >
          AC
        </div>
      </div>

      <div className="px-5 pb-3">
        <div
          className="rounded-3xl p-4 relative overflow-hidden"
          style={{
            background: FOREST,
            color: CREAM,
          }}
        >
          <div
            className="absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-30"
            style={{ background: LIME }}
          />
          <div
            className="absolute right-8 bottom-2 opacity-20"
            style={{ color: LIME }}
          >
            <Leaf size={50} strokeWidth={1.2} />
          </div>
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.14em] opacity-70">
              cotizado · mayo
            </div>
            <div
              className="text-[36px] leading-none mt-1.5"
              style={{ fontFamily: DISPLAY, fontWeight: 600 }}
            >
              $48,7M
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div
                className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md flex items-center gap-0.5"
                style={{ background: LIME, color: FOREST }}
              >
                <ArrowUpRight size={10} strokeWidth={2.5} /> 23%
              </div>
              <span className="text-[10px] opacity-70">vs mes anterior</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-3 grid grid-cols-3 gap-2">
        <ChipStat value="14" label="activas" bg={SAGE} fg={FOREST} />
        <ChipStat value="9" label="aprobadas" bg="#fde9c4" fg="#7a4f1e" />
        <ChipStat value="287" label="hectáreas" bg="#e3dcf5" fg="#3d2a6b" />
      </div>

      <div className="px-5 pb-2 flex items-center justify-between">
        <div
          className="text-[14px]"
          style={{ fontFamily: DISPLAY, fontWeight: 600, color: FOREST }}
        >
          Cotizaciones
        </div>
        <div className="text-[11px] font-medium" style={{ color: SOIL }}>
          ver todas →
        </div>
      </div>

      <div className="flex-1 px-5 overflow-hidden flex flex-col gap-2">
        <Card name="Forestal Arauco" type="🌲 Reforestación pino" amount="$12,4M" status="aprobada" tone="ok" />
        <Card name="Predio Los Maitenes" type="🌳 Plantación mixta" amount="$8,9M" status="pendiente" tone="warn" />
        <Card name="Comunidad Pewenche" type="🌿 Restauración nativo" amount="$15,2M" status="enviada" tone="info" />
        <Card name="Hacienda Lonquimay" type="🪵 Manejo lenga" amount="$6,7M" status="borrador" tone="muted" />
      </div>

      <div className="px-5 pt-3 pb-2">
        <button
          className="w-full py-3 flex items-center justify-center gap-2 text-[14px] font-semibold rounded-2xl"
          style={{
            background: LIME,
            color: FOREST,
            boxShadow: "0 6px 0 -1px #1f3d2a",
            fontFamily: DISPLAY,
          }}
        >
          <Plus size={16} strokeWidth={3} />
          Nueva cotización
        </button>
      </div>

      <div
        className="grid grid-cols-4 px-3 pt-2 pb-3 mx-3 mb-3 rounded-2xl"
        style={{ background: FOREST }}
      >
        <NavBtn icon={<Home size={17} />} label="inicio" active lime={LIME} />
        <NavBtn icon={<FileText size={17} />} label="cotizar" lime={LIME} />
        <NavBtn icon={<Users size={17} />} label="clientes" lime={LIME} />
        <NavBtn icon={<BarChart3 size={17} />} label="datos" lime={LIME} />
      </div>
    </div>
  );

  function Card({ name, type, amount, status, tone }: { name: string; type: string; amount: string; status: string; tone: "ok" | "warn" | "info" | "muted" }) {
    const tones: Record<string, { bg: string; fg: string }> = {
      ok: { bg: "#d4edbf", fg: "#2d5e1c" },
      warn: { bg: "#fde9c4", fg: "#7a4f1e" },
      info: { bg: "#cfe4f7", fg: "#1d4a73" },
      muted: { bg: "#ece8df", fg: "#5b4a36" },
    };
    const t = tones[tone];
    return (
      <div
        className="rounded-2xl p-3 flex items-center gap-3"
        style={{ background: "#fff", border: `1.5px solid ${SAGE}` }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[13px] font-semibold truncate" style={{ color: FOREST, fontFamily: DISPLAY }}>
              {name}
            </div>
            <div
              className="text-[14px] font-bold"
              style={{ color: FOREST, fontFamily: DISPLAY }}
            >
              {amount}
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-[10px]" style={{ color: SOIL }}>
              {type}
            </div>
            <div
              className="text-[9px] px-1.5 py-0.5 rounded-md font-semibold"
              style={{ background: t.bg, color: t.fg }}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function ChipStat({ value, label, bg, fg }: { value: string; label: string; bg: string; fg: string }) {
    return (
      <div
        className="rounded-2xl px-2.5 py-2 text-center"
        style={{ background: bg }}
      >
        <div
          className="text-[18px] leading-none font-bold"
          style={{ color: fg, fontFamily: DISPLAY }}
        >
          {value}
        </div>
        <div className="text-[9px] mt-0.5 font-medium" style={{ color: fg, opacity: 0.75 }}>
          {label}
        </div>
      </div>
    );
  }
}

function NavBtn({ icon, label, active = false, lime }: { icon: React.ReactNode; label: string; active?: boolean; lime: string }) {
  return (
    <button
      className="flex flex-col items-center gap-1 py-1.5 rounded-xl"
      style={{
        background: active ? "rgba(168,224,99,0.15)" : "transparent",
        color: active ? lime : "rgba(253,250,243,0.55)",
      }}
    >
      {icon}
      <span className="text-[9px] font-semibold">{label}</span>
    </button>
  );
}
