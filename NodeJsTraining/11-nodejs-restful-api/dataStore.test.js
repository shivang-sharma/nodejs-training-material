const dataStore = require('./dataStore');

describe("Test addUser method of dataStore", () => {
    const fName = "Shivang"
    const lName = "Sharma"
    const email = "email@gmail.com"
    const response = dataStore.addUser(fName, lName, email);
    console.log(response);
    test("Test that user is added successfully with valid id", () => {
        expect(response.id).toBeDefined();
        expect(response.id).toBeGreaterThan(0);
    });
    test("Test that user is added successfully with correct First Name", () => {
        expect(response.fname).toBe(fName);
    });
    test("Test that user is added successfully with correct Last Name", () => {
        expect(response.lname).toBe(lName);
    });
    test("Test that user is added successfully with correct email", () => {
        expect(response.email).toBe(email);
    });
});

describe("Test addUser method of dataStore", () => {
    const fName = "Shivang"
    const lName = "Sharma"
    const email = "email@gmail.com"
    dataStore.addUser(fName, lName, email);
    const response = dataStore.getAllUsers();
    test("Test that array of all the users are returned", () => {
        expect(response.length).toBeGreaterThan(0);
    })
});
