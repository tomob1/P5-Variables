//code not in a group at the top of the page is global and change all affected code in the project
//known as Scope
var firstName = "indy"
var thisIsAstrig = 'hello'
var thisIsAnInteger
var thisIsAnUndefinedVar;
var thsisNull = null;

var ellipseX = 400;
var ellipseY = 400;

//‘var’ and ‘const’ are similar - const is one unchangeable value which is easier on RAM and can't be used again in the code, and var an be changed

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");
    console.log(firstName);
    console.log(thisIsAnInteger)
    background(220);
}



function draw() {
   

    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 100);

    console.log(width, height);
    
}