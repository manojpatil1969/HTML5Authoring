//Employee Object
let employee = {
    firstname: "John",
    lastname: "Johnson",
    position: "Production Assistant",
    location: "Norwalk, CT",
    age: 30,
};

const person = {
    firstname: "Tom",
    lastname: "Green",
    welcome  : function() {
        return `Greetings!, I'm ${this.firstname} ${this.lastname}`;
    },
};