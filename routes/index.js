var express = require('express');
var router = express.Router();
const taskModel = require("./users")



router.get('/', function(req, res) {
  taskModel.find ().then(function(alltask){
    res.render("index" ,{alltask}  )
  })
  
});

router.post("/createtask",function(req,res){
  taskModel.create({
    task:req.body.task,
    Date:Date.now
  }).then(function(createdtask){
    res.redirect("/")
  })
})
 
router.get("/delete/:id",function(req,res){
  taskModel.findOneAndDelete({
    id: req.params.id
  }).then(function(deletedtask){
    res.redirect("/")
  })
})


router.get("/aa",function(req,res){
  taskModel.find().then(function(alltask){
    res.send(alltask)
  })
})

module.exports = router;
