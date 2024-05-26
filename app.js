const express = require('express');
const connectDB = require('./database/database')

const clientRoutes = require('./routes/ClientRoutes');

const app = express();

app.use(express.json());

app.get('/',(req, res) => {
res.send('Hello world');
});

async function aplicacion() {
    await app.listen(3864);
    console.log("Mi puerto es el 3864");
}
app.use('/clients', clientRoutes);

aplicacion();