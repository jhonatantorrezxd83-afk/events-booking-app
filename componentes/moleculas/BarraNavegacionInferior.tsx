import Link from "next/link";
import "./BarraNavegacionInferior.css";

export default function BarraNavegacionInferior() {
  return (
    <nav className="barra-inferior">
      <Link href="/" className="barra-inferior__item barra-inferior__item--activo">
        <span className="barra-inferior__icono">🏠</span>
        <span>Home</span>
      </Link>
      <div className="barra-inferior__item">
        <span className="barra-inferior__icono">🧭</span>
        <span>Explore</span>
      </div>
      <div className="barra-inferior__item">
        <span className="barra-inferior__icono">🔍</span>
        <span>Search</span>
      </div>
      <div className="barra-inferior__item">
        <span className="barra-inferior__icono">🤍</span>
        <span>Saved</span>
      </div>
    </nav>
  );
}