const fs = require('fs');

let rawdata = fs.readFileSync('gothic.json');  
let gothic = JSON.parse(rawdata);  

// fs.readFile('horoscopes.json', (err, data) => {
// 	if (err) throw err;
// 	let hor = JSON.parse(data);
// });

function randomFire(){
	var hor = gothic.fire[Math.floor(Math.random() * gothic.fire.length)];
	var i = 0;
	while(i < 6){
		hor += (", " + gothic.fire[Math.floor(Math.random() * gothic.fire.length)]);
		i++;
	}
	return hor;
}

function randomWater(){
	var hor = gothic.water[Math.floor(Math.random() * gothic.water.length)];
	var i = 0;
	while(i < 6){
		hor += (", " + gothic.water[Math.floor(Math.random() * gothic.water.length)]);
		i++;
	}
	return hor;
}

function randomAir(){
	var hor = gothic.air[Math.floor(Math.random() * gothic.air.length)];
	var i = 0;
	while(i < 6){
		hor += (", " + gothic.air[Math.floor(Math.random() * gothic.air.length)]);
		i++;
	}
	return hor;
}

function randomEarth(){
	var hor = gothic.earth[Math.floor(Math.random() * gothic.earth.length)];
	var i = 0;
	while(i < 6){
		hor += (", " + gothic.earth[Math.floor(Math.random() * gothic.earth.length)]);
		i++;
	}
	return hor;
}

console.log(randomFire());
console.log(randomEarth());
console.log(randomAir());
console.log(randomWater());