class InputForm{
    constructor(){
        this.txtTitle=document.createElement('input');
        this.txtTitle.type='text';
        this.txtTitle.id='txt-title';
        this.txtTitle.placeholder='Title';

        this.btnAdd=document.createElement('input');
        this.btnAdd.type='submit';
        this.btnAdd.id='btn-add';
        this.btnAdd.value='Add Task'

        this.form=document.createElement('section');
        this.form.appendChild(this.txtTitle);
        this.form.appendChild(this.btnAdd);
    }

    getNode(){
        return this.form;
    }   
    setBtnAddOnClick(onClick){
        this.btnAdd.addEventListener('click',onClick);
    }
    //ToDo: Add onKeyUp
}

export{
    InputForm
}