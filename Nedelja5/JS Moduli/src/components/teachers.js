import Teacher from './teacher';
import { countItems, Gender } from '../services/utils';
const teacherList = [
    {
        firstName: 'Cvijan',
        lastName: 'Peranovic',
        age: 20,
        gender: 0,
        classSubject: "Math"
    }, {
        firstName: 'Dusan',
        lastName: 'Bobicic',
        age: 21,
        gender: 1,
        classSubject: 'Bio'
    }
];
export default class Teachers {
    constructor() {}
    getTeacher(){
        let html ='<ul>';
        teacherList.forEach(teacher => {
            let item =  new Teacher(teacher.firstName, teacher.lastName, teacher.age, Gender[teacher.gender], teacher.classSubject);
            html += item.getTeacher();
        });
        console.log(`Init teachers`, countItems(teacherList));
        html+='</ul>';
        return html;
}}