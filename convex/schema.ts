import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  state: defineTable({
    data: v.any(),
    ts: v.number(),
  }),

  // Categorías de documentos (editables por el usuario)
  docCategories: defineTable({
    name: v.string(),
    order: v.number(),
    deletedAt: v.optional(v.number()),
  })
    .index("by_order", ["order"])
    .index("by_deletedAt", ["deletedAt"]),

  // Documentos de la empresa (archivos en Convex Storage)
  documents: defineTable({
    name: v.string(),
    categoryId: v.id("docCategories"),
    storageId: v.id("_storage"),
    fileType: v.string(),
    fileSize: v.number(),
    uploadedAt: v.string(),
    deletedAt: v.optional(v.number()),
  })
    .index("by_category", ["categoryId"])
    .index("by_deletedAt", ["deletedAt"]),

  // ── INSUMOS ──────────────────────────────────────────────────────────────
  // Categorías de insumos (ej: Plantación, Herbicidas, Fertilizantes, etc.)
  insumoCategories: defineTable({
    name: v.string(),
    order: v.number(),
    deletedAt: v.optional(v.number()),
  })
    .index("by_order", ["order"])
    .index("by_deletedAt", ["deletedAt"]),

  // Lista de insumos internos: proveedor, producto, precio de compra.
  // Datos PRIVADOS — solo se comparten en cotizaciones itemizadas (con margen aplicado).
  insumos: defineTable({
    categoriaId: v.id("insumoCategories"),
    proveedor: v.string(),
    producto: v.string(),
    precioCompra: v.number(),
    unidad: v.string(),
    notas: v.optional(v.string()),
    deletedAt: v.optional(v.number()),
  })
    .index("by_categoria", ["categoriaId"])
    .index("by_deletedAt", ["deletedAt"]),
});
