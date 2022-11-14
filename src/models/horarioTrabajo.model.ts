import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import { DentistaModel } from "./dentista.model";
import HorarioTrabajoType from "../types/horarioTrabajo.type";

export class HorarioTrabajoModel extends Model<HorarioTrabajoType> {};

HorarioTrabajoModel.init(
    {
        idHorario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        idDentista:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        dia:{
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        horaInicio:{
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        horaFin:{
            type: DataTypes.STRING(10),
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "horarioTrabajo",
    }
);

DentistaModel.hasOne(
    HorarioTrabajoModel,{
        foreignKey: "idDentista",
        sourceKey: "idDentista",
    },
)