import { create } from "zustand";

interface AuthState {
    schoolId: string | null;
    role: string | null;
    setAuth: (schoolId: string, role: string) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    schoolId: null,
    role: null,
    setAuth: (schoolId, role) => set({ schoolId, role }),
    clearAuth: () => set({ schoolId: null, role: null }),
}));
