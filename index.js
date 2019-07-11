const server = require('./api/server.js');

// Change 1 - Change 2 is just to add a start script that calls node index.js
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
