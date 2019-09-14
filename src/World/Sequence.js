class Sequence {
  counter = 0
  next() {
    return (++this.counter);
  }
}

const seq = new Sequence();

export default seq;
