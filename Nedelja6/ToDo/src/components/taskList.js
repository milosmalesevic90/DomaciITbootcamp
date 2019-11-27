

class TaskList{
    constructor(){
        this.list=document.createElement('section');
        this.list.id='tasks-container';
    }
    addTask(task){
        this.list.appendChild(task.getNode());
    }
    emptyList(){
        this.list.innerHTML="";
    }
    getNode(){
        return this.list;
    }
}

export{
    TaskList
}