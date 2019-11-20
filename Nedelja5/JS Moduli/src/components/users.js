import User from './user';
import { countItems, Gender } from '../services/utils';


const userList = [
    {
        firstName: 'User1',
        lastName: 'PrezimeUser1',
        age: 19,
        gender: 1,
        userName: 'Robokap'
    }, {
        firstName: 'User2',
        lastName: 'PrezimeUser2',
        age: 23,
        gender: 0,
        userName: 'Superman'
    }
];

export default class Users {
    constructor() { }
    getUser() {
        let html = '<ul>';
        userList.forEach(user => {
            let item = new User(user.firstName, user.lastName, user.age, Gender[user.gender], user.userName);
            html += item.getUser();
        });
        html += '</ul>';
        console.log(`Init users`, countItems(userList));
        return html;


    }
}

