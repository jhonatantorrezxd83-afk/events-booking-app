"use client";
import "./PillAccion.css";

interface PillAccionProps {
  icono: string;
  texto: string;
  onClick?: () => void;
}

export default function PillAccion({ icono, texto, onClick }: PillAccionProps) {
  return (
    <button className="pill-accion" onClick={onClick}>
      <img src={icono} alt={texto} width={15} height={15} />
      <span>{texto}</span>
    </button>
  );
}