const inputRadius = 10;

class Cord {
    constructor(sx, sy, ex, ey) {
        this.s = createVector(sx, sy);
        this.e = createVector(ex, ey); 
        this.powered = false;
    }

    draw() {
        push();
        strokeWeight(5);
        stroke(this.powered?color(255, 204, 0):255);
        line(this.s.x, this.s.y, this.e.x, this.e.y);
        pop();
    }
}

class Input {
    constructor(pos) {
        this.connections = [];
        this.pos = pos;
        this.powered = false;
    }

    toggle() {
        this.powered = !this.powered;
        for(let i = 0; i < this.connections.length; i++){ 
            this.connections[i].powered = this.powered;
        }
    }
    
    draw() {
        push();
        ellipseMode(CENTER);
        fill(this.powered?color(255, 204, 0):255);
        stroke(0);
        ellipse(this.pos.x, this.pos.y, 2 * inputRadius, 2 * inputRadius);
        pop();

        for(let i = 0; i < this.connections.length; i++) {
            this.connections[i].draw();
        }
    }

    validateClick(location) {
        if(location.dist(this.pos) < (inputRadius)) {
            this.toggle();
        }
    }
}