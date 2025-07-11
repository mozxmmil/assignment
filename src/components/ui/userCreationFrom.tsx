'use client'
import React, { useState } from "react";

import { User, Lock, UserPlus, Shield } from "lucide-react";
import Button from "../reusable/button";
import { toast } from "sonner";

interface UserFormData {
	username: string;
	password: string;
}

export const UserCreationForm = () => {
	const [formData, setFormData] = useState<UserFormData>({
		username: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange =
		(field: keyof UserFormData) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setFormData((prev) => ({
				...prev,
				[field]: e.target.value,
			}));
		};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.username.trim() || !formData.password.trim()) {
			toast("Validation Error");
			return;
		}

		setIsLoading(true);

		// Simulate API call
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			toast("User Created Successfully");

			// Reset form
			setFormData({ username: "", password: "" });
		} catch {
			toast("Error");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="max-w-2xl mx-auto">
			<div className="shadow-elegant border-0 bg-card">
				<div className="text-center pb-8">
					<div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
						<Shield className="h-8 w-8 text-primary-foreground" />
					</div>
					<h1 className="text-2xl font-semibold text-foreground">
						Create New User
					</h1>
					<h2 className="text-muted-foreground">
						Add a new user to the system with username and password
						credentials
					</h2>
				</div>

				<div className="space-y-6">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<label
								htmlFor="username"
								className="text-sm font-medium text-foreground"
							>
								Username *
							</label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<input
									id="username"
									type="text"
									placeholder="Enter username"
									value={formData.username}
									onChange={handleInputChange("username")}
									className="pl-10 h-12 bg-input border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth w-full"
									required
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="password"
								className="text-sm font-medium text-foreground"
							>
								Password *
							</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<input
									id="password"
									type="password"
									placeholder="Enter password"
									value={formData.password}
									onChange={handleInputChange("password")}
									className="pl-10 h-12 bg-input border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth w-full"
									required
								/>
							</div>
						</div>

						<div className="pt-4">
							<Button className="w-full h-12 bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium shadow-soft transition-smooth">
								{isLoading ? (
									<div className="flex items-center gap-2">
										<div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
										Creating User...
									</div>
								) : (
									<div className="flex items-center gap-2">
										<UserPlus className="h-4 w-4" />
										Create User
									</div>
								)}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
