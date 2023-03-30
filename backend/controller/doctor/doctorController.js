const Doctor = require("../../models/doctor");
const mailer = require("../../config/mailer");

module.exports = {
  doctorLogin: async (req, res) => {
    console.log(req.body.password);
    console.log(mailer.OTP);

    if (req.body.password === mailer.OTP) {
      console.log("success");
    } else {
      console.log("errror");
    }
  },
};
