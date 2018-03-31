var express = require('express');
var router = express.Router();

router
    .route('/json')
    .get(function (req,res) {
        console.log("GET the JSon");
        res
            .status(200)
            .json({"jsonData":true});
    })
    .post(function(req,res){
        console.log("Post JSon");
        res
            .status(200)
            .json({"jsonData":"POST Data"});
    });


module.exports = router;
