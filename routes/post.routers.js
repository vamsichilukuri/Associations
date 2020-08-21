const {
    allPosts,
    create,
    getOne,
    updateByPostId,
    updateByUserId,
    deletePost,
} = require("../controller/post.controller");

const router = require("express").Router();

//  GET ALL
router.get("/", allPosts);
//  GET by ID
router.get("/:id", getOne);
//  POST
router.post("/new", create);
//  UPDATE by ID
router.put("/edit/:id", updateByPostId);
//  UPDATE by USER ID
router.put("/edit", updateByUserId);
//  DELETE by ID
router.delete("/delete/:id", deletePost);

module.exports = router;
