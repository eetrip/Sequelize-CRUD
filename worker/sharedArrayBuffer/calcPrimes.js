const { Worker, parentPort, workerData } = require("worker_threads");

const size = workerData.size;
const start = workerData.start;
const limit = workerData.limit;
var curr = workerData.curr;
const sieve = workerData.sieve;

while (curr <= limit && curr <= start + size - 1) {
  if (sieve[curr - 2] == 0) {
    if (start % curr) {
      var index = curr - (start % curr);
    } else {
      var index = 0;
    }

    for (index; index < size; index += curr) {
      if (start + index != curr) {
        sieve[start + index - 2] = 1;
      }
    }
  }

  curr += 1;
}

parentPort.postMessage("done");
parentPort.close();
