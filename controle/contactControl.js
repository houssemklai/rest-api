const Contact = require("../models/Contact");

exports.addContact= async(req,res)=>{
    let {name, email, age}= req.body;
    age=Number(age)
    try {
    
        const contact = new Contact ({
        name, email ,age  })
   
    await contact.save()

    res.send({msg:"contact add", contact});
    } catch (error) {
        // console.log(error)
        res.status(500).send("serveur error");
    }
    
    
}
exports.getAllContact=async(req,res)=>{
   
    try {
        const contacts= await Contact.find()
    res.send(contacts);
    } catch (error) {
        // console.log(error)
        res.status(500).send("serveur error");
    }
    
    
}

exports.delletAllContact=async(req,res)=>{
    const {contactId}= req.params
    try {
        await Contact.findByIdAndDelete(contactId)
    res.send("contact deleted");
    } catch (error) {
        // console.log(error)
        res.status(500).send("serveur error");
    }
    
    
}
exports.putAllContact=async(req,res)=>{
    const {contactId}= req.params
    try {
        const contact = await Contact.findByIdAndUpdate(contactId,{$set:{...req.body}});
    res.send(contact);
    } catch (error) {
        // console.log(error)
        res.status(500).send("serveur error");
    }
    
    
}
exports.oneGet=async(req,res)=>{
    const {contactId}= req.params
    try {
        const contact = await Contact.findById(contactId)
    res.send(contact);
    } catch (error) {
        // console.log(error)
        res.status(500).send("serveur error");
    }
    
    
}