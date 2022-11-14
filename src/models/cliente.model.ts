import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import { UsuarioModel } from "./usuario.model";
import ClienteType from "../types/cliente.type";

export class ClienteModel extends Model<ClienteType> {}

ClienteModel.init(
  {
    CURP: {
      type: DataTypes.STRING(17),
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
    },
    nombre: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING(9),
        allowNull: false,
      },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },  
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "cliente",
  }
  
);
UsuarioModel.hasMany(ClienteModel, {
    foreignKey: "idUsuario",
    sourceKey: "idUsuario",
  });