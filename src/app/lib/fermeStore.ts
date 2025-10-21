"use client";
import { create } from "zustand";

export interface Ferme {
  id: number;
  nom: string;
  adresse?: string;
  description: string;
  coordonnees?: [number, number];
  categories: string[];
}

interface FermeState {
  fermes: Ferme[];
  loadFromServer: () => Promise<void>;
  addFerme: (ferme: Ferme) => Promise<void>;
  removeFerme: (id: number) => Promise<void>;
  updateFerme: (ferme: Ferme) => Promise<void>;
}

export const useFermeStore = create<FermeState>((set) => ({
  fermes: [],

  loadFromServer: async () => {
    const res = await fetch("/api/fermes");
    const data = await res.json();
    set({ fermes: data });
  },

  addFerme: async (ferme) => {
    const res = await fetch("/api/fermes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ferme),
    });
    if (!res.ok) throw new Error("UNAUTHORIZED");
    const r = await fetch("/api/fermes");
    set({ fermes: await r.json() });
  },

  removeFerme: async (id) => {
    const res = await fetch("/api/fermes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) throw new Error("UNAUTHORIZED");
    set((s) => ({ fermes: s.fermes.filter((f) => f.id !== id) }));
  },

  updateFerme: async (ferme) => {
    const res = await fetch("/api/fermes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ferme),
    });
    if (!res.ok) throw new Error("UNAUTHORIZED");
    const r = await fetch("/api/fermes");
    set({ fermes: await r.json() });
  },
}));
