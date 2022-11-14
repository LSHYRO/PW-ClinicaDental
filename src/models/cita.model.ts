import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import { ClienteModel } from "./cliente.model";
import { DentistaModel } from "./dentista.model";
import { ServicioModel } from "./servicio.model";
import CitaType from "../types/cita.type";

export class CitaModel extends Model<CitaType> {}

CitaModel.init(
    {
        folioCita:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        fecha:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        hora: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        lugar:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        CURP:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        idDentista:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idServicio:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "cita",
    }
);

ClienteModel.hasMany(
    CitaModel,{
        foreignKey: "CURP",
        sourceKey: "CURP",
},
);

DentistaModel.hasMany(
    CitaModel,{
        foreignKey: "idDentista",
        sourceKey: "idDentista",
    },
);

ServicioModel.hasMany(CitaModel, {
        foreignKey: "idServicio",
        sourceKey: "idServicio",
    },
);