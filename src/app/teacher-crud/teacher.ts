import { Class } from "../classes-crud/class";

export class Teacher {
    id: string = ''
    name: string = ''
    class: Class = new Class({})
  

    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.id = obj.id
        this.name = obj.name
        this.class = new Class(obj.class)
     
    }
}