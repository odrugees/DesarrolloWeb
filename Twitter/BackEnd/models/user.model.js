module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define (
      'User', {
        idUser: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: DataTypes.STRING
        },
        creation_date: {
          type: DataTypes.DATE
        }
      }
    );
    return User;
};
