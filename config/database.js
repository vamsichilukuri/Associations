const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

// Model's
const UserModel = require("../models/User.model");
const PostModel = require("../models/Post.model");
const ProfileModel = require("../models/Profile.model");

//  DB setup
const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        dialect: "mysql",
        host: "localhost",
        pool: {
            max: 5,
            min: 0,
            acquire: 40000000,
            idel: 10000,
        },
    }
);

const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);
const Profile = ProfileModel(sequelize, Sequelize);

module.exports = { sequelize, User, Post, Profile };
