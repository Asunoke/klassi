import { StudentRepository } from "../repositories/student.repository";
import { StudentInput } from "../validations/student";

export class StudentService {
    private repository: StudentRepository;

    constructor() {
        this.repository = new StudentRepository();
    }

    async createStudent(data: StudentInput) {
        return await this.repository.create(data);
    }

    async getStudentById(id: string) {
        return await this.repository.findById(id);
    }

    async getStudentByUserId(userId: string) {
        return await this.repository.findByUserId(userId);
    }

    async updateStudent(id: string, data: Partial<StudentInput>) {
        return await this.repository.update(id, data);
    }

    async deleteStudent(id: string) {
        return await this.repository.delete(id);
    }

    async getStudentsBySchool(schoolId: string) {
        return await this.repository.findBySchool(schoolId);
    }
}
