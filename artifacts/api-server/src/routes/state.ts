import { Router, type IRouter } from "express";
import { pool } from "../lib/db";

const router: IRouter = Router();

router.get("/state", async (_req, res) => {
  try {
    const result = await pool.query<{ data: unknown; ts: string }>(
      "SELECT data, ts FROM app_state WHERE id = $1",
      ["default"],
    );
    if (result.rows.length === 0) {
      res.json({ data: {}, ts: 0 });
      return;
    }
    const row = result.rows[0]!;
    res.json({ data: row.data ?? {}, ts: Number(row.ts ?? 0) });
  } catch (err) {
    res.status(500).json({ error: "load_failed", detail: String(err) });
  }
});

router.put("/state", async (req, res) => {
  try {
    const body = req.body ?? {};
    const ts = typeof body.ts === "number" ? body.ts : Date.now();
    await pool.query(
      `INSERT INTO app_state (id, data, ts, updated_at)
       VALUES ('default', $1::jsonb, $2, NOW())
       ON CONFLICT (id) DO UPDATE
         SET data = EXCLUDED.data,
             ts = EXCLUDED.ts,
             updated_at = NOW()`,
      [JSON.stringify(body), ts],
    );
    res.json({ ok: true, ts });
  } catch (err) {
    res.status(500).json({ error: "save_failed", detail: String(err) });
  }
});

export default router;
