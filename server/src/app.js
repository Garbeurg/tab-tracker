/* eslint linebreak-style: ["error", "windows"] */

// import des modules (on met une bibloithèque de fonctions dans une variable)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// creation d'une application de base et initialisation des dépendances
const app = express();
app.use(morgan('combined')); // log ce qui se passe
app.use(bodyParser.json()); // parse toute requête en forme de json
app.use(cors()); // autorise les clients à accéder à l'application

// renvoie d'une sortie
app.get('/status', (req, res) => {
  res.send({
    message: 'hello message world',
  });
});
// ecoute des requêtes du serveur
app.listen(process.env.PORT || 8081);
