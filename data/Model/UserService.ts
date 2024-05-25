import { PrismaClient } from "@prisma/client";

export default  class UserService {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
    async getUserByEmail(email: string) {
        return { email: email };
    }
    async createUser(user: any) {
        return this.prisma.user.create({ data: user });
    }
    async getUserById(id: number) {
        return this.prisma.user.findUnique({ where: { id: id } });
    }
    async getUsers() {
        return this.prisma.user.findMany();
    }
}