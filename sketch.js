let inputs = [];
function setup() {
    createCanvas(1000, 600);
    inputs.push(new Input(createVector(50, 50)));
    inputs[0].connections.push(new Cord(inputs[0].pos.x, inputs[0].pos.y, 250, 250));
}

function draw() { 
    background(50);
    inputs[0].draw();
}

function mouseClicked() {
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].validateClick(createVector(mouseX, mouseY));
    }
}