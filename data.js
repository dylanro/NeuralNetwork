//Stores all the information for a single data sample
class Data {
  constructor() {
    this.inputs = [];//stores every pixel, size = width * height
    this.outputs = [];//size = 10 (0-9)
    this.label;//what the Data sample actually is
  }
}
