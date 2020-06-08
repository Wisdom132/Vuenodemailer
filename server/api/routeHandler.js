const userRoute = require("./User/routes")

module.exports = (app) => {
    app.use("/user", userRoute);

}