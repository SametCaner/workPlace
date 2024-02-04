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

exports.deletePersonnels = async (req, res) => {
  try {
    const deletedPersonnel = await Personnel.findByIdAndDelete(req.params.id);
    if (!deletedPersonnel) {
      return res.status(404).json({
        status: "fail",
        message: "Document not found...",
      });
    }
    res.status(200).json({
      status: "success",
      data: deletedPersonnel,
    });
    console.log("Information has been deleted...");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error);
  }
};
exports.updatePersonnels = async (req, res) => {
  try {
    const updatePersonnel = await Personnel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new : true , runValidators: true}
      );
    if (!updatePersonnel) {
      return res.status(404).json({
        status: "fail",
        message: "Document not found.",
      });
    }
    res.status(200).json({
      status: "success",
      data: updatePersonnel,
    });
    console.log("Information updated.");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error);
  }
};