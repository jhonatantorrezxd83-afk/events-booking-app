import Link from "next/link";
import "./BarraNavegacionInferior.css";

export default function BarraNavegacionInferior() {
  return (
    <nav className="barra-inferior">
      <Link href="/" className="barra-inferior__item barra-inferior__item--activo">
        <img src="/home-2.svg" alt="Home" width={20} height={20} />
        <span>Home</span>
      </Link>
      <div className="barra-inferior__item">
        <img src="/discover.svg" alt="Explore" width={20} height={20} />
        <span>Explore</span>
      </div>
      <div className="barra-inferior__item">
        <img src="/search-normal.svg" alt="Search" width={20} height={20} />
        <span>Search</span>
      </div>
      <div className="barra-inferior__item">
        <img src="/heart.svg" alt="Saved" width={20} height={20} />
        <span>Saved</span>
      </div>
    </nav>
  );
}