const express        = require('express');
const mongoose       = require('mongoose');
const morgan         = require('morgan');
const methodOverride = require('method-override');
const routes         = require('./routes')
const port           = process.env.PORT || 8080;
const server         = express();

mongoose.connect('mongodb://localhost');
server.use(morgan('dev'));
server.use(express.json());
server.use(methodOverride());

routes(server);
server.listen(port)
console.log(`~ listening on ${port} ~`)
