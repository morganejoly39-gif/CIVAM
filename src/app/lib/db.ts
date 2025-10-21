import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const dbFile = path.join(process.cwd(), "data", "fermes.db");
if (!fs.existsSync(path.dirname(dbFile))) fs.mkdirSync(path.dirname(dbFile), { recursive: true });

const db = new Database(dbFile);

db.exec(`
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    expires_at INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS fermes (
    id INTEGER PRIMARY KEY,
    nom TEXT NOT NULL,
    adresse TEXT,
    description TEXT NOT NULL,
    latitude REAL,
    longitude REAL,
    categories TEXT
  );
`);

export default db;
