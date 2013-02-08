var mustache = require('mustache');
var path = require('path');
var fs = require('fs');

var template = fs.readFileSync('template.html', 'utf-8');
var css = fs.readFileSync('main.css', 'utf-8');
var script = fs.readFileSync('main.js', 'utf-8');
var db = JSON.parse(fs.readFileSync('db.json', 'utf-8'));

db.forEach(function(entry) {
	var i = db.indexOf(entry);

	if (i !== 0) {
		entry.nextUrl = path.join('..', '' + (entry.id+1));
	}

	if (i !== db.length-1) {
		entry.prevUrl = path.join('..', '' + (entry.id-1));
	}

	entry.css = css;
	entry.script = script;

	entry.image = path.join('..', '..', entry.image);
	
	fs.mkdirSync(path.join('trip', '' + entry.id));
	fs.writeFileSync(path.join('trip', '' + entry.id, 'index.html'), mustache.to_html(template, entry));
})