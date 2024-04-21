const person = {
    fullName: '',
    setFullName: function () {
        console.log(`${this.fullName}`);
    }
};
const setPersonFullName = person.setFullName.bind('John Smith');