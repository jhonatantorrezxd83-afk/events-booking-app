"use client";
import { useState } from "react";
import CabeceraUsuario from "../moleculas/CabeceraUsuario";
import BannerPuntos from "../moleculas/BannerPuntos";
import FilaCarrusel from "../moleculas/FilaCarrusel";
import BarraNavegacionInferior from "../moleculas/BarraNavegacionInferior";
import { Evento } from "../moleculas/TarjetaEvento";
import "./VistaHome.css";

const EVENTOS_INICIALES: Evento[] = [
  {
    id: "1",
    titulo: "Leceister Square kitchen",
    categoria: "Fine Dining",
    precio: 270,
    rating: "4.9",
    ubicacion: "31-36 Leicester Square, England",
    imagen: "/image 1.png",
  },
  {
    id: "2",
    titulo: "KöD London",
    categoria: "Fine Dining",
    precio: 290,
    rating: "4.8",
    ubicacion: "9A Devonshire Square, England",
    imagen: "/image 1 (1).png",
  },
  {
    id: "3",
    titulo: "Ormer Mayfair",
    categoria: "Fine Dining",
    precio: 240,
    rating: "4.8",
    ubicacion: "7-12 Half Moon Street Flemings, England",
    imagen: "/image 1 (2).png",
  },
  {
    id: "4",
    titulo: "PPA Denver Opens at Gates",
    categoria: "Live Sport",
    precio: 270,
    rating: "4.9",
    ubicacion: "Gates Tennis Center, Denver, CO",
    fecha: "July 12-16, 2023",
    hora: "8 PM",
    imagen: "/image 1 (3).png",
  },
  {
    id: "5",
    titulo: "Cactus 3rd Annual Derby",
    categoria: "Live Sport",
    precio: 100,
    rating: "4.8",
    ubicacion: "Legacy Park, Mesa, AZ",
    fecha: "July 21-23, 2023",
    hora: "6 PM",
    imagen: "/image 1 (4).png",
  },
  {
    id: "6",
    titulo: "Sparta Sport & Entertainment",
    categoria: "Live Sport",
    precio: 240,
    rating: "4.8",
    ubicacion: "Blue Sport Stable, Superior, CO",
    fecha: "July 22, 2023",
    hora: "10 PM",
    imagen: "/image 1 (5).png",
  },
  {
    id: "7",
    titulo: "Gambler's Run Music Festival",
    categoria: "Music Events",
    precio: 150,
    rating: "4.9",
    ubicacion: "The Crown Room, Crystal Bay, NV",
    fecha: "July 14-16, 2023",
    hora: "7 PM",
    imagen: "/image 1 (6).png",
  },
  {
    id: "8",
    titulo: "DakhaBrakha",
    categoria: "Music Events",
    precio: 200,
    rating: "4.8",
    ubicacion: "Academy of Music Theatre, MA",
    fecha: "July 26, 2023",
    hora: "7 PM",
    imagen: "/image 1 (7).png",
  },
  {
    id: "9",
    titulo: "Sunday Groove 07.16",
    categoria: "Music Events",
    precio: 240,
    rating: "4.8",
    ubicacion: "The Rabbit Hole, New Orleans, LA",
    fecha: "July 22-26, 2023",
    hora: "10 PM",
    imagen: "/image 1 (8).png",
  },
];

export default function VistaHome() {
  const [puntos, setPuntos] = useState(850);
  const [reclamado, setReclamado] = useState(false);

  const handleClaim = () => {
    if (!reclamado) {
      setPuntos((prev) => prev + 50);
      setReclamado(true);
    }
  };

  return (
    <main className="vista-home">
      <div className="vista-home__contenido">
        <CabeceraUsuario puntos={puntos} />
        <BannerPuntos
          puntos={puntos}
          reclamado={reclamado}
          onClaim={handleClaim}
        />
        <FilaCarrusel
          titulo="Fine Dining"
          eventos={EVENTOS_INICIALES.filter((e) => e.categoria === "Fine Dining")}
        />
        <FilaCarrusel
          titulo="Live Sport"
          eventos={EVENTOS_INICIALES.filter((e) => e.categoria === "Live Sport")}
        />
        <FilaCarrusel
          titulo="Music Events"
          eventos={EVENTOS_INICIALES.filter((e) => e.categoria === "Music Events")}
        />
      </div>
      <BarraNavegacionInferior />
    </main>
  );
}