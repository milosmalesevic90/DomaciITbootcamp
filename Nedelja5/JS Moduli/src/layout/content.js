import Students from '../components/students'
import Teachers from '../components/teachers'
import Users from '../components/users'

class Content {
    constructor() {

    }
    getHtml() {
        const teachers = new Teachers();
        const students = new Students();
        const users = new Users();
        let html = '<div>';
        html += students.getStudent();
        html += teachers.getTeacher();
        html += users.getUser();
        html += '</div>'
        console.log('Init content');
        return html;
    }
}

export default Content;