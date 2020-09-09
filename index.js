const randomColor = require('randomcolor');
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

/*stretch goals in progress
const randomHex = require('random-hex');
const readline = require('readline');

if (process.argv[2] === 'ask') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  userInput = rl.question('What hue and luminosity?', (colorhue, colorlum) => {
    const hue = colorhue;
    const lum = colorlum;
    const newColor = randomColor({
      luminosity: lum,
      hue: hue,
    });
    const newdisplayColor = createColor(newColor);
    const newdisplay = newdisplayColor(`##############################
##############################
##############################
#####                    #####
#####                    #####
#####      ${newColor}       #####
#####                    #####
#####                    #####
##############################
##############################
##############################`);
    console.log(newdisplay);
    rl.close();
  });
} else {
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
}
*/
