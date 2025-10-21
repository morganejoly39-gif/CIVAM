"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Icônes par défaut (sinon marqueurs invisibles)
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

type Ferme = {
  id: number;
  nom: string;
  adresse?: string;
  description: string;
  coordonnees?: [number, number];
  categories: string[];
};

const CATEGORY_COLORS: Record<string, string> = {
  "De ferme en ferme": "#6A994E",
  "En vie de ferme": "#F4A261",
  "De ferme en fête": "#A7C957",
  "Frangines 07": "#E9C46A",
  "Solidarité alimentaire": "#386641",
};

export default function Map({ fermes }: { fermes: Ferme[] }) {
  const center: [number, number] = [44.75, 4.39];

  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom style={{ height: "600px", width: "100%" }}>
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {fermes.map((ferme) =>
        ferme.coordonnees ? (
          <Marker
            key={ferme.id}
            position={ferme.coordonnees}
            icon={L.divIcon({
              className: "",
              html: `<div style="
                background-color: ${CATEGORY_COLORS[ferme.categories[0]] || "#999"};
                width: 16px; height: 16px; border-radius: 50%;
                border: 2px solid white; box-shadow: 0 0 0 1.5px #33333333;
              "></div>`,
              iconSize: [16, 16],
              iconAnchor: [8, 8],
            })}
          >
            <Popup>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[--accent-green] mb-1">{ferme.nom}</h3>
                {ferme.adresse && <p className="text-sm text-gray-500 mb-1">{ferme.adresse}</p>}
                <p className="text-sm text-gray-700">{ferme.description}</p>
              </div>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
}