var fs = require('fs');

var Mustache = require('mustache')

var view = {
  		title: "Joe",
  		calc: function () {
    	return 2 + 4;
  		}
	}, output;


var callback = (data)=>{
	output =  Mustache.render(data, view);	
	//$container.html(configMap.main_html);
	console.log(output);
	
}
var callMustache =  (path, cb) => {
	
	fs.readFile(path, 'utf8', (err, data)=>{
	
		if(err){
			console.log(err)
		}else{
		
		cb(data);
				
		}
	})
}

callMustache('./src/template-1.htm', callback);






	




