const http = require('http');
const port = 8080;

const web = http.createServer(function(req, res) {
  res.write('Im ready');
  res.end();
});

web.listen(port, (err) {
     if(err) return console.log(err);

     console.log('Web Ready');
});
