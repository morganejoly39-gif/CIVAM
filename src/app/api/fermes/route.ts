import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { requireUser } from "@/app/lib/auth";

export async function GET() {
  const fermes = db.prepare("SELECT * FROM fermes").all();
  const result = fermes.map((f: any) => ({
    ...f,
    coordonnees: f.latitude != null && f.longitude != null ? [f.latitude, f.longitude] : undefined,
    categories: f.categories ? f.categories.split(",") : [],
  }));
  return NextResponse.json(result);
}

export async function POST(req: Request) {
  await requireUser();
  const ferme = await req.json();
  db.prepare(`
    INSERT INTO fermes (nom, adresse, description, latitude, longitude, categories)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(
    ferme.nom,
    ferme.adresse || null,
    ferme.description,
    ferme.coordonnees ? ferme.coordonnees[0] : null,
    ferme.coordonnees ? ferme.coordonnees[1] : null,
    (ferme.categories || []).join(",")
  );
  return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
  await requireUser();
  const ferme = await req.json();
  db.prepare(`
    UPDATE fermes
    SET nom = ?, adresse = ?, description = ?, latitude = ?, longitude = ?, categories = ?
    WHERE id = ?
  `).run(
    ferme.nom,
    ferme.adresse || null,
    ferme.description,
    ferme.coordonnees ? ferme.coordonnees[0] : null,
    ferme.coordonnees ? ferme.coordonnees[1] : null,
    (ferme.categories || []).join(","),
    ferme.id
  );
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  await requireUser();
  const { id } = await req.json();
  db.prepare("DELETE FROM fermes WHERE id = ?").run(id);
  return NextResponse.json({ success: true });
}
