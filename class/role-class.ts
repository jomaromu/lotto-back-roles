import { Response, Request } from "express";
import { Restricciones } from "../interfaces/role-interface";
import roleModel from "../models/role-model";

export class RoleClass {
  async nuevoRole(req: any, resp: Response): Promise<any> {
    try {
      const nombre: string = req.body.nombre;
      const estado: boolean = req.body.estado;
      const vendedor: boolean = req.body.vendedor;
      const restricciones: Restricciones = req.body.restricciones;

      const crearRole = new roleModel({
        nombre,
        estado,
        vendedor,
        restricciones,
      });

       const roleDB = await crearRole.save();

      if (roleDB) {
        return resp.json({
          ok: true,
          roleDB,
        });
      } else {
        return resp.json({
          ok: false,
          mensaje: "Error al crear role",
        });
      }
    } catch (error) {
      return resp.json({
        ok: false,
        mensaje: "Error al crear role",
        err: error,
      });
    }
  }

  async obtenerRole(req: any, resp: Response): Promise<any> {
    try {
      const _id: any = req.get("_id");

      const roleDB = await roleModel.findById(_id).exec();

      if (roleDB) {
        return resp.json({
          ok: true,
          roleDB,
        });
      } else {
        return resp.json({
          ok: false,
          mensaje: "Error al obtener el role",
        });
      }
    } catch (error) {
      return resp.json({
        ok: false,
        mensaje: "Error al obtener el role",
        err: error,
      });
    }
  }

  async obtenerRoles(req: any, resp: Response): Promise<any> {
    try {
      const rolesDB = await roleModel.find().exec();

      if (rolesDB) {
        return resp.json({
          ok: true,
          rolesDB,
        });
      } else {
        return resp.json({
          ok: false,
          mensaje: "Error al obtener los roles",
        });
      }
    } catch (error) {
      return resp.json({
        ok: false,
        mensaje: "Error al obtener los roles",
        err: error,
      });
    }
  }

  async editarRole(req: any, resp: Response) {
    try {
      const _id: any = req.body._id;

      const nombre: string = req.body.nombre;
      const estado: boolean = req.body.estado;
      const vendedor: boolean = req.body.vendedor;
      const restricciones: Restricciones = req.body.restricciones;

      const query = {
        nombre,
        estado,
        vendedor,
        restricciones,
      };

      const roleDB = await roleModel
        .findByIdAndUpdate(_id, query, {
          new: true,
        })
        .exec();

      if (roleDB) {
        return resp.json({
          ok: true,
          roleDB,
        });
      } else {
        return resp.json({
          ok: false,
          mensaje: "Error al actualizar role",
        });
      }
    } catch (error) {
      return resp.json({
        ok: false,
        mensaje: "Error al actualizar role",
        err: error,
      });
    }
  }

  async eliminarRole(req: any, resp: Response): Promise<any> {
    try {
      const _id: any = req.get("_id");

      const roleDB = await roleModel.findByIdAndDelete(_id).exec();

      if (roleDB) {
        return resp.json({
          ok: true,
          mensaje: "Role eliminado",
        });
      } else {
        return resp.json({
          ok: false,
          mensaje: "Error al eliminar role",
        });
      }
    } catch (error) {
      return resp.json({
        ok: false,
        mensaje: "Error al eliminar role",
        err: error,
      });
    }
  }
}
