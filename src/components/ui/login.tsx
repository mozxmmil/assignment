"use client";
import { IconArrowNarrowRight, IconSparkles } from "@tabler/icons-react";
import React from "react";
import Button from "../reusable/button";
import { useRouter } from "next/navigation";

const Login = () => {
	const router = useRouter();
	const handlOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.stopPropagation();
		e.target.value = e.target.value.replace(/\D/g, "");
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		router.push("/");
	};
	return (
		<div className="w-full sm:w-xl  bg-white rounded-2xl sm:px-20 py-10  text-black min-h-60  shadow-outerShadow ">
			<div className=" p-4 sm:p-0">
				<div className="flex items-center gap-2 mx-auto justify-center">
					<IconSparkles className="text-blue-400 size-10" />
					<h1 className="bg-gradient-to-r from-blue-400 to to-teal-500 bg-clip-text font-bold text-transparent text-2xl ">
						AllSoft
					</h1>
				</div>
				<h1 className=" text-2xl font-semibold mt-7 text-center text-gray-800">
					Welcome back
				</h1>
				<h2 className="text-sm text-gray-500 mt-3 text-center w-full">
					sign in to access your dashboard and continue your work
				</h2>
				<form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="font-bold">
							Name
						</label>
						<input
							type="text"
							placeholder="Name"
							id="name"
							className="p-2 border-1 rounded-md bg-gray-100"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="password" className="font-bold">
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="password"
							className="p-2 border-1 rounded-md bg-gray-100"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="mobileNumber" className="font-bold">
							Mobile Number
						</label>
						<input
							type="tel"
							placeholder="Enter 10-digit number"
							id="mobileNumber"
							pattern="[0-9]{10}"
							maxLength={10}
							required
							onInput={handlOnInput}
							className="p-2 border-1 rounded-md bg-gray-100"
						/>
					</div>
					<Button className="mt-2 bg-gray-800 text-white">
						Next
						<IconArrowNarrowRight />{" "}
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
