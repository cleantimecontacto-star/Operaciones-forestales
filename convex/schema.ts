import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  state: defineTable({
    data: v.any(),
    ts: v.number(),
  }),
});
