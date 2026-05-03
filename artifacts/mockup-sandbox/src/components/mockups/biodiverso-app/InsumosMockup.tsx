import { Lock, Package, ChevronRight, Plus, FileText, Home, Users, BarChart3, Tag, ShoppingBag, Leaf, TreePine, Droplets } from "lucide-react";

const FONT_LINK = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&display=swap";
if (typeof document !== "undefined" && !document.querySelector(`link[href="${FONT_LINK}"]`)) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = FONT_LINK;
  document.head.appendChild(link);
}

const SANS = "'DM Sans', sans-serif";
const DISPLAY = "'Bricolage Grotesque', 'DM Sans', sans-serif";

const CREAM = "#fdfaf3";
const SAGE = "#e8f0d9";
const FOREST = "#1f3d2a";
const LIME = "#a8e063";
const SOIL = "#5b4a36";
const MUTED = "#8a9e8e";

type Insumo = {
  producto: string;
  proveedor: string;
  precioCompra: number;
  unidad: string;
};

type Categoria = {
  nombre: string;
  icono: React.ReactNode;
  items: Insumo[];
};

const CATEGORIAS: Categoria[] = [
  {
    nombre: "Plantación",
    icono: <TreePine size={13} />,
    items: [
      { producto: "Planta pino radiata 1+0", proveedor: "Vivero Los Boldos", precioCompra: 120, unidad: "un" },
      { producto: "Planta eucalipto nitens", proveedor: "Vivero Arauco", precioCompra: 95, unidad: "un" },
      { producto: "Planta lenga nativa", proveedor: "Vivero Austral", precioCompra: 380, unidad: "un" },
    ],
  },
  {
    nombre: "Herbicidas",
    icono: <Droplets size={13} />,
    items: [
      { producto: "Roundup Max 68.8%", proveedor: "Syngenta Chile", precioCompra: 8500, unidad: "kg" },
      { producto: "Garlon 400", proveedor: "Agroquim", precioCompra: 12000, unidad: "L" },
      { producto: "Ally 60 WG", proveedor: "Corteva", precioCompra: 45000, unidad: "kg" },
    ],
  },
  {
    nombre: "Fertilizantes",
    icono: <Leaf size={13} />,
    items: [
      { producto: "NPK 12-24-12 granulado", proveedor: "Coarsa", precioCompra: 450, unidad: "kg" },
      { producto: "Urea 46%", proveedor: "Coarsa", precioCompra: 380, unidad: "kg" },
    ],
  },
  {
    nombre: "Mano de obra",
    icono: <Users size={13} />,
    items: [
      { producto: "Plantación manual", proveedor: "Contratista Martínez", precioCompra: 180000, unidad: "ha" },
      { producto: "Roce manual", proveedor: "Contratista García", precioCompra: 95000, unidad: "ha" },
    ],
  },
];

function fmt(n: number) {
  return "$" + n.toLocaleString("es-CL");
}

