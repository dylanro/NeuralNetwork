let network;
let trainingSet = [];//80%
let testingSet = [];//20%

function setup() {
    network = new NeuralNet(196, 49, 10);
    //load the data into trainingSet and testingSet
}

function mouseClicked() {
    network.fire(trainingSet[]);
    network.train(trainingSet[].output);
}

function draw() {

}
