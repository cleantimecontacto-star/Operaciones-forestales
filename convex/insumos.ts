import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ── Categorías de insumos ────────────────────────────────────────────────────

export const listInsumoCategories = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("insumoCategories")
      .withIndex("by_order")
      .filter((q) => q.eq(q.field("deletedAt"), undefined))
      .collect();
  },
});

export const addInsumoCategory = mutation({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    const all = await ctx.db.query("insumoCategories").collect();
    const maxOrder = all.length > 0 ? Math.max(...all.map((c) => c.order)) : 0;
    return await ctx.db.insert("insumoCategories", { name, order: maxOrder + 1 });
  },
});

export const renameInsumoCategory = mutation({
  args: { id: v.id("insumoCategories"), name: v.string() },
  handler: async (ctx, { id, name }) => {
    await ctx.db.patch(id, { name });
  },
});

export const deleteInsumoCategory = mutation({
  args: { id: v.id("insumoCategories") },
  handler: async (ctx, { id }) => {
    const ts = Date.now();
    // Marcar todos los insumos de esta categoría como eliminados
    const items = await ctx.db
      .query("insumos")
      .withIndex("by_categoria", (q) => q.eq("categoriaId", id))
      .collect();
    for (const item of items) {
      if (!item.deletedAt) await ctx.db.patch(item._id, { deletedAt: ts });
    }
    await ctx.db.patch(id, { deletedAt: ts });
  },
});

// ── Insumos ──────────────────────────────────────────────────────────────────

/** Lista todos los insumos activos, opcionalmente filtrados por categoría. */
export const listInsumos = query({
  args: { categoriaId: v.optional(v.id("insumoCategories")) },
  handler: async (ctx, { categoriaId }) => {
    const base = ctx.db
      .query("insumos")
      .withIndex("by_deletedAt", (q) => q.eq("deletedAt", undefined));

    const items = categoriaId
      ? await base
          .filter((q) => q.eq(q.field("categoriaId"), categoriaId))
          .collect()
      : await base.collect();

    return items;
  },
});

/** Agrega un nuevo insumo. */
export const addInsumo = mutation({
  args: {
    categoriaId: v.id("insumoCategories"),
    proveedor: v.string(),
    producto: v.string(),
    precioCompra: v.number(),
    unidad: v.string(),
    notas: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("insumos", args);
  },
});

/** Edita un insumo existente. */
export const editInsumo = mutation({
  args: {
    id: v.id("insumos"),
    proveedor: v.optional(v.string()),
    producto: v.optional(v.string()),
    precioCompra: v.optional(v.number()),
    unidad: v.optional(v.string()),
    notas: v.optional(v.string()),
    categoriaId: v.optional(v.id("insumoCategories")),
  },
  handler: async (ctx, { id, ...patch }) => {
    await ctx.db.patch(id, patch);
  },
});

/** Elimina un insumo (soft delete). */
export const deleteInsumo = mutation({
  args: { id: v.id("insumos") },
  handler: async (ctx, { id }) => {
    await ctx.db.patch(id, { deletedAt: Date.now() });
  },
});

/**
 * Importa insumos desde un array (usado al subir archivo Excel procesado).
 * Cada fila debe tener: categoria (nombre), proveedor, producto, precioCompra, unidad.
 * Si la categoría no existe, la crea automáticamente.
 */
export const importInsumos = mutation({
  args: {
    rows: v.array(
      v.object({
        categoria: v.string(),
        proveedor: v.string(),
        producto: v.string(),
        precioCompra: v.number(),
        unidad: v.string(),
        notas: v.optional(v.string()),
      })
    ),
  },
  handler: async (ctx, { rows }) => {
    // Mapa de nombre de categoría → id
    const catMap: Record<string, string> = {};

    const existingCats = await ctx.db.query("insumoCategories").collect();
    for (const cat of existingCats) {
      if (!cat.deletedAt) catMap[cat.name.toLowerCase()] = cat._id;
    }

    let inserted = 0;
    for (const row of rows) {
      const key = row.categoria.trim().toLowerCase();
      if (!catMap[key]) {
        const all = await ctx.db.query("insumoCategories").collect();
        const maxOrder = all.length > 0 ? Math.max(...all.map((c) => c.order)) : 0;
        const newId = await ctx.db.insert("insumoCategories", {
          name: row.categoria.trim(),
          order: maxOrder + 1,
        });
        catMap[key] = newId;
      }
      await ctx.db.insert("insumos", {
        categoriaId: catMap[key] as any,
        proveedor: row.proveedor.trim(),
        producto: row.producto.trim(),
        precioCompra: row.precioCompra,
        unidad: row.unidad.trim(),
        notas: row.notas?.trim(),
      });
      inserted++;
    }
    return { inserted };
  },
});
