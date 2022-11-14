import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import { UsuarioModel } from "./usuario.model";
import DentistaType from "../types/dentista.type";

export class DentistaModel extends Model<DentistaType> {}

DentistaModel.init(
  {
    idDentista: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    telefonoContacto: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "dentista",
  }
  
);
UsuarioModel.hasMany(DentistaModel, {
    foreignKey: "idUsuario",
    sourceKey: "idUsuario",
  });