const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: YUR");
    // setTimeout(() => {
    //   conn.write("Name: YUR");
    // }, 50);

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);

  });



  conn.on('data', (data) => {
      console.log("Server says:", data)
  });

  return conn;
}


// console.log('Connecting ...');
// connect();


module.exports = connect;






















// const net = require('net');
// const { IP, PORT } = require('./constants');

// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: IP,
//     port: PORT
//   });
//   conn.setEncoding('utf8');

//     conn.on('connect', () => {
//         console.log("Successfully connected to game server");
//     conn.write("Name:CNN");
// });

//   conn.on('data', (data) => {
//     console.log('Server: ', data);
//   });
//   return conn;
// }

// module.exports = { connect };