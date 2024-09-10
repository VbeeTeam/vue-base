var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

/* GET home page. */
router.post('/', function(req, res, next) {
    let info = req.body;
    console.log(info)
    let sql = "insert into cart set ?";
    db(sql, info, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "添加成功"
            })
        }
    })

});

module.exports = router;
