
const net = require("net");
const { IP, PORT } = require("./constants");

const myNumber = 42;
const myString = "hello";
const myFunction = () => {
  // myFunction's code
};
const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on('data', (data)=>{
  
      console.log(data)
    })
    conn.on ("connect" ,()=>{
      console.log("we connected :D")
      conn.write ("Name: Lui")
      // conn.write( "Move: up" )
    })
    return conn;
};

console.log("Connecting ...");

  module.exports = {myNumber, myString, myFunction ,connect}