import type { ISystemUser } from "src/types";
import User from "./User";
import checkPassword from "src/utils/checkPassword";

export default class SystemUser extends User implements ISystemUser {
    constructor(
        public name: string,
        public age: number,
        public login: string,
        private password: string
    ) {
        super();
        this.password = this.setPassword(password);
    }
    public setPassword(password: string) {
        if (checkPassword(password)) {
            this.password = password;
            return password;
        }
        throw new Error('Некорректный пароль!');
    }

    public getSystemUserInfo() {
        return `${this.getUserInfo()}, логин: ${this.login}`;
    }
}