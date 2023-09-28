require('dotenv').config()
//{path: './src/.env'} caso .env esteja em pasta
const express = require('express');


const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
   return res.json('API está ok!')
});


const port = process.env.PORT || 3000



app.listen(port, () => {
   console.log(`Servidor rodando na porta ${port}`)
})