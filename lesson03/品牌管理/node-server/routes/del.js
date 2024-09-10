var express = require('express');
const db = require('../public/javascripts/db');
var router = express.Router();

/* GET home page. */
router.delete('/', function(req, res, next) {
    let id = req.body.id;

    let sql = "delete from cart where id=?";
    let data = [id];

    db(sql, data, (result) => {
        if(result.affectedRows == 1){
            res.json({
                code: 200,
                message: "删除成功"
            })
        }
    })

});

module.exports = router;
