
const Sequelize = require("sequelize");

const sequelizeConnection = require('./db.connection.js');

const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");

const User = UserModel (sequelizeConnection, Sequelize);
const Post = PostModel (sequelizeConnection, Sequelize);

Post.belongsTo( User, {foreignKey: 'idUser', as: 'user' });
User.hasMany(Post, {foreignKey: 'idUser'});


const models = {
  User: User,
  Post: Post,
};

const db = {
    ...models,
    sequelizeConnection
};

module.exports = db;
