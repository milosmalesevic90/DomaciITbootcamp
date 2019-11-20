export default class User {
    constructor(
        firstName,
        lastName,
        age,
        gender,
        userName
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.userName = userName;
        console.log(`Init user-${this.firstName}`);
    }
    getUser() {
        return `<li>${this.firstName}${this.lastName}${this.userName}</li>`
    }
}