export function InsumosMockup() {
  const proyecto = "Predio Los Maitenes";
  const activaCat = 0;

  return (
    <div
      className="w-full h-full overflow-hidden flex flex-col"
      style={{ background: CREAM, fontFamily: SANS, color: FOREST }}
    >
      {/* Header */}
      <div
        className="px-5 pt-5 pb-3 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${SAGE}` }}
      >
        <div>
          <div
            className="text-[10px] uppercase tracking-[0.18em] mb-0.5"
            style={{ color: MUTED, fontFamily: DISPLAY }}
          >
            Insumos · Interno
          </div>
          <div
            className="text-[17px] leading-tight"
            style={{ fontFamily: DISPLAY, fontWeight: 700, color: FOREST }}
          >
            {proyecto}
          </div>
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl"
          style={{ background: "#fff3cd", border: "1px solid #f5d87a" }}
        >
          <Lock size={11} color="#8a6a00" strokeWidth={2.5} />
          <span className="text-[10px] font-semibold" style={{ color: "#8a6a00" }}>
            Privado
          </span>
        </div>
      </div>

      {/* Aviso interno */}
      <div
        className="mx-5 mt-3 px-3 py-2 rounded-xl flex items-start gap-2"
        style={{ background: "#fff8e1", border: "1px solid #f5d87a" }}
      >
        <Lock size={13} color="#8a6a00" strokeWidth={2} className="mt-0.5 flex-shrink-0" />
        <p className="text-[10px] leading-relaxed" style={{ color: "#8a6a00" }}>
          Precios de <strong>compra internos</strong>. No mostrar al cliente sin aplicar margen. Usa "Generar cotización" para obtener precios con margen.
        </p>
      </div>

      {/* Tabs categoría */}
      <div className="px-5 pt-3 pb-1 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {CATEGORIAS.map((cat, i) => (
          <button
            key={cat.nombre}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap flex-shrink-0"
            style={{
              background: i === activaCat ? FOREST : SAGE,
              color: i === activaCat ? LIME : SOIL,
              border: i === activaCat ? `1.5px solid ${FOREST}` : "1.5px solid transparent",
            }}
          >
            {cat.icono}
            {cat.nombre}
          </button>
        ))}
      </div>

      {/* Lista insumos */}
      <div className="flex-1 overflow-y-auto px-5 pt-3 pb-2 flex flex-col gap-2">
        {CATEGORIAS[activaCat].items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-3 flex items-center gap-3"
            style={{ background: "#fff", border: `1.5px solid ${SAGE}` }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: SAGE }}
            >
              <Package size={16} color={FOREST} />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-[13px] font-semibold truncate"
                style={{ color: FOREST, fontFamily: DISPLAY }}
              >
                {item.producto}
              </div>
              <div className="text-[10px] mt-0.5 flex items-center gap-1" style={{ color: MUTED }}>
                <Tag size={9} />
                {item.proveedor}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div
                className="text-[13px] font-bold"
                style={{ color: FOREST, fontFamily: DISPLAY }}
              >
                {fmt(item.precioCompra)}
              </div>
              <div className="text-[9px] mt-0.5" style={{ color: MUTED }}>
                /{item.unidad}
              </div>
            </div>
          </div>
        ))}

        {/* Agregar */}
        <button
          className="rounded-2xl p-3 flex items-center justify-center gap-2 text-[12px] font-semibold"
          style={{
            background: "transparent",
            border: `1.5px dashed ${MUTED}`,
            color: MUTED,
          }}
        >
          <Plus size={14} strokeWidth={2.5} />
          Agregar insumo
        </button>
      </div>

      {/* Botón generar cotización */}
      <div className="px-5 pt-2 pb-3">
        <button
          className="w-full py-3 flex items-center justify-center gap-2 text-[13px] font-semibold rounded-2xl"
          style={{
            background: FOREST,
            color: CREAM,
            fontFamily: DISPLAY,
          }}
        >
          <FileText size={15} strokeWidth={2} />
          Generar cotización itemizada
          <ChevronRight size={15} className="ml-1" />
        </button>
        <p className="text-center text-[9px] mt-1.5" style={{ color: MUTED }}>
          Se aplicará margen automático sobre precios de compra
        </p>
      </div>

      {/* Nav */}
      <div
        className="grid grid-cols-4 px-3 pt-2 pb-3 mx-3 mb-3 rounded-2xl"
        style={{ background: FOREST }}
      >
        <NavBtn icon={<Home size={17} />} label="inicio" />
        <NavBtn icon={<FileText size={17} />} label="cotizar" />
        <NavBtn icon={<ShoppingBag size={17} />} label="insumos" active />
        <NavBtn icon={<BarChart3 size={17} />} label="datos" />
      </div>
    </div>
  );
}

function NavBtn({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button className="flex flex-col items-center gap-1 py-1">
      <div style={{ color: active ? LIME : "rgba(253,250,243,0.45)" }}>{icon}</div>
      <span
        className="text-[8px] font-semibold uppercase tracking-wide"
        style={{ color: active ? LIME : "rgba(253,250,243,0.45)" }}
      >
        {label}
      </span>
    </button>
  );
}
