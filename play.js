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

console.log('Connecting ...');
connect();
































// const { connect } = require('./client');

// const { setUpInput } = require('./input');

// console.log('Connecting ...');
// const conn = connect();

// setUpInput(conn);
