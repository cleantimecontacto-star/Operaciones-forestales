import { Plus, Search, MapPin, Layers, FileText, Users, BarChart3, Settings, Database, Filter, ChevronRight, Cloud } from "lucide-react";

const FONT_LINK = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap";
if (typeof document !== "undefined" && !document.querySelector(`link[href="${FONT_LINK}"]`)) {
  const l = document.createElement("link"); l.rel = "stylesheet"; l.href = FONT_LINK; document.head.appendChild(l);
}
const SANS = "'IBM Plex Sans', 'DM Sans', sans-serif";
const MONO = "'JetBrains Mono', monospace";

export function MapaVivoDesktop() {
  const PAPER = "#f4ede0";
  const PAPER_DARK = "#e8dec9";
  const INK = "#1a3a2a";
  const MOSS = "#446b3f";
  const RUST = "#b85c2a";
  const LINE = "#bfb29a";

  return (
    <div className="w-full h-full overflow-hidden flex" style={{
      background: PAPER, fontFamily: SANS, color: INK,
      backgroundImage: "repeating-linear-gradient(0deg, transparent 0 24px, rgba(26,58,42,0.04) 24px 25px), repeating-linear-gradient(90deg, transparent 0 24px, rgba(26,58,42,0.04) 24px 25px)"
    }}>
      <aside className="w-[210px] flex flex-col py-4 px-3 flex-shrink-0" style={{ borderRight: `1px dashed ${LINE}`, background: PAPER_DARK }}>
        <div className="flex items-center gap-2 mb-6 px-1">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: INK, color: PAPER }}>
            <Layers size={16} />
          </div>
          <div>
            <div className="text-[13px] font-bold leading-none" style={{ color: INK }}>BIODIVERSO</div>
            <div className="text-[8px] mt-1 tracking-[0.18em]" style={{ fontFamily: MONO, color: MOSS }}>OPS · v2.4</div>
          </div>
        </div>
        <div className="text-[8px] px-1 mb-1.5 tracking-[0.2em] font-semibold" style={{ fontFamily: MONO, color: MOSS }}>NAVEGACIÓN</div>
        <nav className="flex flex-col gap-0.5 flex-1">
          <NavItem icon={<MapPin size={14}/>} label="MAPA" active code="01" />
          <NavItem icon={<FileText size={14}/>} label="COTIZACIONES" code="02" badge="14"/>
          <NavItem icon={<Users size={14}/>} label="CLIENTES" code="03"/>
          <NavItem icon={<Layers size={14}/>} label="ESPECIES" code="04"/>
          <NavItem icon={<Database size={14}/>} label="PREDIOS" code="05"/>
          <NavItem icon={<BarChart3 size={14}/>} label="MÉTRICAS" code="06"/>
        </nav>
        <div className="mt-3 px-2 py-2 rounded-md" style={{ background: PAPER, border: `1px solid ${LINE}` }}>
          <div className="flex items-center gap-1.5">
            <Cloud size={11} color={MOSS}/>
            <span className="text-[8px] font-semibold tracking-[0.12em]" style={{ fontFamily: MONO, color: MOSS }}>NUBE · OK</span>
          </div>
          <div className="text-[9px] mt-1" style={{ fontFamily: MONO, color: "#7d6f55" }}>Sync hace 2m</div>
        </div>
        <div className="flex items-center gap-2 px-2 py-2 mt-2 rounded-md" style={{ background: PAPER, border: `1px solid ${LINE}` }}>
          <div className="w-6 h-6 rounded-sm flex items-center justify-center text-[10px] font-bold" style={{ background: INK, color: PAPER, fontFamily: MONO }}>AC</div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold truncate">A. Castro</div>
            <div className="text-[8px]" style={{ fontFamily: MONO, color: MOSS }}>ADMIN</div>
          </div>
          <Settings size={11} color={MOSS}/>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="px-6 py-3 flex items-center justify-between" style={{ borderBottom: `1px dashed ${LINE}` }}>
          <div className="flex items-center gap-3">
            <div className="text-[10px] tracking-[0.18em] font-semibold" style={{ fontFamily: MONO, color: MOSS }}>OPS / DASHBOARD</div>
            <ChevronRight size={11} color={MOSS}/>
            <div className="text-[12px] font-semibold" style={{ color: INK }}>Panel general · Araucanía</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md w-[260px]" style={{ background: PAPER, border: `1px solid ${LINE}` }}>
              <Search size={12} color={MOSS}/>
              <span className="text-[11px]" style={{ fontFamily: MONO, color: "#7d6f55" }}>Buscar predio, cliente...</span>
              <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded" style={{ fontFamily: MONO, background: PAPER_DARK, color: "#7d6f55", border: `1px solid ${LINE}` }}>⌘K</span>
            </div>
            <button className="px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-bold rounded-md" style={{ background: INK, color: PAPER, fontFamily: MONO, letterSpacing: "0.06em" }}>
              <Plus size={12} strokeWidth={3}/> + COTIZAR
            </button>
          </div>
        </header>

        <div className="px-6 pt-4 pb-3 grid grid-cols-4 gap-2.5">
          <Tile label="COTIZADO·MES" value="$48.7M" sub="+23% vs abr" accent />
          <Tile label="ACTIVAS" value="14" sub="9 aprobadas" />
          <Tile label="HECTÁREAS" value="287" sub="+42 ha · plantadas" />
          <Tile label="CLIENTES" value="42" sub="6 nuevos · mes" />
        </div>

        <div className="flex-1 overflow-hidden grid grid-cols-3 gap-3 px-6 pb-5">
          <section className="col-span-2 rounded-md overflow-hidden flex flex-col" style={{ background: PAPER_DARK, border: `1px solid ${LINE}` }}>
            <div className="px-4 py-2.5 flex items-center justify-between" style={{ borderBottom: `1px dashed ${LINE}` }}>
              <div className="flex items-center gap-2">
                <div className="w-1 h-3" style={{ background: RUST }} />
                <span className="text-[11px] font-bold tracking-wide" style={{ color: INK }}>COTIZACIONES</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded font-bold" style={{ background: INK, color: PAPER, fontFamily: MONO }}>14</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-[9px] px-2 py-1 rounded flex items-center gap-1 font-semibold" style={{ fontFamily: MONO, background: PAPER, color: INK, border: `1px solid ${LINE}` }}>
                  <Filter size={9}/> FILTRAR
                </button>
                <button className="text-[9px] px-2 py-1 rounded font-semibold" style={{ fontFamily: MONO, color: MOSS }}>VER TODAS →</button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${LINE}` }}>
                    <Th>CÓDIGO</Th><Th>CLIENTE / TIPO</Th><Th>HA</Th><Th align="right">MONTO</Th><Th align="right">EST</Th>
                  </tr>
                </thead>
                <tbody>
                  <Tr code="COT-2024-087" name="Forestal Arauco" type="Reforestación · Pino" ha="32" amount="$12,400,000" status="OK"/>
                  <Tr code="COT-2024-086" name="Pred. Los Maitenes" type="Plantación · Mixto" ha="18" amount="$8,900,000" status="WAIT" sColor={RUST}/>
                  <Tr code="COT-2024-085" name="Com. Pewenche" type="Restauración · Araucaria" ha="55" amount="$15,200,000" status="SENT"/>
                  <Tr code="COT-2024-084" name="Hda. Lonquimay" type="Manejo · Lenga" ha="22" amount="$6,700,000" status="DRAFT" sColor="#7d6f55"/>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-md flex flex-col overflow-hidden p-3.5" style={{ background: PAPER_DARK, border: `1px solid ${LINE}` }}>
            <div className="text-[8px] tracking-[0.18em] font-semibold" style={{ fontFamily: MONO, color: MOSS }}>HISTORIAL · 2024</div>
            <div className="text-[28px] font-semibold mt-1" style={{ fontFamily: MONO, color: INK }}>312</div>
            <div className="text-[10px]" style={{ fontFamily: MONO, color: "#7d6f55" }}>cotizaciones registradas</div>

            <div className="mt-4 flex-1 flex flex-col gap-2">
              <Bar month="ENE" pct={32} />
              <Bar month="FEB" pct={45} />
              <Bar month="MAR" pct={58} />
              <Bar month="ABR" pct={72} />
              <Bar month="MAY" pct={88} highlight />
            </div>
            <div className="pt-3 mt-2 flex items-center justify-between" style={{ borderTop: `1px dashed ${LINE}` }}>
              <span className="text-[9px] font-semibold tracking-[0.12em]" style={{ fontFamily: MONO, color: MOSS }}>EXPORTAR CSV</span>
              <ChevronRight size={11} color={MOSS}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

  function NavItem({ icon, label, active=false, code, badge }: any) {
    return (
      <button className="flex items-center gap-2 px-2 py-1.5 rounded-sm text-left" style={{
        background: active ? PAPER : "transparent", color: active ? INK : "#7d6f55", border: active ? `1px solid ${LINE}` : "1px solid transparent"
      }}>
        <span className="text-[8px] font-bold" style={{ fontFamily: MONO, color: active ? RUST : MOSS }}>{code}</span>
        {icon}
        <span className="text-[10px] font-bold tracking-[0.06em] flex-1">{label}</span>
        {badge && <span className="text-[8px] font-bold px-1 rounded" style={{ fontFamily: MONO, background: INK, color: PAPER }}>{badge}</span>}
      </button>
    );
  }

  function Tile({ label, value, sub, accent=false }: any) {
    return (
      <div className="px-3.5 py-2.5 rounded-md" style={{
        background: accent ? INK : PAPER_DARK, color: accent ? PAPER : INK,
        border: `1px solid ${accent ? INK : LINE}`
      }}>
        <div className="text-[8px] tracking-[0.18em]" style={{ fontFamily: MONO, color: accent ? "#a8e6c1" : MOSS }}>{label}</div>
        <div className="text-[22px] font-bold leading-tight mt-0.5" style={{ fontFamily: MONO }}>{value}</div>
        <div className="text-[9px] mt-0.5" style={{ fontFamily: MONO, color: accent ? "rgba(244,237,224,0.7)" : "#7d6f55" }}>{sub}</div>
      </div>
    );
  }

  function Th({ children, align="left" }: any) {
    return <th className="px-3 py-1.5 text-[8px] font-bold tracking-[0.14em]" style={{ fontFamily: MONO, color: MOSS, textAlign: align }}>{children}</th>;
  }

  function Tr({ code, name, type, ha, amount, status, sColor }: any) {
    const c = sColor ?? MOSS;
    return (
      <tr style={{ borderBottom: `1px dashed ${LINE}` }}>
        <td className="px-3 py-2 text-[9px]" style={{ fontFamily: MONO, color: MOSS }}>{code}</td>
        <td className="px-3 py-2">
          <div className="text-[11px] font-semibold" style={{ color: INK }}>{name}</div>
          <div className="text-[9px]" style={{ color: "#7d6f55" }}>{type}</div>
        </td>
        <td className="px-3 py-2 text-[10px]" style={{ fontFamily: MONO, color: INK }}>{ha}</td>
        <td className="px-3 py-2 text-right text-[11px] font-bold" style={{ fontFamily: MONO, color: INK }}>{amount}</td>
        <td className="px-3 py-2 text-right">
          <span className="text-[8px] font-bold px-1.5 py-0.5 rounded" style={{ fontFamily: MONO, color: c, border: `1px solid ${c}` }}>{status}</span>
        </td>
      </tr>
    );
  }

  function Bar({ month, pct, highlight=false }: any) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-[9px] w-7" style={{ fontFamily: MONO, color: MOSS }}>{month}</span>
        <div className="flex-1 h-3 rounded-sm overflow-hidden" style={{ background: PAPER, border: `1px solid ${LINE}` }}>
          <div className="h-full" style={{ width: `${pct}%`, background: highlight ? RUST : MOSS }} />
        </div>
        <span className="text-[9px] w-8 text-right" style={{ fontFamily: MONO, color: INK }}>{pct}</span>
      </div>
    );
  }
}
