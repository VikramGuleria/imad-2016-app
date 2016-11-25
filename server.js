var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

   var articles = {
       'article-one':{
    title : 'Article one | Vikram Guleria',
    heading : 'Article one ',
    date: 'sep 5,2015',
    content: `
    <p>
                This is  a content of my first paragraph.      this is  a content of my first paragraph.      this is  a content of my first paragraph.      this is  a content of my first paragraph.      this is  a content of my first paragraph.      this is  a content of my first paragraph.
            </p>
        <p>
            This is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.
        </p>
        <p>
              This is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.  this is m web page.
        </p>`
},
    'article-two':{
     title : 'Article two | Vikram Guleria',
    heading : 'Article two ',
    date: 'sep 10,2015',
    content: `
    <p>
                This is  a content of my secoond paragraph.      
            </p>`
            },
    'article-three':{
     title : 'Article three | Vikram Guleria',
    heading : 'Article three ',
    date: 'sep 15,2015',
    content: `
    <p>
    This is third .
            </p>`
    }     
   };
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
  var htmlTemplate = `
<html>
    <head>
 <title>
   ${title}
    
 </title>   
<meta name="viexport" content="width=device-width,initial-scale=1" />
   <link href="/ui/style.css" rel="stylesheet" />
 
    </head>
    <body>
        <div class="container">
             <div>
                <a href="/">home</a>
            </div>
    
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
          ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
</body>
</html>


 `;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req, res) {
var name = req.query.name;
names.push(name);

res.send(JSON.stringify(names));
    
});

var passwords = [];
app.get('/submit-password',function(req, res) {
var name = req.query.password;
passwords.push(password);

res.send(JSON.stringify(passwords));
    
});

app.get('/:articleName',function(req,res) {
    //articleName == article-one
    //articles[articleName]=={} content object for article one
    var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));
    });
    
    
    app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

  app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi1.png'));
});

app.get('/ui/madi2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi2.png'));
});
app.get('/ui/madi3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi3.png'));
});






var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

