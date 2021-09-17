const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req,res) => {
    let db = fs.readFileSync('db/db.json')
    db = JSON.parse(db)
    res.json(db)
});

router.post('/notes', (req,res) => {
    const newNote = req.body
    let db = fs.readFileSync('db/db.json')
    db = JSON.parse(db)
    db.push(newNote)
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db)
});

module.exports = router;
