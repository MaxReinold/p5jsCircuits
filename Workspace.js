class Workspace {
    constructor() {
        this.components = [];
        this._name = '';
    }

    addComponent(component) {
        this.components.push(component);
    }

    draw() { 
        this.components.forEach(component => {
            component.draw();
        });
    }

    handleClick() {
        this.components.forEach(component => {
            if(component instanceof Input) {
                component.handleClick();
            }
        });
    }

    //addes new input to workspace and updates the position of all other inputs to evenly distribute them around the center of the Y axis
    addInput() {
        let input = new Input(100, 100);
        this.addComponent(input);
        this.updateInputPositions();
    }

    //updates the position of all inputs in the workspace
    updateInputPositions() {
        let inputs = this.components.filter(component => component instanceof Input);
        let y = 200;
        let yStep = (height - 400) / (inputs.length - 1);
        inputs.forEach(input => {
            input.pos.y = y;
            y += yStep;
        });
    }
}