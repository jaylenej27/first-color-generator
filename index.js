const randomColor = require('randomcolor');
//const randomHex = require('random-hex');
const createColor = require('my-colors');

//get additional color parameters from user
const hueInput = process.argv[2];
const lumInput = process.argv[3];

//generate random color
const inputColor = randomColor({
  luminosity: lumInput,
  hue: hueInput,
});

//creates text color in terminal
const displayColor = createColor(inputColor);

//actual display design
const display = displayColor(`##############################
##############################
##############################
#####                    #####
#####                    #####
#####      ${inputColor}       #####
#####                    #####
#####                    #####
##############################
##############################
##############################`);

console.log(display);

/*
if(process.argv[2] === 'ask') {

}
const newdisplay = showcolor(`##############################
##############################
##############################
#####                    #####
#####                    #####
#####      ${color}       #####
#####                    #####
#####                    #####
##############################
##############################
##############################`);
//console.log(newdisplay);
*/
