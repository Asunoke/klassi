import { GradeRepository } from "../repositories/grade.repository";
import { GradeInput } from "../validations/grade";

export class GradeService {
    private repository: GradeRepository;

    constructor() {
        this.repository = new GradeRepository();
    }

    async createGrade(data: GradeInput) {
        return await this.repository.create(data);
    }

    async getGradeById(id: string) {
        return await this.repository.findById(id);
    }

    async updateGrade(id: string, data: Partial<GradeInput>) {
        return await this.repository.update(id, data);
    }

    async deleteGrade(id: string) {
        return await this.repository.delete(id);
    }

    async getGradesByStudent(studentId: string) {
        return await this.repository.findByStudent(studentId);
    }

    async getGradesByCourse(courseId: string) {
        return await this.repository.findByCourse(courseId);
    }
}
