const router = require("express").Router();
const {
    allUsers,
    create,
    getOne,
    deleteOne,
    update,
} = require("../controller/user.controller");

//  GET ALL
router.get("/", allUsers);
//  GET by ID
router.get("/:id", getOne);
//  CREATE new POST
router.post("/new", create);
//  UPDATE by ID
router.put("/edit/:id", update);
//  DELETE by ID
router.delete("/delete/:id", deleteOne);

module.exports = router;
