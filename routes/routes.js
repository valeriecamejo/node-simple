const express = require("express");
const router = express.Router();
const axios =require('../config/axios');

module.exports = () => {
  router.get('/', (req, res) => res.send('Hola mundo!!'));

  //Users Routes
  router.get('/users', async(req, res) => {
    const users = await axios.get('/users');
    console.log(users.data);

    res.json(users.data)
  })

  router.post('/users', async(req, res) =>{
    const user = req.body;
    const { data } = await axios.post('/users', user);
    res.status(201).json(data);
  })

  return router;
};
