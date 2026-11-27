import "./DatoResumen.css";

interface DatoResumenProps {
  label: string;
  valor: string;
}

export default function DatoResumen({ label, valor }: DatoResumenProps) {
  return (
    <div className="dato-resumen">
      <span className="dato-resumen__label">{label}</span>
      <span className="dato-resumen__valor">{valor}</span>
    </div>
  );
}