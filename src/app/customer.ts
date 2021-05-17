export class Customer {
    id: string = ''
    firstname: string = ''
    lastname: string = ''
    email: string = ''
    country: string = ''
    state: string = ''
    city: string = ''
    phonenumber: string = ''

    constructor(obj?: any) {

        if (!obj) {
            return;
        }

        this.id = obj.id
        this.firstname = obj.firstname
        this.lastname = obj.lastname
        this.email = obj.email
        this.country = obj.country
        this.state = obj.state
        this.city = obj.city
        this.phonenumber = obj.phonenumber

    }
}
