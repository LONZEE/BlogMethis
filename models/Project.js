const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        project_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        project_end_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        project_status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
);

module.exports = Project;
