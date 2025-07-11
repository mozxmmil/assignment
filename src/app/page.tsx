"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MainPage = () => {
	const router = useRouter();
	useEffect(() => {
		router.push("/login");
	}, [router]);

	router.push("/login");
	return <div></div>;
};

export default MainPage;
