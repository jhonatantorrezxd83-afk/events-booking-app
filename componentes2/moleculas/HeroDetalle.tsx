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
          <img
            src="/flecha.svg"
            alt="Volver"
            width={16}
            height={16}
            style={{ filter: "invert(1)" }}
          />
        </button>
        <button className="hero-detalle__btn" aria-label="Opciones">
          <img src="/3_puntos.svg" alt="Opciones" width={16} height={16} />
        </button>
      </div>
      <div
        className="hero-detalle__galeria"
        style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
      >
        <img src="/galeria.svg" alt="Galería" width={15} height={15} />
        <span>View All (5)</span>
      </div>
    </div>
  );
}