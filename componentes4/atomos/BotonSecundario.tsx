"use client";
import "./BotonSecundario.css";

interface BotonSecundarioProps {
  texto: string;
  onClick: () => void;
}

export default function BotonSecundario({ texto, onClick }: BotonSecundarioProps) {
  return (
    <button type="button" className="boton-secundario" onClick={onClick}>
      {texto}
    </button>
  );
}