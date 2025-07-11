import { AdminHeader } from "@/components/ui/adminHeader";
import { UserCreationForm } from "@/components/ui/userCreationFrom";
import React from "react";

const Admin = () => {
	return (
		<div className="min-h-screen bg-blue-50">
			<AdminHeader />
			<main className="py-12 sm:px-6 ">
				<div className="sm:max-w-xl w-full p-10 mx-auto shadow-outerShadow  ">
					<UserCreationForm />
				</div>
			</main>
		</div>
	);
};

export default Admin;
