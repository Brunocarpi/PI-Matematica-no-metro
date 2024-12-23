const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/content', express.static('content'));



const uri = 'mongodb+srv://brunocarpi385:MrBeast600$@login1.uf5pp.mongodb.net/?retryWrites=true&w=majority&appName=Login1';

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



const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);


app.post('/feedback', async (req, res) => {
  const { name, email, message } = req.body;


  try {


    res.status(201).json({ success: true, message: "Feedback enviado com sucesso!" });
  } catch (error) {
    console.error('Erro ao salvar feedback:', error);
    res.status(500).json({ success: false, message: "Erro ao enviar feedback." });
  }
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});