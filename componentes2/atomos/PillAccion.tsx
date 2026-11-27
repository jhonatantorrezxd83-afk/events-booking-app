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
      <span>{icono}</span>
      <span>{texto}</span>
    </button>
  );
}