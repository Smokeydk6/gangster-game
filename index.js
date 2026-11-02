const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Gør public mappen tilgængelig
app.use(express.static('public'));

// En simpel API rute, som spillet henter data fra
app.get('/api/game', (req, res) => {
    res.json({
        money: 1000,
        territories: 1
    });
});

app.listen(port, () => {
    console.log(`Server kører på port ${port}`);
});
