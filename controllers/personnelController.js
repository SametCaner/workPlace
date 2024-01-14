const Personnel = require("../models/Personnel");

exports.createPersonnel = async (req, res) => {
  try {
    const personnel = await Personnel.create(req.body);
    res.status(201).json({
      status: "success",
      personnel,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error);
  }
};
exports.getPersonnels = async (req, res) => {
  try {
    const personnels = await Personnel.find();
    res.status(200).json(personnels);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error);
  }
};