const demoRouter = require("./DemoRoute");

function route(app) {
  app.use("/", demoRouter);
}
module.exports = route;
