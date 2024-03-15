export class ClassAsType {
    name;
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `[person ${this.name}]`;
    }
}
