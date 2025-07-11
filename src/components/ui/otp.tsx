"use client";
import { IconLoader2, IconLock, IconShieldFilled } from "@tabler/icons-react";
import React, { ChangeEvent, useRef, useState } from "react";
import Button from "../reusable/button";
import { useUserStore } from "@/zustand/userInfo";
import { axiosClient } from "@/utils/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const length = 6;
const OptComp = () => {
	const router = useRouter();
	const { setData, phoneNumber } = useUserStore((state) => state);

	const inputRef = useRef<Array<HTMLInputElement | null>>([]);
	const [otp, setOtp] = useState(Array(length).fill(""));
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>, inx: number) => {
		e.stopPropagation();
		const value = e.target.value.replace(/\D/g, "");

		const otpValue = [...otp];
		otpValue[inx] = value;
		setOtp(otpValue);

		if (inx < length - 1) {
			inputRef.current[inx + 1]?.focus();
		}
	};
	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		inx: number
	) => {
		e.stopPropagation();

		if (e.key === "Backspace") {
			if (otp[inx] === "" && inx > 0) {
				inputRef.current[inx - 1]?.focus();
			} else {
				const otpValue = [...otp];
				otpValue[inx] = "";
				setOtp(otpValue);
			}
		}
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		const dataobj = {
			mobile_number: phoneNumber,
			otp: otp.join(""),
		};
		try {
			const { data } = await axiosClient.post("/validateOTP", dataobj);

			if (data.status) {
				setIsLoading(false);
				setData(data.data);
				setOtp((prev) => prev.fill(""));
				router.push("/");
			}
			setIsLoading(false);
			toast.error(data.message);
		} catch {
			setIsLoading(false);
			toast.error("Re-Try");
		}
	};
	const handleSpanClicked = async (e: React.MouseEvent<HTMLSpanElement>) => {
		e.stopPropagation();
		setIsLoading(true);
		try {
			const { data } = await axiosClient.post(
				`/generateOTP`,
				{ mobile_number: phoneNumber },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (data.status) {
				toast.success(data.data);
				setIsLoading(false);
			}
		} catch {
			setIsLoading(false);
			toast.error("Re-Try");
		}
	};
	return (
		<div className="w-full sm:w-100 rounded-lg shadow-outerShadow  p-5 bg ">
			<div className="flex items-center sm:gap-2 gap-1 justify-center">
				<h1 className="font-bold ">One-Time Password</h1>
				<IconLock />
			</div>
			<h1 className="text-gray-500 text-center text-sm my-6">
				+91 {phoneNumber} <span className="text-black">Wrong Number?</span>
			</h1>
			<form
				onSubmit={handleSubmit}
				className="flex gap-3 mt-5 flex-col items-center justify-center w-full "
			>
				<div className="flex gap-3 items-center flex-wrap">
					{otp.map((value, inx) => (
						<input
							onChange={(e) => handleChange(e, inx)}
							onKeyDown={(e) => handleKeyDown(e, inx)}
							key={inx}
							type="tel"
							className="sm:size-12 size-8 border flex  text-center rounded-md "
							maxLength={1}
							ref={(el) => {
								inputRef.current[inx] = el;
							}}
							inputMode="numeric"
							value={value}
						/>
					))}
				</div>
				<h1 className="text-sm text-center mt-4 text-neutral-600 w-full">
					Didn&apos;t Recived code?{" "}
					<span
						className="text-black font-bold hover:cursor-pointer "
						onClick={handleSpanClicked}
					>
						Resend
					</span>
				</h1>
				<Button className="bg-zinc-900 text-white sm:w-1/2 md:w-1/2 w-full mt-7">
					Submit{" "}
					{isLoading ? (
						<IconLoader2 className="animate-spin" />
					) : (
						<IconShieldFilled />
					)}
				</Button>
			</form>
		</div>
	);
};

export default OptComp;
