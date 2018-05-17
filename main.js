let network;
let trainTable;
let trainingSet = [];//80%
let testTable;
let testingSet = [];//20%

function preload() {
    trainTable = loadTable('data/train.csv', 'csv', "header");
    testTable = loadTable('data/test.csv', 'csv', "header");
}

function setup() {
    network = new NeuralNet(196, 49, 10);
    print(table.getRowCount() + ' total rows in table');
    print(table.getColumnCount() + ' total columns in table');
    var tableArray = table.getArray();
    print(tableArray);
    //load the data into trainingSet and testingSet
}

function mouseClicked() {
    network.fire(trainingSet[]);
    network.train(trainingSet[].output);
}

function draw() {

}
