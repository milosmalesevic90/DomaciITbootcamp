

export class Login {
    constructor() {
        this.node = document.createElement('div');

        this.txtUsername = document.createElement('input');
        this.txtUsername.type = 'text';
        this.txtUsername.placeholder = this.txtUsername.name = 'Username';
        

        this.txtPassword = document.createElement('input');
        this.txtPassword.type = 'password';
        this.txtPassword.placeholder = this.txtPassword.name = 'Password';

        this.btnLogin = document.createElement('input');
        this.btnLogin.type = 'submit';
        this.btnLogin.value = 'Login';

        this.node.appendChild(this.txtUsername);
        this.node.appendChild(this.txtPassword);
        this.node.appendChild(this.btnLogin);
        this.username = '';
        this.Password = '';

        this.btnLogin.addEventListener('click', () => {
            
            this.username = this.txtUsername.value;
            this.Password = this.txtPassword.value;
        });

    }

    getNode() {
        return this.node;
    }
    btnAddClickEventListener(onclick) {
        this.btnLogin.addEventListener('click', onclick);
    }
}