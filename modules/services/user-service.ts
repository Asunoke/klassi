import { UserRepository } from "../repositories/user-repository";
import { UserInput } from "../validations/user";

export class UserService {
    private repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    async getUserByEmail(email: string) {
        return await this.repository.findByEmail(email);
    }

    async getUserById(id: string) {
        return await this.repository.findById(id);
    }

    async createUser(data: UserInput) {
        const existing = await this.repository.findByEmail(data.email);
        if (existing) {
            throw new Error("User already exists");
        }
        return await this.repository.create(data);
    }

    async updateUser(id: string, data: Partial<UserInput>) {
        return await this.repository.update(id, data);
    }

    async getUsersBySchool(schoolId: string) {
        return await this.repository.findBySchool(schoolId);
    }
}
