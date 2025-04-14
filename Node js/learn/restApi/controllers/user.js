const User = require("../models/users");

const handleGetAllUser = async (req, res) => {
  const allDbUsers = await User.find({});
  return res.status(200).json(allDbUsers);
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ msg: "User Not found" });
  }
  return res.status(200).json(user);
};

const handleUpdateUserById = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const user = await User.findByIdAndUpdate(id, body, {
    new: true, // return the updated document
    runValidators: true, // ensure the updates follow schema rules
  });
  return res.json(user);
};

const handleDeleteUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return res.status(404).json({ msg: "Not found" });
  }
  return res.status(200).json({ msg: "deleted" });
};

const handleCreateNewUser = async (req, res) => {
  // getting user send all the data
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.jobTitle
  ) {
    return res.status(400).json({
      message: "Some field are missig",
    });
  }
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    jobTitle: body.jobTitle,
  });
  console.log(result);

  return res.status(201).json({ msg: "Success", id: result._id });
};
module.exports = {
  handleGetAllUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
