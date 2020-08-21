const { User, Post } = require("../config/database");

// Association
Post.belongsTo(User);

//  GET All Post's
const allPosts = async (req, res) => {
   await Post.findAll({ include: [User] })
        .then((users) => res.send(users))
        .catch((error) => res.send(error));
};

//  INSERT New Post
const create = async (req, res) => {
   await Post.create({
        title: req.body.title,
        text: req.body.text,
        UserId: req.body.userId,
    })
        .then((post) => res.send(post))
        .catch((error) => res.send(error));
};

//  FIND Post By PRIMARY_KEY
const getOne = async (req, res) => {
   await Post.findByPk(req.params.id)
        .then((post) => res.send(post))
        .catch((error) => res.send(error));
};

//  FIND Post By Post ID
const updateByPostId = async (req, res) => {
   await Post.update(
        { title: req.body.title, text: req.body.text },
        { where: { id: req.params.id } }
    )
        .then(() => res.send("Post Updated Successfully"))
        .catch((error) => res.send(error));
};

//  FIND Post By User ID
const updateByUserId = async (req, res) => {
   await Post.update(
        { title: req.body.title, text: req.body.text },
        { where: { UserId: req.body.userId } }
    )
        .then(() => res.send("Post Updated Successfully"))
        .catch((error) => res.send(error));
};

//  DELETE Post By ID
const deletePost = async (req, res) => {
   await Post.destroy({ where: { id: req.params.id } })
        .then(() => res.send("Post Deleted Successfully"))
        .catch((error) => res.send(error));
};
module.exports = {
    allPosts,
    create,
    getOne,
    updateByPostId,
    updateByUserId,
    deletePost,
   
};
