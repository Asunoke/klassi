import { CourseRepository } from "../repositories/course.repository";
import { CourseInput } from "../validations/course";

export class CourseService {
    private repository: CourseRepository;

    constructor() {
        this.repository = new CourseRepository();
    }

    async createCourse(data: CourseInput) {
        return await this.repository.create(data);
    }

    async getCourseById(id: string) {
        return await this.repository.findById(id);
    }

    async updateCourse(id: string, data: Partial<CourseInput>) {
        return await this.repository.update(id, data);
    }

    async deleteCourse(id: string) {
        return await this.repository.delete(id);
    }

    async getCoursesBySchool(schoolId: string) {
        return await this.repository.findBySchool(schoolId);
    }

    async getCoursesByClass(classId: string) {
        return await this.repository.findByClass(classId);
    }
}
