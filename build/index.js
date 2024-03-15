// Enum
var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 0] = "cat";
    Animals[Animals["dog"] = 1] = "dog";
    Animals[Animals["bird"] = 2] = "bird";
})(Animals || (Animals = {}));
var SelectVariables;
(function (SelectVariables) {
    SelectVariables["cat"] = "\u043A\u043E\u0448\u043A\u0430";
    SelectVariables["dog"] = "\u0441\u043E\u0431\u0430\u043A\u0430";
    SelectVariables["bird"] = "\u043F\u0442\u0438\u0446\u0430";
    SelectVariables["catAlias"] = "\u043A\u043E\u0448\u043A\u0430";
})(SelectVariables || (SelectVariables = {}));
let a = SelectVariables.cat;
let enumKeys = Object.keys(SelectVariables);
console.log(SelectVariables);
console.log(enumKeys);
console.log(a);
// при объявлении const Enum не будет преобразован в объект
var SomeCount;
(function (SomeCount) {
    SomeCount[SomeCount["count"] = 10] = "count";
})(SomeCount || (SomeCount = {}));
let someCount = SomeCount.count;
// С помощью оператора typeof можно запросить тип из объекта за счет вывода типов
let objForType = { a: 1, b: 'value' };
let objFromType; // для objFromType будет работать автодополнение
function action1(arg) {
    return arg;
}
function action2(arg) {
    return arg;
}
// в скомпилированном файле останется только method1
class AClass {
    method1(arg) {
        return arg;
    }
}
class AClassImpl extends AClass {
    param;
    constructor(param) {
        super();
        this.param = param;
        this.param = this.method1(1);
    }
    method(a) {
        return a;
    }
}
// index.lib.ts
import SystemUser from "./module/SystemUser";
const user = new SystemUser('User', 30, 'admin', '123');
console.log(user.getSystemUserInfo());
// передача функциям аргументов типа напрямую
function makeBox(value) {
    return { value };
}
const makeHammerBox = (makeBox);
const makeWrenchBox = (makeBox);
makeHammerBox(1); // Error
