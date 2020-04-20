require('dotenv').config();
const express = require('express'),
      {SERVER_PORT} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

app.listen(port, () => console.log(`Server listening on ${port}`));