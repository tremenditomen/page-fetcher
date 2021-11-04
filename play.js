const net = require("net");
const { myNumber, myString, myFunction, connect } = require("./client");
const { setupInput, handleUserInput } = require("./input");
const conn = connect();
setupInput(conn);
