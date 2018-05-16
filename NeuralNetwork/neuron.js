const LR = 0.01;

function sigmoid(x) {
  return 2 / (1 + Math.exp(-2 * x)) - 1;
}

class Neuron {
  constructor(prev) {
    this.inputs = [];
    this.weights = [];
    this.output = 0;
    this.error = 0;

    for (let i = 0; i < prev.length; i++) {
      this.inputs.push(prev[i]);
      this.weights.push(random(-1, 1));
    }
  }

  fire() {
    let Weightedsum;
    for (let i = 0; i < this.inputs.length; i++) {
      Weightedsum += this.inputs[i].output * this.weights[i];
    }
    this.output = sigmoid(Weightedsum);
    this.error = 0;
  }

  train() {
    let delta = (1 - output) * (1 + output) * error * LR;
    for (let i = 0; i < this.inputs.length; i++) {
      this.inputs[i].error += weights[i] * error;
      this.weights[i] += this.inputs[i].output * delta;
    }
  }
}
