import type { IUser } from "src/types";

export default abstract class User implements IUser {
    abstract name: string
    abstract age: number

    getUserInfo() {
        return `Имя: ${this.name}, возраст: ${this.age}`
    }
}