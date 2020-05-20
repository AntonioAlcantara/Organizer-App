export class UserModel {
    email: string;
    name: string;
    nickname: string;
    password: string;
    surname: string;
    id: number;
    token: string;
    // birth: string;
    // city: string;
    // id: number;
    constructor() {
        this.email = '';
        this.name = '';
        this.nickname = '';
        this.password = '';
        this.surname = '';
    }
}
