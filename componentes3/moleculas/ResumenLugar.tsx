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
        <p className="resumen-lugar__meta">📍 {ubicacion}</p>
        <div className="resumen-lugar__meta">
          <span>👥 {invitados}</span>
          <span>📅 {fecha}</span>
        </div>
      </div>
    </section>
  );
}