import { TeacherRepository } from "../repositories/teacher.repository";
import { TeacherInput } from "../validations/teacher";

export class TeacherService {
    private repository: TeacherRepository;

    constructor() {
        this.repository = new TeacherRepository();
    }

    async createTeacher(data: TeacherInput) {
        return await this.repository.create(data);
    }

    async getTeacherById(id: string) {
        return await this.repository.findById(id);
    }

    async getTeacherByUserId(userId: string) {
        return await this.repository.findByUserId(userId);
    }

    async updateTeacher(id: string, data: Partial<TeacherInput>) {
        return await this.repository.update(id, data);
    }

    async deleteTeacher(id: string) {
        return await this.repository.delete(id);
    }

    async getTeachersBySchool(schoolId: string) {
        return await this.repository.findBySchool(schoolId);
    }
}
