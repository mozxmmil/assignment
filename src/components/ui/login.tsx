"use client";
import Image from "next/image";
import React from "react";

const Login = () => {
	const handlOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.stopPropagation();
		e.target.value = e.target.value.replace(/\D/g, "");
	};
	return (
		<div className="w-full sm:w-xl   rounded-md sm:px-20 py-10  text-black min-h-60  shadow-outerShadow ">
			<div className=" p-4 sm:p-0">
				<Image
					src={
						"https://allsoft.co/wp-content/uploads/2022/07/allsoft_vector_logo-1.svg"
					}
					height={100}
					width={100}
					alt="not found"
					className=""
				/>
				<h1 className=" text-2xl font-semibold mt-10">Login</h1>
				<h2 className="text-sm text-gray-500 mt-3 sm:w-[70%] w-full">
					sign in to access your dashboard and continue your work
				</h2>
				<form className="flex flex-col gap-5 mt-5">
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="font-bold">
							Name
						</label>
						<input
							type="text"
							placeholder="Name"
							id="name"
							className="p-2 border-1 rounded-md"
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
							className="p-2 border-1 rounded-md"
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
							pattern="^\+?[0-9 ] {10,15}$"
							maxLength={10}
							required
							onInput={handlOnInput}
							className="p-2 border-1 rounded-md"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
