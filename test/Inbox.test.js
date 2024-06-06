const assert = require("assert");
const ganache = require("ganache");
const { Web3 } = require("web3");

const web3 = new Web3(ganache.provider());

// ganache sample
// For ref
class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vromm";
  }
}
let car;
beforeEach(() => {
  console.log("beforeEach here");
  car = new Car();
});
describe("Car", () => {
  it("can park", () => {
    assert.equal(car.park(), "stopped");
  });

  it("can drive", () => {
    assert.equal(car.drive(), "vromm");
  });
});
