var
http = require( 'http' ),
express = require( 'express' ),
app = express(),
server = http.createServer( app );
import 'jquery';

app.use( express.static( __dirname + '/src' ) );

server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port, app.settings.env
);

$.get('./template-1.htm', function(templates) {
    // Fetch the <script /> block from the loaded external
    // template file which contains our name template.
    var template = $(templates).filter('#tpl-name').html();
    $('#target').append(Mustache.render(template, templateData));
});