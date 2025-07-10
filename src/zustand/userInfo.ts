import { create } from "zustand";

interface UserState {
	phoneNumber: string;
	token: string;
	setToke: (token: string) => void;
	setPhoneNumber: (phoneNumber: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
	phoneNumber: "",
	token: "",
	setToke: (token) => set({ token }),
	setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
}));
