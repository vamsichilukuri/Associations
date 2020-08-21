const { Profile, User } = require("../config/database");

//  Association's
Profile.belongsTo(User);

//  GET All Profile's
const getAll = (req, res) => {
    Profile.findAll()
        .then((profiles) => res.send(profiles))
        .catch((error) => res.send(error));
};

//  GET One Profile By ID
const getOne = (req, res) => {
    Profile.findByPk(req.params.id)
        .then((profile) => res.send(profile))
        .catch((error) => res.send(error));
};

//  INSERT New Profile with User ID
const create = (req, res) => {
    Profile.create({ name: req.body.name, UserId: req.body.userId })
        .then((profile) => res.send(profile))
        .catch((error) => res.send(error));
};

//  UPDATE Profile By Profile ID
const update = (req, res) => {
    Profile.update({ name: req.body.name }, { where: { id: req.params.id } })
        .then(() => res.send("updated successfully"))
        .catch((error) => res.send(error));
};

//  DELETE Profile By Profile ID
const deleteOne = (req, res) => {
    Profile.destroy({ where: { id: req.params.id } })
        .then(() => res.send("profile has been deleted successfully"))
        .catch((error) => res.send(error));
};

module.exports = { getAll, getOne, create, deleteOne, update };
