const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/content', express.static('content'));  



const uri = 'mongodb+srv://brunocarpi385:<db_password>@login1.uf5pp.mongodb.net/?retryWrites=true&w=majority&appName=Login1';
mongoose.connect(uri)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.log("Erro ao conectar no MongoDB", err));


const validEmail = 'admin5@gmail.com';
const validPassword = 'metro5';


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {

        if (email === validEmail && password === validPassword) {
            res.json({ success: true, message: "Login bem-sucedido!" });
        } else {
            res.json({ success: false, message: "Credenciais incorretas!" });
        }
    } catch (e) {
        res.json({ success: false, message: "Erro ao tentar fazer login." });
    }
});


app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});
