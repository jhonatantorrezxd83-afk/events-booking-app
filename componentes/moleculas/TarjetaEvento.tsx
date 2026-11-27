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
          <img
            src={favorito ? "/heartrojo.svg" : "/heart.svg"}
            alt="Favorito"
            width={16}
            height={16}
          />
        </button>
      </div>

      <Link href={`/detalle?${query}`}>
        <div className="tarjeta-evento__fila-titulo">
          <h3 className="tarjeta-evento__titulo">{evento.titulo}</h3>
          <span
            className="tarjeta-evento__rating"
            style={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            <img src="/estrella.svg" alt="Rating" width={13} height={13} />
            {evento.rating}
          </span>
        </div>
        <p className="tarjeta-evento__meta">
          <img src="/location.svg" alt="Ubicación" width={12} height={12} />
          <span>{evento.ubicacion}</span>
        </p>
        {evento.fecha && (
          <p className="tarjeta-evento__meta">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <img src="/calendar.svg" alt="Fecha" width={12} height={12} />
              {evento.fecha}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <img src="/clock.svg" alt="Hora" width={12} height={12} />
              {evento.hora}
            </span>
          </p>
        )}
      </Link>
    </article>
  );
}