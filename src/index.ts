// Enum
enum Animals {
    cat,
    dog,
    bird
}

enum SelectVariables {
    cat = 'кошка',
    dog = 'собака',
    bird = 'птица',
    catAlias = cat
}

let a = SelectVariables.cat;

let enumKeys = Object.keys(SelectVariables);

console.log(SelectVariables)
console.log(enumKeys)
console.log(a)

// при объявлении const Enum не будет преобразован в объект
const enum SomeCount {
    count = 10
}

let someCount = SomeCount.count;

// С помощью оператора typeof можно запросить тип из объекта за счет вывода типов
let objForType = { a: 1, b: 'value' }

let objFromType: typeof objForType; // для objFromType будет работать автодополнение

// импорты не будут включены в сборку, если импортируемый класс не участвует в логике программы
// (вне зависимости от наличия import type)
import type { ClassAsType, ITypeAsType } from "./types";

function action1(arg: ClassAsType) {
    return arg;
}

function action2(arg: ITypeAsType) {
    return arg;
}

// в скомпилированном файле останется только method1
abstract class AClass {
    public abstract method(a: string): string
    public method1(arg: number): number {
        return arg;
    }
}

class AClassImpl extends AClass {
    constructor(readonly param: number) {
        super();
        this.param = this.method1(1)
    }
    public method(a: string): string {
        return a;
    }
}

// index.lib.ts
import SystemUser from "./module/SystemUser";

const user = new SystemUser('User', 30, 'admin', '123');

console.log(user.getSystemUserInfo());

// передача функциям аргументов типа напрямую
function makeBox<T>(value: T) {
    return { value };
}

const makeHammerBox = makeBox<number>;
const makeWrenchBox = makeBox<string>;

makeHammerBox(1) // Error
