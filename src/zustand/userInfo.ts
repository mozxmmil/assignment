import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Role {
	id: number;
	role: string;
	role_slug: string;
	home: string;
}

interface AuthData {
	token: string;
	user_id: string;
	user_name: string;
	roles: Role[];
}

interface UserState {
	data: AuthData | null;
	phoneNumber: string;
	token: string;
	setData: (data: AuthData) => void;
	setToke: (token: string) => void;
	setPhoneNumber: (phoneNumber: string) => void;
}

export const useUserStore = create<UserState>()(
	persist(
		(set) => ({
			data: null,
			phoneNumber: "",
			token: "",
			setData: (data) => set({ data }),
			setToke: (token) => set({ token }),
			setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
		}),
		{
			name: "userData",
		}
	)
);
