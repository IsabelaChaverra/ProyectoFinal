import Swal from "sweetalert2";

// Función para generar un token aleatorio
export function generarToken() {
  return (
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10)
  );
}

export function mostrarError(titulo, mensaje) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: "error",
    confirmButtonColor: "#3085d6"
  });
}

export function mostrarExito(titulo, mensaje) {
  return Swal.fire({
    title: titulo,
    text: mensaje,
    icon: "success",
    confirmButtonColor: "#3085d6"
  });
}
