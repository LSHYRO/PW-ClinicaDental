import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import ServicioType from "../types/servicio.type";

export class ServicioModel extends Model<ServicioType> {}

ServicioModel.init(
    {
        idServicio:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nombreServicio:{
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        costo:{
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        descripcion:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        preparaciones:{
            type: DataTypes.STRING(300),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "servicio",
    }
);