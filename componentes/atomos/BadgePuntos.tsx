import "./BadgePuntos.css";

interface BadgePuntosProps {
  puntos: number;
}

export default function BadgePuntos({ puntos }: BadgePuntosProps) {
  return (
    <div className="badge-puntos">
      <img src="/medalla.png" alt="Medalla" width={16} height={16} />
      <span>{puntos} Points</span>
    </div>
  );
}