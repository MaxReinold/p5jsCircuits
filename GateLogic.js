class Gate {
    constructor(x, y, inputCount, outputCount, logic) {
        this.inputs = [];
        this.outputs = [];
        this.outputCords = [];
        //fill inputs and outputs with false
        for(let i = 0; i < inputCount; i++) {
            this.inputs.push(false);
        }
        for(let i = 0; i < outputCount; i++) {
            this.outputs.push(false);
        }
        for(let i = 0; i < outputCount; i++) {
            this.outputCords.push(null);
        }
        this.pos = new p5.Vector(x, y);
        this.height = Math.max(inputCount, outputCount) * 30;
        this.width = this.height * 3/2;
    }

    draw() {
        push();
        fill(255);
        stroke(0);
        rectMode(CORNER);
        rect(this.pos.x, this.pos.y, this.width, this.height);
        this.update();
        for(let yMod = 0; yMod < this.inputs.length; yMod++) {
            fill(this.inputs[yMod]?color(255, 204, 0):255);
            ellipse(this.pos.x, this.pos.y + yMod*30 + 15, 2 * 10, 2 * 10);
        }
        let yOffset = (this.height - this.outputs.length * 30) / 2;
        for(let yMod = 0; yMod < this.outputs.length; yMod++) {
            fill(this.outputs[yMod]?color(255, 204, 0):255);
            ellipse(this.pos.x + this.width, this.pos.y + yMod*30 + 15 + yOffset, 2 * 10, 2 * 10);
        }
        pop();
    }

    getInputCoordinates(index) {
        return new p5.Vector(this.pos.x, this.pos.y + index*30 + 15);
    }

    getOutputCoordinates(index) {
        let yOffset = (this.height - this.outputs.length * 30) / 2;
        return new p5.Vector(this.pos.x + this.width, this.pos.y + index*30 + 15 + yOffset);
    }

    handleClick() {

    }

    logic() { 
        //override this
    }

    update() {
        this.outputs = this.logic(this.inputs);
        for(let i = 0; i < this.outputs.length; i++) {
            if(this.outputCords[i] != null) {
                this.outputCords[i].powered = this.outputs[i];
            }
        }
    }
}