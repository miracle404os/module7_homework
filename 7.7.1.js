function printInfo() {
    console.log(`Name: ${this.name}, Age:${this.age}`);
}
const person = {
name: "John",
age: "38"
};
printInfo.call(person);