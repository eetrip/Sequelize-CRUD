const os = require("os");
const path = require("path");
const { Worker, parentPort, workerData } = require("worker_threads");

const cpuCount = os.cpus().length;
const workerPath = path.resolve(__dirname + "/calcPrimes.js");

const calculatePrimes = number => {
  return new Promise((resolve, reject) => {
    const numbers = [];

    const area = new SharedArrayBuffer(number - 1);
    const sieve = new Int8Array(area);

    const segmentSize = Math.ceil((number - 1) / cpuCount);
    var segments = [];

    for (let segmentIndex = 0; segmentIndex < cpuCount; segmentIndex++) {
      const start = segmentIndex * segmentSize;
      const segment = [start, segmentSize];
      segments.push(segment);
    }

    const limit = Math.ceil(Math.sqrt(number));

    const workers = segments.map(segment => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {
          workerData: {
            start: segment[0],
            size: segment[1],
            curr: 2,
            limit: limit,
            sieve: sieve
          }
        });

        worker.on("message", resolve);
        worker.on("error", reject);
        worker.on("exit", code => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    });

    Promise.all(workers).then(res => {
      let counter = 2;
      const primes = [];
      sieve.forEach(elem => {
        if (elem == 0) {
          primes.push(counter);
        }
        counter += 1;
      });

      resolve(primes.length);
    });
  });
};

module.exports = calculatePrimes;
