var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db");

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(typeof req.query.name)
    let sql = "select * from cart";
    let data = null;
    if(req.query.name){
        sql = sql + " where name like ?";
        data = ["%" + req.query.name + "%"];
        // console.log(sql, data);
    }
    
    db(sql, data, (result) => {
        // console.log(result);
        if(result.length >= 0){
            res.json({
                code: 200,
                messages: "查询成功",
                data: result
            })
        }
    })

});

module.exports = router;
