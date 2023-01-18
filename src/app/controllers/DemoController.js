const Demo = require("../models/Demo");
class DemoController {
  //Các chức năng của controller
  index(req, res, next) {
    res.send("Hello World!");
  }
}

module.exports = new DemoController();
