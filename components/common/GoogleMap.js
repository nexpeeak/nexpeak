"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

export default function MultiMarkerMapInner() {
  const locations = [
    { lat: 28.4595, lng: 77.0266, name: "Two Horizon, Gurugram, 122002" },
    { lat: 28.66835, lng: 77.18651, name: "Vivekanand Puri, New Delhi, 110052" },
    { lat: 28.631451, lng: 77.21904, name: "Statesman House, Delhi 110001" },
  ];

  return (
    <MapContainer
      center={[28.6, 77.2]} // Central Delhi
      zoom={11}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
