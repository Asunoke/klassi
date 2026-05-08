import { auth } from "@/modules/auth/auth";
import { UserRepository } from "@/modules/repositories/user.repository";
import { SchoolRepository } from "@/modules/repositories/school.repository";
import { RegisterInput } from "@/modules/validations/auth";
import { UserRole } from "@prisma/client";

export class AuthService {
    private userRepository: UserRepository;
    private schoolRepository: SchoolRepository;

    constructor() {
        this.userRepository = new UserRepository();
        this.schoolRepository = new SchoolRepository();
    }

    async registerAdmin(data: RegisterInput) {
        // 1. Create School
        const school = await this.schoolRepository.create({
            name: data.schoolName,
        });

        // 2. Create User via Better Auth
        // Note: Better Auth handles the actual user creation in the database
        // but we might need to link it to the school.
        // We can use Better Auth's signUp method.
        
        // This is a placeholder as the actual signUp is usually called from the client
        // but for server-side logic, we might use auth.api.signUpEmail
        
        return { school };
    }

    async getUserWithSession(headers: Headers) {
        return await auth.api.getSession({
            headers,
        });
    }
}
