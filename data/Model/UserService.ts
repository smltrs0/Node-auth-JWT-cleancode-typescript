import { PrismaClient } from "@prisma/client";

export default  class UserService {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async getUserByEmail(email: string) : Promise<any> {
        return this.prisma.user.findUnique({ where: { email: email }, select: { id: true, username: true, email: true, password: true } });
    }
    async createUser(user: any) {
        return this.prisma.user.create({ data: user, select: { username: true, email: true } });
    }
    async getUserById(id: string) : Promise<any> {
        return this.prisma.user.findUnique({ where: { id: id } });
    }
    async getUsers() {
        return this.prisma.user.findMany({ where:{ deleted: null }, select: { id: true, username: true, email: true }});
    }

    async editUser(id: string, data: any): Promise<any> {
        return this.prisma.user.update({ where: { id: id }, data: { ...data.user }, select: { id: true, username: true, email: true } });
    }

    async deleteUser(id: string) : Promise<any>{
        return this.prisma.user.update({ where: { id: id }, data: { deleted: new Date() }, select: { id: true, username: true, email: true } });
    }
}