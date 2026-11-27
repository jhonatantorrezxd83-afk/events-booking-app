"use client";
import { useRouter } from "next/navigation";
import "./HeroDetalle.css";

interface HeroDetalleProps {
  imagen: string;
  titulo: string;
}

export default function HeroDetalle({ imagen, titulo }: HeroDetalleProps) {
  const router = useRouter();

  return (
    <div className="hero-detalle">
      <img src={imagen} alt={titulo} className="hero-detalle__img" />
      <div className="hero-detalle__controles">
        <button
          className="hero-detalle__btn"
          onClick={() => router.back()}
          aria-label="Volver"
        >
          ‹
        </button>
        <button className="hero-detalle__btn" aria-label="Opciones">
          ⋮
        </button>
      </div>
      <div className="hero-detalle__galeria">🖼️ View All (5)</div>
    </div>
  );
}