"use client";
import { useState } from "react";
import Link from "next/link";
import "./TarjetaEvento.css";

export interface Evento {
  id: string;
  titulo: string;
  categoria: string;
  precio: number;
  rating: string;
  ubicacion: string;
  imagen: string;
  fecha?: string;
  hora?: string;
}

interface TarjetaEventoProps {
  evento: Evento;
}

export default function TarjetaEvento({ evento }: TarjetaEventoProps) {
  const [favorito, setFavorito] = useState(true);

  const query = new URLSearchParams({
    eventoId: evento.id,
    titulo: evento.titulo,
    ubicacion: evento.ubicacion,
    imagen: evento.imagen,
  }).toString();

  return (
    <article className="tarjeta-evento">
      <div className="tarjeta-evento__imagen-box">
        <Link href={`/detalle?${query}`}>
          <img
            src={evento.imagen}
            alt={evento.titulo}
            className="tarjeta-evento__imagen"
          />
        </Link>
        <span className="tarjeta-evento__precio">$ {evento.precio}</span>
        <button
          className="tarjeta-evento__favorito"
          onClick={() => setFavorito(!favorito)}
          aria-label="Guardar"
        >
          {favorito ? "❤️" : "🤍"}
        </button>
      </div>

      <Link href={`/detalle?${query}`}>
        <div className="tarjeta-evento__fila-titulo">
          <h3 className="tarjeta-evento__titulo">{evento.titulo}</h3>
          <span className="tarjeta-evento__rating">⭐ {evento.rating}</span>
        </div>
        <p className="tarjeta-evento__meta">📍 {evento.ubicacion}</p>
        {evento.fecha && (
          <p className="tarjeta-evento__meta">
            <span>📅 {evento.fecha}</span>
            <span>🕒 {evento.hora}</span>
          </p>
        )}
      </Link>
    </article>
  );
}