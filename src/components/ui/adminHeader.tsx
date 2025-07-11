import { IconSettings, IconShield, IconUser } from "@tabler/icons-react";

export const AdminHeader = () => {
	return (
		<header className="bg-admin-header text-admin-header-foreground shadow-soft">
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
							<IconShield className="h-5 w-5 text-primary-foreground" />
						</div>
						<div>
							<h1 className="text-xl font-semibold">Admin Dashboard</h1>
							<p className="text-sm text-admin-header-foreground/70">
								User Management System
							</p>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<button className="p-2 hover:bg-admin-header-foreground/10 rounded-lg transition-smooth">
							<IconUser className="h-5 w-5" />
						</button>
						<button className="p-2 hover:bg-admin-header-foreground/10 rounded-lg transition-smooth">
							<IconSettings className="h-5 w-5" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
