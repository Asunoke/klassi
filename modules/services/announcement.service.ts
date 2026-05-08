import { AnnouncementRepository } from "../repositories/announcement.repository";
import { AnnouncementInput } from "../validations/announcement";

export class AnnouncementService {
    private repository: AnnouncementRepository;

    constructor() {
        this.repository = new AnnouncementRepository();
    }

    async createAnnouncement(data: AnnouncementInput) {
        return await this.repository.create(data);
    }

    async getAnnouncementById(id: string) {
        return await this.repository.findById(id);
    }

    async updateAnnouncement(id: string, data: Partial<AnnouncementInput>) {
        return await this.repository.update(id, data);
    }

    async deleteAnnouncement(id: string) {
        return await this.repository.delete(id);
    }

    async getAnnouncementsBySchool(schoolId: string) {
        return await this.repository.findBySchool(schoolId);
    }
}
