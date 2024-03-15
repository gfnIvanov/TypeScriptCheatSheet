import User from "./User";
import checkPassword from "src/utils/checkPassword";
export default class SystemUser extends User {
    name;
    age;
    login;
    password;
    constructor(name, age, login, password) {
        super();
        this.name = name;
        this.age = age;
        this.login = login;
        this.password = password;
        this.password = this.setPassword(password);
    }
    setPassword(password) {
        if (checkPassword(password)) {
            this.password = password;
            return password;
        }
        throw new Error('Некорректный пароль!');
    }
    getSystemUserInfo() {
        return `${this.getUserInfo()}, логин: ${this.login}`;
    }
}
