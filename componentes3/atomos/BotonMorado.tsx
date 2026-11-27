"use client";
import "./BotonMorado.css";

interface BotonMoradoProps {
  texto: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export default function BotonMorado({
  texto,
  type = "button",
  disabled = false,
  onClick,
}: BotonMoradoProps) {
  return (
    <button
      type={type}
      className="boton-morado"
      disabled={disabled}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}