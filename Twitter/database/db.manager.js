
const Sequelize = require("sequelize");

const sequelizeConnection = require('./db.connection.js');

const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");

const User = UserModel (sequelizeConnection, Sequelize);
const Post = PostModel (sequelizeConnection, Sequelize);

User.hasMany(Post, { foreignKey: 'idPost', sourceKey: 'idUser' });
Post.belongsTo( User, { foreignKey: 'idUser', sourceKey: 'idPost' });


const models = {
  User: User,
  Post: Post,
};

const db = {
    ...models,
    sequelizeConnection
};

module.exports = db;
