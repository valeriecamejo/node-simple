const axios = require('../config/axios');

module.exports = {
  find: async path => {
    try {
      const { data } = await axios.get(path);
      return data;
    } catch (error) {
      throw error.message;
    }
  },
  create: async (path, body) => {
    try {
      const { data } = await axios.post(path, body);
      return data;
    } catch (error) {
      throw error.message;
    }
  },
  update: async (path, body) => {
    try {
      const { data } = await axios.put(path, body);
      return data;
    } catch (error) {
      throw error.message;
    }
  },
  erase: async path => {
    try {
      await axios.delete(path);
      return "Deleted"
    } catch (error) {
      throw error.message
    }
  }
}