export default class Teacher{
    constructor(
        firstName,
        lastName,
        age,
        gender,
        classSubject
    ){
        this.firstName = firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
        this.classSubject=classSubject;
        console.log(`Init teacher-${this.firstName}`);
    }
    getTeacher(){
        return `<li>${this.firstName}${this.lastName}</li>`
    }
}