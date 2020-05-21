import { FlatModel } from './flat.model';
export class UserModel {
    /**
     * Not null for getUserInfo()
     */
    id: number;
    /**
     * Not Empty for getUserInfo()
     */
    email: string;
    name: string;
    nickname: string;
    password: string;
    surname: string;
    city: string;
    token: string;
    roles: string[];
    flats: FlatModel[];
    constructor() {
        this.email = '';
        this.name = '';
        this.nickname = '';
        this.password = '';
        this.surname = '';
        this.city = '';
        this.roles = [];
        this.flats = [];
    }
}
