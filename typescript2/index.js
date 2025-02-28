var firstName = "Sally";
var lastName = "Brown";
var age = 25;
var user1 = {
    firstName: "Bill",
    lastName: "Fae",
    age: 45,
};
var getFullName = function (user1) {
    return "".concat(user.firstName, " ").concat(user.lastName);
};
console.log(getFullName(user)); // logs "Bill Fae"
