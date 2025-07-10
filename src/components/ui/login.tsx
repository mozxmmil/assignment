"use client";
import { axiosClient } from "@/utils/axios";
import {
	IconArrowNarrowRight,
	IconLoader2,
	IconSparkles,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { UserdataTypes } from "../../../types/userData";
import Button from "../reusable/button";

const Login = () => {
	const router = useRouter();
	const [isLoading, setisLoading] = useState(false);
	const [userData, setuserData] = useState<UserdataTypes>({
		email: "",
		password: "",
		mobile_number: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { value, name } = e.target;

		setuserData((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const handlOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.stopPropagation();
		e.target.value = e.target.value.replace(/\D/g, "");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setisLoading(true);
		try {
			const { data } = await axiosClient.post(`/generateOTP`, userData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (data.status) {
				toast.success(data.data);
				setisLoading(false);
				router.push("/otp-verify");
			}
		} catch {
			toast.error("Re-Try");
			setisLoading(false);
		}
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
					<div className="flex flex-col gap-1">
						<label htmlFor="email" className="font-medium tracking-tight">
							Email
						</label>
						<input
							name="email"
							value={userData.email!}
							onChange={handleChange}
							type="email"
							placeholder="email"
							id="email"
							className="p-2  rounded-md bg-gray-100 outline-none"
						/>
					</div>
					<div className="flex flex-col gap-1 ">
						<label
							htmlFor="password"
							className="font-medium tracking-tight"
						>
							Password
						</label>
						<input
							name="password"
							value={userData.password!}
							onChange={handleChange}
							type="password"
							id="password"
							placeholder="password"
							className="p-2  rounded-md bg-gray-100 outline-none"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label
							htmlFor="mobileNumber"
							className="font-medium tracking-tight"
						>
							Mobile Number
						</label>
						<input
							name="mobile_number"
							value={userData.mobile_number!}
							onChange={handleChange}
							type="tel"
							placeholder="Enter 10-digit number"
							id="mobileNumber"
							pattern="[0-9]{10}"
							maxLength={10}
							required
							onInput={handlOnInput}
							className="p-2  rounded-md bg-gray-100 outline-none"
						/>
					</div>
					<Button className="mt-2 bg-gray-800 text-white">
						Next
						{isLoading ? (
							<IconLoader2 className="animate-spin" />
						) : (
							<IconArrowNarrowRight />
						)}
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
