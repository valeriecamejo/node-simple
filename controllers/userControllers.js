const axios = require("../config/axios");
const { find, create, update, erase } = require('../helpers/crud');

exports.getUsers = async (req, res) => {
  try {
    const users = await find("/users");
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await find(`/users/${id}`);
    res.json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createUser = async (req, res) =>{
  try {
    const user = await create('/users', req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateUser = async (req, res) =>{
  try {
    const { id } = req.params;
    const user = await update(`/users/${id}`, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDeleted = await erase(`/users/${id}`);
    res.send(userDeleted);
  } catch (error) {
    res.status(400).send(error);
  }
};
