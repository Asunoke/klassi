import { ClassRepository } from "../repositories/class.repository";
import { ClassInput } from "../validations/class";

export class ClassService {
    private repository: ClassRepository;

    constructor() {
        this.repository = new ClassRepository();
    }

    async createClass(data: ClassInput) {
        return await this.repository.create(data);
    }

    async getClassById(id: string) {
        return await this.repository.findById(id);
    }

    async updateClass(id: string, data: Partial<ClassInput>) {
        return await this.repository.update(id, data);
    }

    async deleteClass(id: string) {
        return await this.repository.delete(id);
    }

    async getClassesBySchool(schoolId: string) {
        return await this.repository.findBySchool(schoolId);
    }
}
