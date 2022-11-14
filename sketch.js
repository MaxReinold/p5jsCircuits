let andGate = new Gate(200, 400, 2, 1);
andGate.logic = ([a, andGate]) => [a && andGate];
let notGate = new Gate(500, 400, 1, 1);
notGate.logic = ([a]) => [!a];
let cordba = new Cord(100, 400, 0, 0);
let cordbb = new Cord(100, 500, 0, 0);
let i1 = new Input(100, 350);
let i2 = new Input(100, 500);
let outputCord = new Cord(0, 0, 1400, 400);
let intermediateCord = new Cord(0, 0, 0, 0);

connect(andGate, intermediateCord, 0, true);
connect(intermediateCord, notGate, 0, false);
connect(notGate, outputCord, 0, true);


connect(i1, cordba, 0);
connect(i2, cordbb, 0);
connect(cordba, andGate, 0);
connect(cordbb, andGate, 1);

function setup() {
    createCanvas(1500, 1000);
}

function draw() {
    background(40);
    andGate.draw();
    i1.draw();
    cordba.draw();
    cordbb.draw();
    i2.draw();
    outputCord.draw();
    notGate.draw();
    intermediateCord.draw();
}

function mouseClicked() {
    i1.validateClick(
        new p5.Vector(mouseX, mouseY)
    );
    i2.validateClick(
        new p5.Vector(mouseX, mouseY)
    );
}