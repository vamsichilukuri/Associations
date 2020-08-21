module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Profile", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
};
