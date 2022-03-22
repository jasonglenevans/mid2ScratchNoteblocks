var log = "";
function logtext(txt){
	log += txt+"\n";
}
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
logtext("add bpm.");
addtext("BPM");
addline();
addtext(json.header.bpm);
addline();
addtext("time");
logtext("add time.");
addline();
addtext(json.timeSignature[0].numerator);
addline();
addtext("notesQ");
logtext("add notesQ.");
addline();
addtext(json.timeSignature[0].notesQ);
addline();
addtext("seconds");
logtext("add seconds.");
addline();
addtext(json.timeSignature[0].seconds);
addline();
while (i1 < json.tracks.length) {
	i2 = 0;
	console.log("track " + i1 + " entering.");
	addtext("track");
	logtext("add track.");
	addline();
	addtext(i1);
	addline();
	addtext("instrument");
	logtext("add instrument.");
	addline();
	addtext(json.tracks[i1].instrumentNumber);
	console.log(json.tracks[i1].instrumentNumber);
	addline();
	addtext("isPercussion");
	logtext("add isPercussion.");
	addline();
	addtext(json.tracks[i1].isPercussion);
	console.log(json.tracks[i1].isPercussion);
	addline();
	while (i2 < json.tracks[i1].notes.length) {
		logtext("add note.");
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
		addtext(json.tracks[i1].notes[i2].velocity);
		addline();
		i2 += 1;
	}
	i1 += 1;
	addtext("clone");
	logtext("add clone message.");
	addline();
}
logtext("done with converting.");
console.log("writing file...");
fs.writeFileSync("file.txt",file,{encoding:"UTF-8"});
console.log("done! you should see a file named file.txt");
}catch(e){}
fs.writeFileSync("log.txt",log,{encoding:"UTF-8"});
while (true){};
