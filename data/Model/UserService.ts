
export default  class UserService {
    constructor() {
    }
    async getUserByEmail(email: string) {
        return { email: email };
    }
    async createUser(user: any) {
        return user;
    }
    async getUserById(id: string) {
        return { id: id };
    }
}