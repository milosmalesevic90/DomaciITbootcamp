class Task {

    constructor(title) {
        this.title = title;
        this.item = document.createElement("div");
        this.item.className = 'task-item';

        this.itemText = document.createElement('p');
        this.itemText.innerHTML = title;
        this.itemText.className = 'task-title';

        this.removeBtn=document.createElement('button');
        this.removeBtn.className='task-remove-btn';
        this.removeBtn.innerHTML='X';
        this.item.appendChild(this.itemText);
        this.item.appendChild(this.removeBtn);

    }

    getNode(){
        return this.item;
    }
    setBtnDeleteClickEvent(onClick){
        this.removeBtn.addEventListener('click',onClick);
    }
    deleteItem(){
        this.item.remove();
    }
}
export{
    Task
}