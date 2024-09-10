var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  res.json({
    code: 200,
    message: "get方法请求成功",
    data: ["苹果","香蕉","梨子","橘子","橙子"]
  })
});
router.post('/post', (req, res) =>{
  console.log(req.body);
  res.json({
    code: 200,
    message: "登录成功"
  })
})
router.put('/put', (req, res) =>{
  console.log(req.body);
  res.json({
    code: 200,
    message: "更新成功"
  })
})
router.delete('/del', (req, res) =>{
  console.log(req.body);
  res.json({
    code: 200,
    message: "删除成功"
  })
})

module.exports = router;
