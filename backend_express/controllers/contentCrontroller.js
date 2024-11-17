const { MongoClient } = require("mongodb");
const uri = process.env.database;

const client = new MongoClient(uri);


async function getAllPost(req,res) {
    try {
        await client.connect();
        const allpost = await client.db('content').collection('posts')
        let postDB = await allpost.find({}).toArray();
        console.log(postDB);
        await client.close();
        res.send(postDB);
    } catch (error) {
        
    }
}

async function addNewPost(req,res) {
    try {
        await client.connect();
        const newPost = req.body;
        console.log(newPost);
        await client.db("content").collection("posts").insertOne(newPost);
        res.send("insert complete " + newPost).status(200);
        await client.close();
    } catch (error) {
        
    }
}

module.exports = { getAllPost , addNewPost }
   


