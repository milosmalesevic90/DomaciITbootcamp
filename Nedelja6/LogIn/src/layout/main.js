
import { Login } from "../components/login";
import { CheckPassword, CheckUsername } from "../utilities/service";

class Main {
    constructor() {
        let loginForm = new Login();

        this.node = document.createElement('main');
        this.node.appendChild(loginForm.getNode());


        this.username = '';
        this.password = '';
        loginForm.btnAddClickEventListener(() => {
            let pass = loginForm.txtPassword.value;
            let text = loginForm.txtUsername.value;

            text = text.trim(); 
            this.username = text;

            if (pass == '')
                alert("Please enter Password");

            if (text == '')
                alert("Please enter Username");

            if (text == '') return;
            CheckUsername(text);
            CheckPassword(pass);

      

        

            loginForm.txtPassword.value = '';
            loginForm.txtUsername.value = '';
            

        })
    }
    getNode() {
        return this.node;
    }
}

export {
    Main
}