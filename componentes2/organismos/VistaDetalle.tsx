"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import HeroDetalle from "../moleculas/HeroDetalle";
import PillAccion from "../atomos/PillAccion";
import GrillaHorarios from "../moleculas/GrillaHorarios";
import SeccionMapaContacto from "../moleculas/SeccionMapaContacto";
import "./VistaDetalle.css";

const HORARIOS_LUNCH = [
  "1:00 pm", "1:30 pm", "2:00 pm",
  "2:30 pm", "3:00 pm", "3:30 pm",
  "4:00 pm", "4:30 pm", "5:30 pm",
];

const HORARIOS_DINNER = [
  "6:00 pm", "6:30 pm", "7:00 pm",
  "7:30 pm", "8:00 pm", "8:30 pm",
  "9:00 pm", "9:30 pm", "10:00 pm",
  "10:30 pm", "11:00 pm", "11:30 pm",
];

export default function VistaDetalle() {
  const router = useRouter();
  const params = useSearchParams();

  const titulo = params.get("titulo") || "Leceister Square kitchen";
  const ubicacion = params.get("ubicacion") || "31-36 Leicester Square, England";
  const imagen =
    params.get("imagen") ||
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80";

  const [invitados, setInvitados] = useState("2 Guests");
  const [guardado, setGuardado] = useState(false);

  const handleSeleccionarHora = (hora: string) => {
    const query = new URLSearchParams({
      titulo,
      ubicacion,
      imagen,
      invitados,
      fecha: "Wed, July 18",
      hora,
    }).toString();
    router.push(`/reservar?${query}`);
  };

  return (
    <main className="vista-detalle">
      <HeroDetalle imagen={imagen} titulo={titulo} />

      <div className="vista-detalle__cuerpo">
        <h1 className="vista-detalle__titulo">{titulo}</h1>
        <p className="vista-detalle__ubicacion">📍 {ubicacion}</p>

        <div className="vista-detalle__acciones">
          <PillAccion icono="↗" texto="Share" />
          <PillAccion
            icono={guardado ? "❤️" : "🤍"}
            texto={guardado ? "Saved" : "Save"}
            onClick={() => setGuardado(!guardado)}
          />
          <PillAccion icono="🏅" texto="100pts" />
        </div>

        <div className="vista-detalle__filtros">
          <select
            className="vista-detalle__select"
            value={invitados}
            onChange={(e) => setInvitados(e.target.value)}
          >
            <option value="1 Guest">👥 1 Guest</option>
            <option value="2 Guests">👥 2 Guests</option>
            <option value="4 Guests">👥 4 Guests</option>
            <option value="6 Guests">👥 6 Guests</option>
          </select>
          <span className="vista-detalle__fecha">📅 Today</span>
        </div>

        <GrillaHorarios
          titulo="Lunch"
          horarios={HORARIOS_LUNCH}
          onSelectHora={handleSeleccionarHora}
        />

        <GrillaHorarios
          titulo="Dinner"
          horarios={HORARIOS_DINNER}
          onSelectHora={handleSeleccionarHora}
        />

        <SeccionMapaContacto titulo={titulo} />
      </div>
    </main>
  );
}