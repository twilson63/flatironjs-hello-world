(function() {
  var app, flatiron;

  flatiron = require('flatiron');

  app = flatiron.app;

  app.use(flatiron.plugins.http);

  app.router.get('/', function() {
    this.res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    return this.res.end('Hello World');
  });

  app.start(3000);

}).call(this);
