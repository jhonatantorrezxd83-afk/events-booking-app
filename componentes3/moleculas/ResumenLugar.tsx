import "./ResumenLugar.css";

interface ResumenLugarProps {
  titulo: string;
  ubicacion: string;
  imagen: string;
  invitados: string;
  fecha: string;
}

export default function ResumenLugar({
  titulo,
  ubicacion,
  imagen,
  invitados,
  fecha,
}: ResumenLugarProps) {
  return (
    <section className="resumen-lugar">
      <img src={imagen} alt={titulo} className="resumen-lugar__img" />
      <div className="resumen-lugar__info">
        <h2 className="resumen-lugar__titulo">{titulo}</h2>
        <p className="resumen-lugar__meta">
          <img src="/location.svg" alt="Ubicación" width={13} height={13} />
          <span>{ubicacion}</span>
        </p>
        <div className="resumen-lugar__meta">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <img src="/grupo_personas.svg" alt="Invitados" width={14} height={14} />
            {invitados}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <img src="/calendar.svg" alt="Fecha" width={14} height={14} />
            {fecha}
          </span>
        </div>
      </div>
    </section>
  );
}