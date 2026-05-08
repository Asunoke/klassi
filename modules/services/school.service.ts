import { SchoolRepository } from "../repositories/school-repository";
import { SchoolInput } from "../validations/school";

export class SchoolService {
    private repository: SchoolRepository;

    constructor() {
        this.repository = new SchoolRepository();
    }

    async createSchool(data: SchoolInput) {
        // Business logic: check if domain is unique if provided
        if (data.domain) {
            const existing = await this.repository.findByDomain(data.domain);
            if (existing) {
                throw new Error("Domain already in use");
            }
        }
        return await this.repository.create(data);
    }

    async getSchool(id: string) {
        return await this.repository.findById(id);
    }

    async updateSchool(id: string, data: Partial<SchoolInput>) {
        return await this.repository.update(id, data);
    }

    async deleteSchool(id: string) {
        return await this.repository.delete(id);
    }

    async getAllSchools() {
        return await this.repository.findAll();
    }
}
