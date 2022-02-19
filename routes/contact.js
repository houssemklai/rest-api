const express = require('express');
const { addContact, getAllContact, delletAllContact, putAllContact, oneGet } = require('../controle/contactControl');
const router = express.Router();
// const Contact = require("../models/Contact")
const Contact = require("../models/Contact");


router.get("/test",(req, res)=>{

    res.send("hello houssem");
});



router.post('/', addContact);
router.get('/', getAllContact);

router.delete('/:contactId',delletAllContact);

router.put('/:contactId',putAllContact);

router.get('/:contactId',oneGet);





















module.exports = router;