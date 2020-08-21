const express = require("express");
const bodyparser = require("body-parser");
const { sequelize } = require("./config/database");

// app setup
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

//-----> ROUTER'S
app.use("/api/users", require("./routes/user.routers"));
app.use("/api/posts", require("./routes/post.routers"));
app.use("/api/profiles", require("./routes/profile.routers"));

//----->    SERVER && DB Connection's
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
    sequelize.sync().then(() => {
        console.log(`Database & tables created here!`);
    });
});
