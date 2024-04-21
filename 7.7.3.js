const users = [
    { name: "John Doe", age: 28 },
    { name: "Jane Doe", age: 31 },
    { name: "Carl Johnson", age: 17 },
];
const filteredUsers = users.filter((user) => {
    return users.age > 18;
});
const onlyNames = users.filter((user) => {
    return users.name;
});
 