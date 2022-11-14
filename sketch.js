let current = new Workspace();

function setup() {
    createCanvas(1500, 1000);
    current.addInput();
    current.addInput();
    current.addComponent(new Gate(600, 500, 2, 1));
    current.components[2].logic = function(inputs) {
        return [inputs[0] || inputs[1]];
    }
    current.addComponent(new Cord(0, 0, 0, 0));
    connect(current.components[0], current.components[3], 0, false);
    connect(current.components[3], current.components[2], 0, false);
    current.addComponent(new Cord(0, 0, 0, 0));
    connect(current.components[1], current.components[4], 1, false);
    connect(current.components[4], current.components[2], 1, false);
}

function draw() {
    background(40);
    push();
    //draw outline around canvas 100 pixels in
    stroke(255);
    strokeWeight(5);
    noFill();
    rect(100, 40, width - 200, height - 100);
    pop();
    current.draw();
}

function mouseClicked() {
    current.handleClick();
}
