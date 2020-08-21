const { User, Post, Profile } = require("../config/database");

//Association's
User.hasMany(Post);
User.hasOne(Profile);

//  GET All User's
const allUsers = (req, res) => {
    User.findAll({ include: [Post, Profile] })
        .then((users) => res.send(users))
        .catch((error) => res.send(error));
};

//  INSERT New User
const create = (req, res) => {
    User.create({ username: req.body.username, age: req.body.age })
        .then((user) => res.send(user))
        .catch((error) => res.send(error));
};

//  GET One User By ID
const getOne = (req, res) => {
    User.findByPk(req.params.id)
        .then((user) => res.send(user))
        .catch((error) => res.send(error));
};

// UPDATE User By ID
const update = (req, res) => {
    User.update(
        { username: req.body.username, age: req.body.age },
        { where: { id: req.params.id } }
    )
        .then(() => res.send("User has been Updated Successfully"))
        .catch((error) => res.send(error));
};

//  DELETE User By ID
const deleteOne = (req, res) => {
    User.destroy({ where: { id: req.params.id } })
        .then(() => res.send("User deleted Successfully"))
        .catch((error) => res.send(error));
};
module.exports = { allUsers, create, getOne, update, deleteOne };
