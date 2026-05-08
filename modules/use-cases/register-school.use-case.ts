import { AuthService } from "@/modules/services/auth.service";
import { RegisterInput, registerSchema } from "@/modules/validations/auth";

export class RegisterSchoolUseCase {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async execute(input: RegisterInput) {
        // 1. Validate input
        const validatedData = registerSchema.parse(input);

        // 2. Business logic: Register school and admin
        return await this.authService.registerAdmin(validatedData);
    }
}
