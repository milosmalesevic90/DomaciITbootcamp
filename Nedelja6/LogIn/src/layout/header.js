class Header{
    constructor(){
        this.node=document.createElement('header');
        this.title=document.createElement('h1');
        this.title.innerHTML='Domaci 6 Nedelja';
        this.node.appendChild(this.title);
    }
    getNode(){
        return this.node;
    }

}
export{
    Header
}