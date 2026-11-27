import "./BadgePuntos.css";

interface BadgePuntosProps {
  puntos: number;
}

export default function BadgePuntos({ puntos }: BadgePuntosProps) {
  return (
    <div className="badge-puntos">
      <span>🏅</span>
      <span>{puntos} Points</span>
    </div>
  );
}