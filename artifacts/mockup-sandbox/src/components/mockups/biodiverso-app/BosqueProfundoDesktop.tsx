import { Plus, FileText, Users, Sprout, Home, BarChart3, Settings, Search, MapPin, Bell, ChevronDown, TrendingUp, Filter, MoreHorizontal } from "lucide-react";

const FONT_LINK = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap";
if (typeof document !== "undefined" && !document.querySelector(`link[href="${FONT_LINK}"]`)) {
  const l = document.createElement("link"); l.rel = "stylesheet"; l.href = FONT_LINK; document.head.appendChild(l);
}
const SERIF = "'Fraunces', 'Playfair Display', serif";
const SANS = "'Inter', 'DM Sans', sans-serif";

export function BosqueProfundoDesktop() {
  return (
    <div className="w-full h-screen overflow-hidden flex" style={{
      background: "radial-gradient(120% 80% at 50% 0%, #0d3a2a 0%, #061d15 55%, #03100b 100%)",
      fontFamily: SANS, color: "#e9efe6"
    }}>
      <aside className="w-[220px] flex flex-col py-5 px-4 flex-shrink-0" style={{ borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(3,16,11,0.4)" }}>
        <div className="flex items-center gap-2.5 mb-7">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(168,230,193,0.12)", border: "1px solid rgba(168,230,193,0.25)" }}>
            <Sprout size={18} color="#a8e6c1" />
          </div>
          <div>
            <div className="text-[14px]" style={{ fontFamily: SERIF, fontWeight: 600, color: "#fff" }}>Biodiverso</div>
            <div className="text-[9px] uppercase tracking-[0.18em]" style={{ color: "#7fbf95" }}>Operaciones</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          <NavItem icon={<Home size={15}/>} label="Inicio" active />
          <NavItem icon={<FileText size={15}/>} label="Cotizaciones" badge="14" />
          <NavItem icon={<Users size={15}/>} label="Clientes" />
          <NavItem icon={<Sprout size={15}/>} label="Especies" />
          <NavItem icon={<MapPin size={15}/>} label="Predios" />
          <NavItem icon={<BarChart3 size={15}/>} label="Métricas" />
        </nav>
        <div className="rounded-xl p-3 mb-2" style={{ background: "rgba(168,230,193,0.06)", border: "1px solid rgba(168,230,193,0.12)" }}>
          <div className="text-[10px] uppercase tracking-[0.16em]" style={{ color: "#7fbf95" }}>Sincronizado</div>
          <div className="text-[11px] mt-1" style={{ color: "#e9efe6" }}>Hace 2 minutos</div>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#a8e6c1" }} />
            <span className="text-[10px]" style={{ color: "#a8e6c1" }}>Nube · activa</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-2 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px]" style={{ background: "rgba(168,230,193,0.18)", color: "#a8e6c1", fontFamily: SERIF, fontWeight: 600 }}>AC</div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-medium truncate">Andrés Castro</div>
            <div className="text-[9px]" style={{ color: "#7fbf95" }}>Admin</div>
          </div>
          <Settings size={13} color="#7fbf95" />
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="px-7 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "#7fbf95" }}>Panel general</div>
            <h1 className="text-[24px] mt-0.5" style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}>
              Buen día, <span style={{ color: "#a8e6c1", fontStyle: "italic" }}>Andrés</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Search size={13} color="#7fbf95" />
              <span className="text-[11px]" style={{ color: "rgba(233,239,230,0.5)" }}>Buscar predio, cliente...</span>
            </div>
            <button className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Bell size={14} color="#a8e6c1" />
            </button>
            <button className="px-3.5 py-2 rounded-lg flex items-center gap-1.5 text-[12px] font-medium" style={{
              background: "linear-gradient(180deg, #a8e6c1 0%, #6dc88a 100%)", color: "#03200f", boxShadow: "0 4px 14px rgba(108,200,138,0.25)"
            }}>
              <Plus size={13} strokeWidth={2.5}/> Nueva cotización
            </button>
          </div>
        </header>

        <div className="px-7 pt-5 pb-4 grid grid-cols-4 gap-3">
          <Kpi label="Cotizado · mayo" value="$48.7M" change="↑ 23%" big />
          <Kpi label="Activas" value="14" change="9 aprobadas" />
          <Kpi label="Hectáreas" value="287" change="+42 ha" />
          <Kpi label="Clientes" value="42" change="6 nuevos" />
        </div>

        <div className="flex-1 overflow-hidden grid grid-cols-3 gap-3 px-7 pb-5">
          <section className="col-span-2 rounded-2xl flex flex-col overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <div className="text-[14px]" style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}>Cotizaciones recientes</div>
                <div className="text-[10px] mt-0.5" style={{ color: "#7fbf95" }}>14 activas · última hace 2h</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-[10px] px-2 py-1 rounded-md flex items-center gap-1" style={{ background: "rgba(255,255,255,0.04)", color: "#cbd6cd" }}>
                  <Filter size={10}/> Filtrar
                </button>
                <button className="text-[10px] px-2 py-1 rounded-md" style={{ color: "#a8e6c1" }}>Ver todas →</button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col gap-1.5 p-3">
              <Row code="COT-087" name="Forestal Arauco" type="Reforestación · Pino radiata" amount="$12.4M" status="Aprobada" tone="ok" date="Hace 2h"/>
              <Row code="COT-086" name="Predio Los Maitenes" type="Plantación · Mixto nativo" amount="$8.9M" status="Pendiente" tone="warn" date="Ayer"/>
              <Row code="COT-085" name="Comunidad Pewenche" type="Restauración · Araucaria" amount="$15.2M" status="Enviada" tone="info" date="2 días"/>
              <Row code="COT-084" name="Hacienda Lonquimay" type="Manejo · Lenga" amount="$6.7M" status="Borrador" tone="muted" date="3 días"/>
            </div>
          </section>

          <section className="rounded-2xl flex flex-col overflow-hidden p-4" style={{ background: "linear-gradient(135deg, rgba(168,230,193,0.10) 0%, rgba(168,230,193,0.02) 100%)", border: "1px solid rgba(168,230,193,0.15)" }}>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "#7fbf95" }}>Tasa de aprobación</div>
              <div className="flex items-end gap-2 mt-1">
                <div className="text-[36px] leading-none" style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}>78%</div>
                <div className="flex items-center gap-1 mb-1.5 text-[10px]" style={{ color: "#a8e6c1" }}>
                  <TrendingUp size={11}/> +5pp
                </div>
              </div>
              <div className="text-[10px] mt-1" style={{ color: "rgba(233,239,230,0.55)" }}>Últimos 30 días</div>
            </div>

            <div className="mt-4 flex-1 flex flex-col gap-2.5">
              <SpeciesBar name="Pino radiata" pct={62} />
              <SpeciesBar name="Eucalipto" pct={38} />
              <SpeciesBar name="Lenga" pct={24} />
              <SpeciesBar name="Araucaria" pct={18} />
              <SpeciesBar name="Coihue" pct={12} />
            </div>

            <div className="pt-3 mt-2 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[10px]" style={{ color: "#7fbf95" }}>Especies más cotizadas</div>
              <ChevronDown size={11} color="#7fbf95"/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

  function NavItem({ icon, label, active=false, badge }: any) {
    return (
      <button className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left" style={{
        background: active ? "rgba(168,230,193,0.10)" : "transparent",
        color: active ? "#a8e6c1" : "rgba(233,239,230,0.65)"
      }}>
        {icon}
        <span className="text-[12px] font-medium flex-1">{label}</span>
        {badge && <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(168,230,193,0.18)", color: "#a8e6c1" }}>{badge}</span>}
      </button>
    );
  }

  function Kpi({ label, value, change, big=false }: any) {
    return (
      <div className="rounded-2xl px-4 py-3" style={{
        background: big ? "linear-gradient(135deg, rgba(168,230,193,0.12) 0%, rgba(168,230,193,0.03) 100%)" : "rgba(255,255,255,0.03)",
        border: big ? "1px solid rgba(168,230,193,0.18)" : "1px solid rgba(255,255,255,0.06)"
      }}>
        <div className="text-[10px] uppercase tracking-[0.16em]" style={{ color: "#7fbf95" }}>{label}</div>
        <div className="text-[24px] leading-tight mt-1" style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}>{value}</div>
        <div className="text-[10px] mt-0.5" style={{ color: big ? "#a8e6c1" : "rgba(233,239,230,0.5)" }}>{change}</div>
      </div>
    );
  }

  function Row({ code, name, type, amount, status, tone, date }: any) {
    const t: any = {
      ok: { bg: "rgba(168,230,193,0.18)", fg: "#a8e6c1" },
      warn: { bg: "rgba(255,210,140,0.16)", fg: "#ffd28c" },
      info: { bg: "rgba(140,200,255,0.16)", fg: "#8cc8ff" },
      muted: { bg: "rgba(255,255,255,0.08)", fg: "#cbd6cd" },
    }[tone];
    return (
      <div className="rounded-xl px-3 py-2.5 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,230,193,0.10)" }}>
          <Sprout size={13} color="#a8e6c1"/>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[9px]" style={{ color: "#7fbf95", fontFamily: SANS }}>{code}</span>
            <span className="text-[12px] font-medium truncate" style={{ color: "#f0f5ee" }}>{name}</span>
          </div>
          <div className="text-[10px] mt-0.5" style={{ color: "rgba(233,239,230,0.55)" }}>{type}</div>
        </div>
        <div className="text-right">
          <div className="text-[13px]" style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}>{amount}</div>
          <div className="text-[9px] mt-0.5" style={{ color: "rgba(233,239,230,0.45)" }}>{date}</div>
        </div>
        <div className="text-[9px] px-2 py-1 rounded-full ml-1" style={{ background: t.bg, color: t.fg, fontWeight: 500 }}>{status}</div>
      </div>
    );
  }

  function SpeciesBar({ name, pct }: { name: string; pct: number }) {
    return (
      <div>
        <div className="flex items-center justify-between text-[10px] mb-1">
          <span style={{ color: "rgba(233,239,230,0.75)" }}>{name}</span>
          <span style={{ color: "#a8e6c1", fontFamily: SERIF }}>{pct}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "linear-gradient(90deg, #6dc88a 0%, #a8e6c1 100%)" }} />
        </div>
      </div>
    );
  }
}
