let network;
let trainingSet = [];//80%
let testingSet = [];//20%
let sample = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,188,255,94,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,191,250,253,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,123,248,253,167,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,247,253,208,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,207,253,235,77,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,209,253,253,88,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,93,254,253,238,170,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,210,254,253,159,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,209,253,254,240,81,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,253,253,254,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,206,254,254,198,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,253,253,196,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,203,253,248,76,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,188,253,245,93,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,103,253,253,191,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,240,253,195,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,220,253,253,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,94,253,253,253,94,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,251,253,250,131,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,214,218,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
let sample2 = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,34,0,0,0,57,136,162,245,203,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,147,249,253,224,232,232,6,81,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,91,254,253,242,128,17,97,240,149,254,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,57,253,254,151,38,0,0,47,253,253,228,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,221,254,160,0,0,0,0,164,254,228,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,253,253,9,0,0,17,130,251,223,73,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,253,253,17,0,19,199,254,223,42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,186,253,235,101,199,253,195,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,210,255,254,254,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,254,253,253,211,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,149,254,215,232,253,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,125,253,228,15,107,253,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,106,254,228,0,0,17,235,229,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,243,164,15,0,0,13,222,241,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,119,254,206,9,0,0,0,141,253,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,234,228,40,0,0,0,102,240,219,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,141,254,102,0,0,0,128,245,188,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,207,168,0,9,89,172,254,160,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,207,169,83,174,242,230,80,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,140,253,228,143,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
let sample3 = "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,93,95,95,95,188,198,194,95,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,224,254,254,254,254,254,254,254,231,43,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,73,229,254,254,254,254,254,213,171,243,254,184,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,251,254,254,212,46,20,20,11,0,165,254,212,0,0,0,0,0,0,0,0,0,0,0,0,0,0,41,228,254,254,185,2,0,0,0,0,0,187,254,255,0,0,0,0,0,0,0,0,0,0,0,0,0,71,238,254,254,202,19,0,0,0,0,0,60,250,254,162,0,0,0,0,0,0,0,0,0,0,0,0,33,196,254,254,225,34,0,0,0,0,0,0,94,254,254,82,0,0,0,0,0,0,0,0,0,0,0,2,176,255,254,251,57,0,0,0,0,0,0,12,207,254,230,27,0,0,0,0,0,0,0,0,0,0,15,175,254,254,202,34,0,0,0,0,0,0,0,168,254,248,77,0,0,0,0,0,0,0,0,0,0,0,30,241,254,254,196,0,0,0,0,0,0,0,31,218,254,248,37,0,0,0,0,0,0,0,0,0,0,33,243,254,250,153,4,0,0,0,0,0,0,36,222,254,226,77,2,0,0,0,0,0,0,0,0,0,17,218,254,254,192,0,0,0,0,0,0,15,89,118,200,211,54,0,0,0,0,0,0,0,0,0,0,0,48,254,254,254,69,0,0,0,0,7,73,198,254,247,122,51,0,0,0,0,0,0,0,0,0,0,0,0,122,254,254,195,6,0,0,20,79,157,254,254,222,213,50,0,0,0,0,0,0,0,0,0,0,0,0,0,194,254,254,246,229,229,229,236,254,250,110,86,41,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,124,254,254,254,254,254,254,254,254,196,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,178,254,254,254,254,250,244,112,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,90,94,94,94,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";
let sampleSplit = [];
let sampleSplit2 = [];
let sampleSplit3 = [];

function preload() {
    //trainingSet = loadTable('data/train.csv', 'csv', "header").getArray();
    //testSet = loadTable('data/test.csv', 'csv', "header").getArray();
}

function setup() {
    createCanvas(560, 560);
    network = new NeuralNet(784, 49, 10);
    sampleSplit = sample.split(",");
    sampleSplit2 = sample2.split(",");
    sampleSplit3 = sample3.split(",");
    //print(sampleSplit);
    //print(trainingSet.getRowCount() + ' total rows in table');
    //print(testSet.getColumnCount() + ' total columns in table');
    //load the data into trainingSet and testingSet
    background(0);
}

function mouseClicked() {
    //network.fire(trainingSet[]);
    //network.train(trainingSet[].output);
    displayData();
}

function displayData() {
    let count = 0;
    for(let i = 0 + 560/29; i < 560; i+=560/29){
        for(let j = 0 + 560/29; j < 560; j+=560/29){
            noStroke();
            //fill(int(sampleSplit[count]));
            fill(int(sampleSplit2[count]));
            //fill(int(sampleSplit3[count]));
            ellipse(i, j, 13, 13);
            count++;
        }
    }
}

function draw() {
}
