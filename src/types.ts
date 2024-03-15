export class ClassAsType {
    constructor(readonly name: string) {}

    toString() {
        return `[person ${this.name}]`;
    }
}

export interface ITypeAsType {
    name: string
}

export interface IUser {
    name: string
    age: number
}

export interface ISystemUser extends IUser {
    login: string
}