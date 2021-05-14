export class User {
    id: string = ''
    name: string = ''
    email: string = ''
    password: string = ''

    constructor(obj?: any) {

        if (!obj) {
            return;
        }

        this.id = obj.id
        this.name = obj.name
        this.email = obj.email
        this.password = obj.password
    }
}
