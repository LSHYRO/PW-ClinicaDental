import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";

import UsuarioType from "../types/usuario.type";


export class UsuarioModel extends Model<UsuarioType> {}

UsuarioModel.init(
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    correo: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    contraseña: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "usuario",
  }
);


