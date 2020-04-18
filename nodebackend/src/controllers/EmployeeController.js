const controllers = {};

// import model and sequelize
var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

sequelize.sync();

// find onde Employee
//
controllers.get = async (req, res) => {
  const { id } = req.params;
  const data = await Employee.findAll({
    where: { id: id },
    include: [Role]
  }).then(function (data) {
    return data;
  }).catch(error => {
    return error;
  })

  res.json({ success: true, data: data });
};

// update Employee
//
controllers.update = async (req, res) => {
  // parameter get id
  const { id } = req.params;
  // parameter POST
  const { name, email, address, phone, role } = req.body;
  // Update data
  const data = await Employee.update({
    name: name,
    email: email,
    address: address,
    phone: phone,
    roleId: role
  },
    {
      where: { id: id }
    })
    .then(function (data) {
      return data;
    })
    .catch(error => {
      return error;
    })
  res.json({
    success: true,
    data: data,
    message: "Updated successful"
  });
}

// delete Employee
//
controllers.delete = async (req, res) => {
  const { id } = req.body;
  const del = await Employee.destroy({
    where: { id: id }
  });

  return res.json(
    {
      success: true,
      message: "Deleted successful",
    });
};


// list all Employee
//
controllers.list = async (req, res) => {
  const data = await Employee.findAll({
    include: [Role]
  }).then(function (data) {
    return data;
  }).catch(function (erro) {
    return error;
  });

  return res.json({ success: true, data: data });
};

// create new Employee
//
controllers.create = async (req, res) => {
  const { name, email, address, phone, roleId } = req.body;

  // create employee
  const data = await Employee.create({
    name: name,
    email: email,
    address: address,
    phone: phone,
    roleId: 1
  }).then(function (data) {
    return data;
  }).catch(function (error) {
    return error;
  });

  return res.status(200).json({
    success: true,
    message: "Saved successful",
    data: data
  });
};

controllers.test = function (req, res) {
  res.json({ name: 'How are your?' });
};

module.exports = controllers;
