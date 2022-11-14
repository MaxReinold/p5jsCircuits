function connect(a, b, c, isOutput) {
    if(a instanceof Cord) {
        if(b instanceof Gate) {
            if(isOutput) {
                a.s = b.getOutputCoordinates(c);
                b.outputCords[c] = a;
            } else {
                a.e = b.getInputCoordinates(c);
                a.output = (powered) => {
                    b.inputs[c] = powered;
                }
            }
        }
        if(b instanceof Input) {
            connect(b, a, c);
        }
    } else if(a instanceof Gate) {
        if(b instanceof Cord) {
            connect(b, a, c, isOutput);
        }
    } else if(a instanceof Input) {
        if(b instanceof Cord) {
            a.cord = b;
            a.cord.s = a.pos;
        }
    }
}

class Cord {
    constructor(sx, sy, ex, ey) {
        this.s = new p5.Vector(sx, sy);
        this.e = new p5.Vector(ex, ey); 
        this.powered = false;
        this.output = null;
    }

    draw() {
        push();
        strokeWeight(5);
        this.update();
        stroke(this.powered?color(255, 204, 0):255);
        line(this.s.x, this.s.y, this.e.x, this.e.y);
        pop();
    }

    update() {
        if(this.output != null) {
            this.output(this.powered);
        }
    }
}

class Input {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y);
        this.powered = false;
        this.cord = null;
    }

    draw() {
        push();
        this.update();
        fill(this.powered?color(255, 204, 0):255);
        ellipse(this.pos.x, this.pos.y, 3 * 10, 3 * 10);
        pop();
    }

    update() {
        if(this.cord != null) {
            this.cord.powered = this.powered;
        }
    }

    validateClick(location) {
        if(location.dist(this.pos) < 1.5 * 10) {
            this.toggle();
        }
    }

    toggle() {
        this.powered = !this.powered;
    }
}