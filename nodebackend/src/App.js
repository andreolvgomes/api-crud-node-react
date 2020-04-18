// import express
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

// setting port
app.set('port', process.env.POST || 8080);

// Middlewares
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// importing route EmployeesRoute
const employeeRouters = require('./routes/EmployeesRoute');
app.use('/employee', employeeRouters);

app.use('/test', (req, res) => {
    res.send('Test router');
});

app.use('/', (req, res) => {
    res.send('Home page of the Server!!');
});

// start server
app.listen(app.get('port'), () => {
    console.log('Starting server Node.j');
});