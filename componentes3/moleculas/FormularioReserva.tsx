"use client";
import { useState } from "react";
import CampoTexto from "../atomos/CampoTexto";
import BotonMorado from "../atomos/BotonMorado";
import "./FormularioReserva.css";

export interface DatosReserva {
  nombre: string;
  email: string;
  telefono: string;
  ocasion: string;
  solicitud: string;
}

interface FormularioReservaProps {
  onProceed: (datos: DatosReserva) => void;
}

export default function FormularioReserva({ onProceed }: FormularioReservaProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ocasion, setOcasion] = useState("Birthday");
  const [solicitud, setSolicitud] = useState("");
  const [acepta, setAcepta] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acepta) return;
    onProceed({ nombre, email, telefono, ocasion, solicitud });
  };

  return (
    <form className="formulario-reserva" onSubmit={handleSubmit}>
      <h3 className="formulario-reserva__titulo">Dinner Details</h3>

      <CampoTexto
        label="Full Name"
        placeholder="Enter your Full Name"
        value={nombre}
        required
        onChange={setNombre}
      />

      <CampoTexto
        label="Email Address"
        type="email"
        placeholder="Enter your Email Address"
        value={email}
        required
        onChange={setEmail}
      />

      <CampoTexto
        label="Phone Number"
        type="tel"
        placeholder="+44 20 7234 3456"
        value={telefono}
        required
        onChange={setTelefono}
      />

      <div className="formulario-reserva__grupo">
        <label className="formulario-reserva__label">
          Select an Occasion (Optional)
        </label>
        <select
          className="formulario-reserva__select"
          value={ocasion}
          onChange={(e) => setOcasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business Dinner">Business Dinner</option>
          <option value="Date Night">Date Night</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="formulario-reserva__grupo">
        <label className="formulario-reserva__label">
          Add a Special Request (Optional)
        </label>
        <textarea
          className="formulario-reserva__textarea"
          placeholder="Enter your special request"
          value={solicitud}
          onChange={(e) => setSolicitud(e.target.value)}
        />
      </div>

      <label className="formulario-reserva__terminos">
        <input
          type="checkbox"
          checked={acepta}
          onChange={(e) => setAcepta(e.target.checked)}
        />
        <span>
          By clicking &quot;Reserve Now&quot; you agree to the{" "}
          <span className="formulario-reserva__link">Terms of Use</span> and{" "}
          <span className="formulario-reserva__link">Privacy Policy</span>.
        </span>
      </label>

      <BotonMorado texto="Proceed" type="submit" disabled={!acepta} />
    </form>
  );
}