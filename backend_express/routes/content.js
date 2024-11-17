const Route = require("express");
const content = Route();

const contentCon = require("../controllers/contentCrontroller");

content.get("/allpost", (req,res) => {
    contentCon.getAllPost(req,res);
})

content.post("/create_post", (req,res) => {
    contentCon.addNewPost(req,res);
})

module.exports = content;