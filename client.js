const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

conn.on('connect', (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name:CNN");
});

  // interpret incoming data as text
  conn.setEncoding('utf8'); 


  conn.on('error', (err) => {
    console.log(err);
  });


  return conn;


}

module.exports = { connect };