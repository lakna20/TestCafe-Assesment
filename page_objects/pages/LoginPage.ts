import {Selector, t} from 'testcafe'
class LoginPage{
    constructor(){

        this.userName= Selector("#user-name");
        this.password= Selector("#password");
        this.loginButton=Selector("#login-button");
    }

    async typeUserName(user) {
        await t.typeText(this.userName,user)
    }
    async typePassword(pass){
        await t
        .typeText(this.password,pass)
    }
    async clickLoginBtn(){
        await t
        .click(this.loginButton)
    }
}

export default LoginPage