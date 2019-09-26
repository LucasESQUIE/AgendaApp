const express = require('express');
const monk = require('monk');
const router = express.Router();

const db = monk('localhost/agenda-db');
const users = db.get('users');


// connexion
router.get('/login', (req, res) => {
    users.find().then((users) => {
        // ajouter connexion

        res.json(users);
    });


});

// inscription
router.post('/signin', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    users.insert(user).then((createdUser) => {
        res.json(createdUser);
    });

});

// profil
router.get('/:id', (req, res) => {
    users.find(_id == req.params.id).then((user) => {
        // renvoyer infos utilisateur
        res.json(user);
    });

});

module.exports = router;