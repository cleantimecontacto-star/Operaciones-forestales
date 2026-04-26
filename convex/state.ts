import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getState = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db.query("state").collect();
    if (rows.length === 0) return { data: {}, ts: 0 };
    const latest = rows.reduce((a, b) => (a.ts >= b.ts ? a : b));
    return { data: latest.data, ts: latest.ts };
  },
});

export const setState = mutation({
  args: {
    data: v.any(),
    ts: v.number(),
  },
  handler: async (ctx, { data, ts }) => {
    const rows = await ctx.db.query("state").collect();
    const incomingTs = Number(ts) || Date.now();
    const latest =
      rows.length > 0 ? rows.reduce((a, b) => (a.ts >= b.ts ? a : b)) : null;

    if (latest) {
      if (incomingTs <= latest.ts) {
        return { ok: false, reason: "stale", ts: latest.ts };
      }
      await ctx.db.patch(latest._id, { data, ts: incomingTs });
      for (const row of rows) {
        if (row._id !== latest._id) {
          await ctx.db.delete(row._id);
        }
      }
      return { ok: true, ts: incomingTs };
    }

    await ctx.db.insert("state", { data, ts: incomingTs });
    return { ok: true, ts: incomingTs };
  },
});
