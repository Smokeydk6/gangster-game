const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

// Spillerens tilstand
let gameState = {
    money: 100,
    territories: 0
};

// Hent nuværende status
app.get('/api/state', (req, res) => {
    res.json(gameState);
});

// Udfør en handling (angreb)
app.post('/api/attack', (req, res) => {
    if (gameState.money >= 10) {
        gameState.money -= 10;
        gameState.territories += 1;
        res.json({ success: true, state: gameState });
    } else {
        res.json({ success: false, message: "Ikke nok penge!" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Spillet kører på port ${PORT}`));
