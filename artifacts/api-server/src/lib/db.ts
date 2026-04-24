import pg from "pg";
import { logger } from "./logger";

const { Pool } = pg;

const connectionString = process.env["DATABASE_URL"];
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required");
}

export const pool = new Pool({ connectionString });

export async function ensureSchema(): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS app_state (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL DEFAULT '{}'::jsonb,
      ts BIGINT NOT NULL DEFAULT 0,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  await pool.query(`
    INSERT INTO app_state (id, data, ts)
    VALUES ('default', '{}'::jsonb, 0)
    ON CONFLICT (id) DO NOTHING;
  `);
  logger.info("Database schema ensured");
}
