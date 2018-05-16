class NeuralNet {
    constructor(num_of_inputs, num_of_hidden, num_of_output) {
        this.inputLayer = [];
        this.hiddenLayer = [];
        this.outputLayer = [];

        for(let i = 0; i < num_of_inputs; i++) {
            this.inputLayer[i] = new Neuron();
        }

        for(let i = 0; i < num_of_hidden; i++) {
            this.hiddenLayer[i] = new Neuron(this.inputLayer);
        }

        for(let i = 0; i < num_of_output; i++) {
            this.outputLayer[i] = new Neuron(this.hiddenLayer);
        }
    }

    fire(data) {
        let responses = [];
        //loads all the data into the input layer
        for(let i = 0; i < this.inputLayer.length; i++) {
            this.inputLayer[i].output = data.inputs[i];
        }

        for(let i = 0; i < this.hiddenLayer.length; i++) {
            this.hiddenLayer[i].fire();
        }

        for(let i = 0; i < this.output.length; i++) {
            this.outputLayer[i].fire();
        }
    } 

    train(output) {
        for(let i = 0; i < this.outputLayer.length; i++) {
            this.outputLayer[i].error = this.outputLayer[i];
            this.outputLayer[i].train();
        }

        this.hiddenLayer.forEach(function(this){
            this.train();
        });
    }
}