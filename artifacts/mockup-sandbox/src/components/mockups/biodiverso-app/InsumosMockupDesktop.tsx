import {
  Plus, FileText, Users, Home, BarChart3, Settings, Sprout, MapPin,
  Lock, Upload, Download, Edit2, Trash2, Search, Package, ChevronRight,
  ShoppingBag, AlertCircle, CheckCircle2, X
} from "lucide-react";

const FONT_LINK = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap";
if (typeof document !== "undefined" && !document.querySelector(`link[href="${FONT_LINK}"]`)) {
  const l = document.createElement("link"); l.rel = "stylesheet"; l.href = FONT_LINK; document.head.appendChild(l);
}
const SERIF = "'Fraunces', 'Playfair Display', serif";
const SANS = "'Inter', 'DM Sans', sans-serif";

type Insumo = {
  categoria: string;
  proveedor: string;
  producto: string;
  precioCompra: number;
  unidad: string;
  notas?: string;
};

const INSUMOS: Insumo[] = [
  { categoria: "Plantación", proveedor: "Vivero Los Boldos", producto: "Planta pino radiata 1+0", precioCompra: 120, unidad: "un" },
  { categoria: "Plantación", proveedor: "Vivero Arauco", producto: "Planta eucalipto nitens", precioCompra: 95, unidad: "un" },
  { categoria: "Plantación", proveedor: "Vivero Austral", producto: "Planta lenga nativa", precioCompra: 380, unidad: "un", notas: "Stock limitado" },
  { categoria: "Herbicidas", proveedor: "Syngenta Chile", producto: "Roundup Max 68.8%", precioCompra: 8500, unidad: "kg" },
  { categoria: "Herbicidas", proveedor: "Agroquim", producto: "Garlon 400", precioCompra: 12000, unidad: "L" },
  { categoria: "Herbicidas", proveedor: "Corteva", producto: "Ally 60 WG", precioCompra: 45000, unidad: "kg" },
  { categoria: "Fertilizantes", proveedor: "Coarsa", producto: "NPK 12-24-12 granulado", precioCompra: 450, unidad: "kg" },
  { categoria: "Fertilizantes", proveedor: "Coarsa", producto: "Urea 46%", precioCompra: 380, unidad: "kg" },
  { categoria: "Mano de obra", proveedor: "Contratista Martínez", producto: "Plantación manual", precioCompra: 180000, unidad: "ha" },
  { categoria: "Mano de obra", proveedor: "Contratista García", producto: "Roce manual", precioCompra: 95000, unidad: "ha" },
  { categoria: "Maquinaria", proveedor: "Forestal Maq Ltda.", producto: "Subsolado mecanizado", precioCompra: 85000, unidad: "ha" },
  { categoria: "Maquinaria", proveedor: "Forestal Maq Ltda.", producto: "Rastra de disco", precioCompra: 42000, unidad: "ha" },
];

const CATS = [...new Set(INSUMOS.map((i) => i.categoria))];

function fmt(n: number) {
  return "$" + n.toLocaleString("es-CL");
}

