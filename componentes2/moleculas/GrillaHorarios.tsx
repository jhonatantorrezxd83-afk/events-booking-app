import BotonHorario from "../atomos/BotonHorario";
import "./GrillaHorarios.css";

interface GrillaHorariosProps {
  titulo: string;
  horarios: string[];
  onSelectHora: (hora: string) => void;
}

export default function GrillaHorarios({
  titulo,
  horarios,
  onSelectHora,
}: GrillaHorariosProps) {
  return (
    <section className="grilla-horarios">
      <h3 className="grilla-horarios__titulo">{titulo}</h3>
      <div className="grilla-horarios__grid">
        {horarios.map((hora) => (
          <BotonHorario key={hora} hora={hora} onSelect={onSelectHora} />
        ))}
      </div>
    </section>
  );
}