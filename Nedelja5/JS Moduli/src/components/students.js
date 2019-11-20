import Student from './student';
import { countItems,Gender } from '../services/utils';

const studentList = [
    {
        firstName: 'Prvi',
        lastName: 'Student',
        age: 20,
        gender: 0,
        yearsOfStudy: 1
    }, {
        firstName: 'Drugi',
        lastName: 'Student',
        age: 21,
        gender: 1,
        yearsOfStudy: 2
    }
];
export default class Students {
    constructor() {}
    getStudent(){
        let html ='<ul>';
        studentList.forEach(student => {
            let item =new Student(student.firstName, student.lastName, student.age, Gender[student.gender], student.yearsOfStudy);
            html += item.getStudent();
        });
        html+='</ul>';
        console.log(`Init students`, countItems(studentList));
        return html;
    }
}