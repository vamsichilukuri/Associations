const {
    getAll,
    create,
    getOne,
    update,
    deleteOne,
} = require("../controller/profile.controller");

const router = require("express").Router();

//  GET All
router.get("/", getAll);
//  GET by ID
router.get("/:id", getOne);
//  CREATE new Profile
router.post("/new", create);
//  UPDATE by ID
router.put("/edit/:id", update);
//  DELETE by ID
router.delete("/delete/:id", deleteOne);

module.exports = router;
