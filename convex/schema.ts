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
});
