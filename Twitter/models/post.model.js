module.exports = (sequelize, DataTypes) =>{
    const Post = sequelize.define (
      "Post", {
        idPost: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        message: {
          type: DataTypes.STRING
        },
        published_date: {
          type: DataTypes.DATE
        }
      }
    );
    return Post;
};
