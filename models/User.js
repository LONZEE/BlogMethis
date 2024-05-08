const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            // },defaultValue: "default@email.com" // This is not recommended      
        
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },   
        }
    },
    { hooks: {
        beforeCreate: (user, options) => {
          console.log(user.dataValues);  // Add this line
          if (user.password) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
          }
        },
        async beforeUpdate(updatedUserData) {
          console.log(updatedUserData);  // Add this line
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        }
      },
       
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
