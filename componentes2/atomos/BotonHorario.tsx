"use client";
import "./BotonHorario.css";

interface BotonHorarioProps {
  hora: string;
  onSelect: (hora: string) => void;
}

export default function BotonHorario({ hora, onSelect }: BotonHorarioProps) {
  return (
    <button className="boton-horario" onClick={() => onSelect(hora)}>
      {hora}
    </button>
  );
}