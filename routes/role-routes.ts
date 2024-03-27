import { Router, Request, Response } from "express";
import { RoleClass } from "../class/role-class";

// instanciar el router
const roleRoutes = Router();

// Crear role
roleRoutes.post("/new-role", (req: Request, resp: Response) => {
  const nuevoRole = new RoleClass();
  nuevoRole.nuevoRole(req, resp);
});

// Obtener role
roleRoutes.get("/get-role", (req: Request, resp: Response) => {
  const obtenerRole = new RoleClass();
  obtenerRole.obtenerRole(req, resp);
});

// Obtener roles
roleRoutes.get("/get-rols", (req: Request, resp: Response) => {
  const obtenerRoles = new RoleClass();
  obtenerRoles.obtenerRoles(req, resp);
});

// Editar role
roleRoutes.put("/edit-role", (req: Request, resp: Response) => {
  const editarRole = new RoleClass();
  editarRole.editarRole(req, resp);
});

// Eliminar role
roleRoutes.delete("/delete-role", (req: Request, resp: Response) => {
  const eliminarRole = new RoleClass();
  eliminarRole.eliminarRole(req, resp);
});

export default roleRoutes;
