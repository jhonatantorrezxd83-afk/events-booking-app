"use client";
import "./CampoTexto.css";

interface CampoTextoProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (val: string) => void;
}

export default function CampoTexto({
  label,
  type = "text",
  placeholder,
  value,
  required = false,
  onChange,
}: CampoTextoProps) {
  return (
    <div className="campo-texto">
      <label className="campo-texto__label">{label}</label>
      <input
        type={type}
        className="campo-texto__input"
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}