const net = require("net");
const { myNumber, myString, myFunction, connect } = require("./client");
const { setupInput,handleUserInput} =require ("./input")
// establishes a connection with the game server
// const setupInput = function () {
//     const stdin = process.stdin;
//     stdin.setRawMode(true);
//     stdin.setEncoding("utf8");
//     stdin.resume();
//     stdin.on("data", handleUserInput);

//     return stdin;
//   };
//   const handleUserInput = function (data) {
//     if (data === '\u0003') {
//         process.exit();
//       }
//         };
//         setupInput()


// const connect = function () {
//     const conn = net.createConnection({
//       host: '135.23.223.133',
//       port: 50542
//     });
  
//     // interpret incoming data as text
//     conn.setEncoding("utf8");
//     conn.on('data', (data)=>{
  
//       console.log(data)
//     })
//     return conn;
// };

// console.log("Connecting ...");
// connect();
const conn= connect()
setupInput(conn)