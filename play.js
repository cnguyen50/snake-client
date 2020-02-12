const connect = require('./client');

console.log('Connecting ...');
connect();

const handleUserInput = function(data) {
  if (data === '\u0003')
  process.exit();
};

const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
};

setupInput();






















// const { connect } = require('./client');

// const { setUpInput } = require('./input');

// console.log('Connecting ...');
// const conn = connect();

// setUpInput(conn);
