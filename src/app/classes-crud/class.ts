export class Class {
    id: string = ''
    name: string = ''

    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.id = obj.id
        this.name = obj.name
    }
}