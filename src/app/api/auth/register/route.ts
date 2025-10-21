import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { hashPassword } from "@/app/lib/auth";

/**
 * ENDPOINT NON SECURISE ! NE DOIT PAS ETRE DECOMMENTE EN PRODUCTION
 * 
 * Pour enregistrer un nouvel utilisateur.
 * 1. Decommentez ce code
 * 2. lancer le serveur Next.js en mode développement
 * 3. Envoyer une requête POST avec un JSON contenant "username" et "password" dans le corps de la requête.
 * Exemple de requête avec la commande curl :
 * "curl -X POST -H "Content-Type: application/json" -d '{"username":"newuser", "password":"newpassword"}' http://localhost:3000/api/auth/register"
 */


// export async function POST(req: Request) {
//   const { username, password } = await req.json();
//   if (!username || !password) return NextResponse.json({ error: "BAD_REQUEST" }, { status: 400 });

//   const password_hash = await hashPassword(password);
//   try {
//     db.prepare("INSERT INTO users (username, password_hash) VALUES (?, ?)").run(username, password_hash);
//   } catch (e) {
//     return NextResponse.json({ error: "USERNAME_TAKEN" }, { status: 409 });
//   }
//   return NextResponse.json({ success: true });
// }