export function InsumosMockupDesktop() {
  const activeCat = "Todos";
  const showExcel = false;

  const displayed = INSUMOS;

  return (
    <div
      className="w-full h-full overflow-hidden flex"
      style={{
        background: "radial-gradient(120% 80% at 50% 0%, #0d3a2a 0%, #061d15 55%, #03100b 100%)",
        fontFamily: SANS,
        color: "#e9efe6",
      }}
    >
      {/* Sidebar */}
      <aside
        className="w-[220px] flex flex-col py-5 px-4 flex-shrink-0"
        style={{ borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(3,16,11,0.4)" }}
      >
        <div className="flex items-center gap-2.5 mb-7">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(168,230,193,0.12)", border: "1px solid rgba(168,230,193,0.25)" }}
          >
            <Sprout size={18} color="#a8e6c1" />
          </div>
          <div>
            <div className="text-[14px]" style={{ fontFamily: SERIF, fontWeight: 600, color: "#fff" }}>
              Biodiverso
            </div>
            <div className="text-[9px] uppercase tracking-[0.18em]" style={{ color: "#7fbf95" }}>
              Operaciones
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <NavItem icon={<Home size={15} />} label="Inicio" />
          <NavItem icon={<FileText size={15} />} label="Cotizaciones" badge="14" />
          <NavItem icon={<Users size={15} />} label="Clientes" />
          <NavItem icon={<Sprout size={15} />} label="Especies" />
          <NavItem icon={<MapPin size={15} />} label="Predios" />
          <NavItem icon={<ShoppingBag size={15} />} label="Insumos" active />
          <NavItem icon={<BarChart3 size={15} />} label="Métricas" />
        </nav>

        <div
          className="rounded-xl p-3 mb-2 flex items-start gap-2"
          style={{ background: "rgba(255,210,140,0.08)", border: "1px solid rgba(255,210,140,0.18)" }}
        >
          <Lock size={12} color="#ffd28c" className="mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-[9px] uppercase tracking-[0.14em]" style={{ color: "#ffd28c" }}>
              Datos internos
            </div>
            <div className="text-[9px] mt-0.5 leading-relaxed" style={{ color: "rgba(233,239,230,0.55)" }}>
              Precios de compra. Solo para cotizaciones itemizadas con margen.
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-2 px-2 py-2 rounded-lg"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-[11px]"
            style={{ background: "rgba(168,230,193,0.18)", color: "#a8e6c1", fontFamily: SERIF, fontWeight: 600 }}
          >
            AC
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-medium truncate">Andrés Castro</div>
            <div className="text-[9px]" style={{ color: "#7fbf95" }}>Admin</div>
          </div>
          <Settings size={13} color="#7fbf95" />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className="px-7 py-4 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.3em] flex items-center gap-1.5"
              style={{ color: "#7fbf95" }}
            >
              <Lock size={9} />
              Gestión interna · Precios de compra
            </div>
            <h1
              className="text-[22px] mt-0.5"
              style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}
            >
              Insumos
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {/* Search */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg w-[220px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Search size={13} color="#7fbf95" />
              <span className="text-[11px]" style={{ color: "rgba(233,239,230,0.4)" }}>
                Buscar producto, proveedor...
              </span>
            </div>
            {/* Importar Excel */}
            <button
              className="px-3.5 py-2 rounded-lg flex items-center gap-1.5 text-[12px] font-medium"
              style={{
                background: "rgba(168,230,193,0.08)",
                border: "1px solid rgba(168,230,193,0.25)",
                color: "#a8e6c1",
              }}
            >
              <Upload size={13} strokeWidth={2} />
              Importar Excel
            </button>
            {/* Plantilla */}
            <button
              className="px-3 py-2 rounded-lg flex items-center gap-1.5 text-[12px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "rgba(233,239,230,0.6)",
              }}
            >
              <Download size={13} strokeWidth={2} />
              Plantilla
            </button>
            {/* Agregar */}
            <button
              className="px-3.5 py-2 rounded-lg flex items-center gap-1.5 text-[12px] font-medium"
              style={{
                background: "linear-gradient(180deg, #a8e6c1 0%, #6dc88a 100%)",
                color: "#03200f",
                boxShadow: "0 4px 14px rgba(108,200,138,0.25)",
              }}
            >
              <Plus size={13} strokeWidth={2.5} />
              Agregar insumo
            </button>
          </div>
        </header>

        {/* Info Excel */}
        <div
          className="mx-7 mt-4 px-4 py-3 rounded-xl flex items-start gap-3"
          style={{ background: "rgba(168,230,193,0.06)", border: "1px solid rgba(168,230,193,0.14)" }}
        >
          <AlertCircle size={15} color="#7fbf95" className="mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <div className="text-[11px] font-semibold" style={{ color: "#a8e6c1" }}>
              ¿Cómo importar insumos desde Excel?
            </div>
            <div className="text-[10px] mt-1 leading-relaxed" style={{ color: "rgba(233,239,230,0.6)" }}>
              1. Descarga la <strong style={{ color: "#a8e6c1" }}>Plantilla Excel</strong> con el botón de arriba.
              &nbsp;2. Rellena las columnas: <em>Categoría · Proveedor · Producto · Precio Compra · Unidad</em>.
              &nbsp;3. Guarda el archivo y súbelo con <strong style={{ color: "#a8e6c1" }}>Importar Excel</strong>.
              Los insumos aparecerán aquí automáticamente.
            </div>
          </div>
          <button style={{ color: "rgba(233,239,230,0.4)" }}>
            <X size={14} />
          </button>
        </div>

        {/* Filtros categoría */}
        <div className="px-7 pt-4 pb-2 flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <CatPill label="Todos" count={INSUMOS.length} active />
          {CATS.map((cat) => (
            <CatPill key={cat} label={cat} count={INSUMOS.filter((i) => i.categoria === cat).length} />
          ))}
        </div>

        {/* Tabla */}
        <div className="flex-1 overflow-auto px-7 pb-6 pt-2">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Thead */}
            <div
              className="grid px-4 py-2.5"
              style={{
                gridTemplateColumns: "1.4fr 1.6fr 2fr 1fr 0.8fr auto",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              {["Categoría", "Proveedor", "Producto", "Precio compra", "Unidad", ""].map((h, i) => (
                <div
                  key={i}
                  className="text-[10px] uppercase tracking-[0.14em] font-medium"
                  style={{ color: "#7fbf95" }}
                >
                  {h}
                </div>
              ))}
            </div>
            {/* Rows */}
            {displayed.map((item, i) => (
              <div
                key={i}
                className="grid px-4 py-3 items-center"
                style={{
                  gridTemplateColumns: "1.4fr 1.6fr 2fr 1fr 0.8fr auto",
                  borderBottom: i < displayed.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                }}
              >
                <div>
                  <span
                    className="text-[10px] px-2 py-1 rounded-full"
                    style={{ background: "rgba(168,230,193,0.12)", color: "#a8e6c1" }}
                  >
                    {item.categoria}
                  </span>
                </div>
                <div className="text-[12px]" style={{ color: "rgba(233,239,230,0.75)" }}>
                  {item.proveedor}
                </div>
                <div>
                  <div className="text-[12px] font-medium" style={{ color: "#f0f5ee" }}>
                    {item.producto}
                  </div>
                  {item.notas && (
                    <div className="text-[9px] mt-0.5" style={{ color: "#ffd28c" }}>
                      ⚠ {item.notas}
                    </div>
                  )}
                </div>
                <div
                  className="text-[13px] font-semibold"
                  style={{ fontFamily: SERIF, color: "#fff" }}
                >
                  {fmt(item.precioCompra)}
                </div>
                <div className="text-[11px]" style={{ color: "rgba(233,239,230,0.55)" }}>
                  /{item.unidad}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)", color: "#a8e6c1" }}
                  >
                    <Edit2 size={12} />
                  </button>
                  <button
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,100,100,0.08)", color: "#ff9090" }}
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <SummaryCard label="Total insumos" value={String(INSUMOS.length)} sub={`${CATS.length} categorías`} />
            <SummaryCard label="Proveedores únicos" value="7" sub="activos" />
            <SummaryCard label="Precio promedio" value="$34.2K" sub="por insumo" />
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, badge }: {
  icon: React.ReactNode; label: string; active?: boolean; badge?: string;
}) {
  return (
    <button
      className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left"
      style={{
        background: active ? "rgba(168,230,193,0.10)" : "transparent",
        color: active ? "#a8e6c1" : "rgba(233,239,230,0.65)",
      }}
    >
      {icon}
      <span className="text-[12px] font-medium flex-1">{label}</span>
      {badge && (
        <span
          className="text-[9px] px-1.5 py-0.5 rounded-full"
          style={{ background: "rgba(168,230,193,0.18)", color: "#a8e6c1" }}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

function CatPill({ label, count, active = false }: { label: string; count: number; active?: boolean }) {
  return (
    <button
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap flex-shrink-0"
      style={{
        background: active ? "rgba(168,230,193,0.15)" : "rgba(255,255,255,0.04)",
        border: active ? "1px solid rgba(168,230,193,0.35)" : "1px solid rgba(255,255,255,0.06)",
        color: active ? "#a8e6c1" : "rgba(233,239,230,0.65)",
      }}
    >
      {label}
      <span
        className="text-[9px] px-1 py-0.5 rounded-full"
        style={{ background: active ? "rgba(168,230,193,0.25)" : "rgba(255,255,255,0.08)", color: active ? "#a8e6c1" : "rgba(233,239,230,0.4)" }}
      >
        {count}
      </span>
    </button>
  );
}

function SummaryCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div
      className="rounded-xl px-4 py-3"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="text-[10px] uppercase tracking-[0.14em]" style={{ color: "#7fbf95" }}>
        {label}
      </div>
      <div className="text-[22px] mt-1" style={{ fontFamily: SERIF, fontWeight: 500, color: "#fff" }}>
        {value}
      </div>
      <div className="text-[10px] mt-0.5" style={{ color: "rgba(233,239,230,0.45)" }}>
        {sub}
      </div>
    </div>
  );
}
