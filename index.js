try{
var fs = require("fs");
var plainText = fs.readFileSync("file.json",{encoding:"UTF-8"});
var json = JSON.parse(plainText);
console.log(json);
var i1,i2;
i1 = 0;
var file = "";
function addline() {
	file += "\n";
}
function addtext(txt) {
	file += txt;
}
addtext("BPM");
addline();
addtext(json.header.bpm);
addline();
addtext("time");
addline();
addtext(json.timeSignature[0].numerator);
addline();
addtext("notesQ");
addline();
addtext(json.timeSignature[0].notesQ);
addline();
addtext("seconds");
addline();
addtext(json.timeSignature[0].seconds);
addline();
while (i1 < json.tracks.length) {
	i2 = 0;
	console.log("track " + i1 + " entering.");
	addtext("track");
	addline();
	addtext(i1);
	addline();
	while (i2 < json.tracks[i1].notes.length) {
		console.clear();
		console.log("add note:\n");
		
		console.log(json.tracks[i1].notes[i2]);
		addtext("note");
		addline();
		addtext(json.tracks[i1].notes[i2].duration);
		addline();
		addtext(json.tracks[i1].notes[i2].time);
		addline();
		addtext(json.tracks[i1].notes[i2].midi);
		addline();
		addtext(json.tracks[i1].notes[i2].name);
		addline();
		i2 += 1;
	}
	i1 += 1;
	addtext("clone");
	addline();
}
console.clear();
console.log("done");
fs.writeFileSync("file.txt",file,{encoding:"UTF-8"});
}catch(e){console.log(e);}
while (true){};
