"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ResumenLugar from "@/componentes3/moleculas/ResumenLugar";
import BotonMorado from "@/componentes3/atomos/BotonMorado";
import BotonSecundario from "../atomos/BotonSecundario";
import DatoResumen from "../atomos/DatoResumen";
import ModalPuntos from "../moleculas/ModalPuntos";
import "./VistaConfirmar.css";

const API_URL = "https://6b097b7e6a4ecd58b007709c.mockapi.io/api/v1";

export default function VistaConfirmar() {
  const router = useRouter();
  const params = useSearchParams();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const titulo = params.get("titulo") || "Leceister Square kitchen";
  const ubicacion = params.get("ubicacion") || "31-36 Leicester Square, England";
  const imagen = params.get("imagen") || "/comida.png";
  const invitados = params.get("invitados") || "2 Guests";
  const fecha = params.get("fecha") || "Wed, July 18";
  const hora = params.get("hora") || "7:00 pm";

  const nombre = params.get("nombre") || "Adah Jonathan Uchenna";
  const email = params.get("email") || "jonathanadah11@gmail.com";
  const telefono = params.get("telefono") || "+44 20 7234 3456";
  const ocasion = params.get("ocasion") || "Birthday";
  const solicitud =
    params.get("solicitud") ||
    "Please, I do not want a seat close to an Air-Conditioner if you have any as I have friends who are allergic to cold.";

  const handleReservar = async () => {
    setGuardando(true);
    try {
      await fetch(`${API_URL}/reservas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo,
          ubicacion,
          imagen,
          invitados,
          fecha,
          hora,
          nombre,
          email,
          telefono,
          ocasion,
          solicitud,
        }),
      });
      setMostrarModal(true);
    } catch (err) {
      console.error("Error guardando reserva:", err);
      alert("No se pudo guardar la reserva.");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <main className="vista-confirmar">
      <button
        className="vista-confirmar__volver"
        onClick={() => router.back()}
        aria-label="Volver"
      >
        <img src="/flecha.svg" alt="Volver" width={18} height={18} />
      </button>

      <h1 className="vista-confirmar__titulo">Reservation Preview</h1>
      <p className="vista-confirmar__subtitulo">
        Confirm if there are errors in the entered details.
      </p>

      <ResumenLugar
        titulo={titulo}
        ubicacion={ubicacion}
        imagen={imagen}
        invitados={invitados}
        fecha={fecha}
      />

      <section className="vista-confirmar__detalles">
        <h2 className="vista-confirmar__seccion">Dinner Details</h2>
        <DatoResumen label="Full Name" valor={nombre} />
        <DatoResumen label="Email Address" valor={email} />
        <DatoResumen label="Phone Number" valor={telefono} />
        <DatoResumen label="Select an Occasion" valor={ocasion} />
        <DatoResumen label="Add a Special Request" valor={solicitud} />
      </section>

      <div className="vista-confirmar__acciones">
        <BotonSecundario
          texto="Edit Reservation Details"
          onClick={() => router.back()}
        />
        <BotonMorado
          texto={guardando ? "Saving..." : "Reserve Now"}
          disabled={guardando}
          onClick={handleReservar}
        />
      </div>

      {mostrarModal && (
        <ModalPuntos
          onCerrar={() => setMostrarModal(false)}
          onNuevaReserva={() => router.push("/")}
        />
      )}
    </main>
  );
}