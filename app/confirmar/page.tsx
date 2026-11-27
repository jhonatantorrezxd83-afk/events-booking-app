import { Suspense } from "react";
import VistaConfirmar from "@/componentes4/organismos/VistaConfirmar";

export default function ConfirmarPage() {
  return (
    <Suspense fallback={<p style={{ padding: 20 }}>Loading...</p>}>
      <VistaConfirmar />
    </Suspense>
  );
}