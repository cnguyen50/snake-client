const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });

  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
      console.log("Server says:", data)
  })

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