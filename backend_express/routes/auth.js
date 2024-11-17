const Route = require("express");
const auth = Route()

const { MongoClient } = require("mongodb");
const uri = process.env.database;
const client = new MongoClient(uri);

auth.post("/" , async(req,res) => {
    const user = req.body;
    await client.connect();
    await client.db('auth').collection('users').insertOne({
        id: user.id ,
        name: user.name ,
        passoed: user.passwod ,
        email: user.email
    })
    await client.close();
    res.status(200).send({
        "message": "create user complete" , 
        "user": user
    });
})

auth.get("/" ,async(req, res) => {
    await client.connect();
    const collection = await client.db('auth').collection('users')
    let result  = await collection.find({}).toArray();
    res.send(result).status(200);
    await client.close();
})

module.exports = auth;