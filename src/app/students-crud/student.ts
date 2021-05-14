import { Class } from "../classes-crud/class";

export class Student {
    id: string = ''
    name: string = ''
    class: Class = new Class({})
    age: string = ''

    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.id = obj.id
        this.name = obj.name
        this.class = new Class(obj.class)
        this.age = obj.age
    }
}