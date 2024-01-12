const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World \n');
});


app.listen(8080, function () {
	console.log('Running on port 8080! - http://localhost:8080');
});