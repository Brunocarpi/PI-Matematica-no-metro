const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://brunocarpi385:<db_password>@login1.uf5pp.mongodb.net/?retryWrites=true&w=majority&appName=Login1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB", err));


const User = mongoose.model('User', new mongoose.Schema({
    email: String,
    password: String,
}));


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
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
