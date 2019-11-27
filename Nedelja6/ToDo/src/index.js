import { Dashboard } from "./layout/dashboard";
import { getAllToDo, getToDo } from "./utilities/todo-service";

const app=document.querySelector('#app');
let dashboard= new Dashboard();
app.appendChild(dashboard.getNode());

getAllToDo().then(data=>{
    console.log(data);
})

getToDo('marko').then(data=>{
    console.log(data);
})