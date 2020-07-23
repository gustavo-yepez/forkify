const express = require('express');
const path = require('path');
// const { addDevServerEntrypoints } = require('webpack-dev-server');
// const { dirname } = require('path');
const port = process.env.PORT || 8008;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirname, 'index.html'));
});

app.listen(port);
console.log('server started');