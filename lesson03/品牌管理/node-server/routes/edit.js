var express = require('express');
var router = express.Router();

const db = require("../public/javascripts/db")

/* GET home page. */
router.put('/', function(req, res, next) {
    let info = req.body;

    let sql = "update cart set name=?, status=? where id=?";
    let data =[info.name, info.status, info.id];

    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "更新成功"
            })
        }
    })

});

module.exports = router;
