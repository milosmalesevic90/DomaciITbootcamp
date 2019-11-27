import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo } from "../utilities/todo-service";
import { InputFormuser } from "../components/inputFormuser";
import { addToDo } from "../utilities/todo-service";
import { deleteToDo } from "../utilities/todo-service";

class Main {
    constructor() {
        let inputForm = new InputForm();
        let inputFormuser = new InputFormuser();
        let taskList = new TaskList();

        this.node = document.createElement('main');
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(inputFormuser.getNode());
        this.userName = '';
        inputFormuser.setBtnAddOnClick(() => {
            let text = inputFormuser.txtTitle.value;
            text = text.trim();
            this.userName = text;

            if (text == '') return;
            taskList.emptyList();
            getToDo(text).then(data => {
                let items = data.items;
                items.forEach(item => {
                    let task = new Task(item.title);
                    task.setBtnDeleteClickEvent(() => {
                        deleteToDo(this.userName, text)

                        task.deleteItem();
                    })
                    taskList.addTask(task);
                })

            })


        })
        this.node.appendChild(taskList.getNode());
        inputForm.setBtnAddOnClick(() => {
            let text = inputForm.txtTitle.value;
            text = text.trim();

            if (text == '') return;

            let task = new Task(text);
            task.setBtnDeleteClickEvent(() => {
                task.deleteItem();
            });
            taskList.addTask(task);
            addToDo(this.userName, text);
            inputForm.txtTitle.value = '';
        });

        // getToDo('marko').then(data => {
        //     let items = data.items;
        //     items.forEach(item=>{
        //         let task=new Task(item.title);
        //         task.setBtnDeleteClickEvent(()=>{
        //             task.deleteItem();
        //         })
        //         taskList.addTask(task);
        //     })

        // })
        // getToDo('pera').then(data => {
        //     let items = data.items;
        //     items.forEach(item=>{
        //         let task=new Task(item.title);
        //         task.setBtnDeleteClickEvent(()=>{
        //             task.deleteItem();
        //         })
        //         taskList.addTask(task);
        //     })

        // })

    }
    getNode() {
        return this.node;
    }

}

export {
    Main
}