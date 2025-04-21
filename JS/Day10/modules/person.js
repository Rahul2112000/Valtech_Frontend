class Person {
  canWalk = "I can walk";
  constructor(newability = null) {
    if (newability) {
      this.canWalk = newability;
    }
  }
}

//export name
export { Person }
