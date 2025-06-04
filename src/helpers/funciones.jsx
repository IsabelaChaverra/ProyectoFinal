import Swal from "sweetalert2";

export function generarToken() {
  return (
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10) +
    Math.random().toString(36).substring(2, 10)
  );
}

export function mostrarError(titulo, mensaje) {
  return Swal.fire({
    title: titulo,
    text: mensaje,
    icon: "error",
    confirmButtonText: "Aceptar",
    customClass: {
      confirmButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
    },
    buttonsStyling: false
  });
}

export function mostrarExito(titulo, mensaje) {
  return Swal.fire({
    title: titulo,
    text: mensaje,
    icon: "success",
    confirmButtonText: "Aceptar",
    customClass: {
      confirmButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
    },
    buttonsStyling: false
  });
}

export function mostrarConfirmacion(titulo, mensaje, onConfirmar, onCancelar) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
    customClass: {
      confirmButton: 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded',
      cancelButton: 'bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded ml-2'
    },
    buttonsStyling: false 
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirmar();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      onCancelar();
    }
  });
}
export function alertaRedireccion(redireccion, titulo, mensaje, icono, url) {
  let timerInterval;
  Swal.fire({
    title: titulo,
    html: mensaje,
    timer: 2000,
    icon: icono,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      redireccion(url);
    },
  });
}
