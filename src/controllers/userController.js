const express = require("express");

const userModel = require("../models/userModel");

const createUser = async function (res, req) {
  try {
    const data = req.body;
    const userData = await userModel.create(data);
    res.send({ status: true, message: "succesfully ", data: userData });
  } catch (error) {}
};

module.exports = {createUser};
