const express = require('express')
const app = express()
var mongoose = require('mongoose')
var Post = require('./models/post')
mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())

mongoose.connect('mongodb://localhost:27017/express-kiss-api')


var db = mongoose.connection
db.on('error', console.log)
db.once('open', function() {
  console.log('success!')
})


app.get('/', (req, res) => {
  res.send('API here')
})

app.get('/posts', (req, res) => {
  console.log('GET /posts........')
  Post.find().exec(function(err, posts) {
    if (err) return res.status(500).json({error: err.message});
    res.json({ posts })
  });
})


// 对应的客户端请求是：axios.get('http://xxx.com/post/232424324324')
app.get('/post/:id', (req, res) => {
  console.log('POST /post/:id', req.params.id)
  Post.findById({_id: req.params.id}, function(err, post) {
    if (err) return res.status(500).json({error: err.message});
    res.json({ post: post })
  })
})


app.post('/post', (req, res) => {
  console.log('POST /post', req.body)
  var post = new Post(req.body);
  post.save(function(err){
    if(err) console.log(err);
  })
} )


// 更新一篇博客

app.put('/post/:id', function(req, res) {
    if (req.body.title === '') return res.status(400).json({error: '文章标题不能为空！'})
    Post.findById({_id: req.params.id}, function(err, post) {
      if (err) return res.status(500).json({error:  err.message});
      for (prop in req.body) {
        post[prop] = req.body[prop];
      }
      post.save(function(err) {
        if (err) return res.status(500).json({error: err.message});
        res.json({
          message: '文章更新成功了！'
        });
      });
    });
  });


// 删除一篇 post

app.delete('/post/:id', function(req, res) {
  Post.findById({_id: req.params.id}, function(err, post) {
    if (err) return res.status(500).json({error: err.message});
    if (!post) return res.status(500).json({message: "已经删除过了"});
    post.remove(function(err){
      if (err) return res.status(500).json({error: err.message});
      res.json({ message: '文章已经删除了！' });
    });
  });
});

app.listen(5000, () =>  console.log('running on port 5000...'))
