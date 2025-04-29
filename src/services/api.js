import { usuarios } from "./database.js";

export function obtenerUsuario(usuario, contrasena) {
  return usuarios.find(
    (u) => u.usuario === usuario && u.contrasena === contrasena
  );
}
