import TarjetaEvento, { Evento } from "./TarjetaEvento";
import "./FilaCarrusel.css";

interface FilaCarruselProps {
  titulo: string;
  eventos: Evento[];
}

export default function FilaCarrusel({ titulo, eventos }: FilaCarruselProps) {
  return (
    <section className="fila-carrusel">
      <div className="fila-carrusel__cabecera">
        <h2 className="fila-carrusel__titulo">{titulo}</h2>
        <span
          className="fila-carrusel__ver-todo"
          style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
        >
          See all
          <img src="/flecha derecha.svg" alt="" width={12} height={12} />
        </span>
      </div>
      <div className="fila-carrusel__lista">
        {eventos.map((evento) => (
          <TarjetaEvento key={evento.id} evento={evento} />
        ))}
      </div>
    </section>
  );
}