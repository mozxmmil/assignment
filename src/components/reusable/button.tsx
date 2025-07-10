import { cn } from "@/utils/cn";
import React, { HTMLAttributes } from "react";
import { motion } from "motion/react";
type Props = HTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children }: Props) => {
	return (
		<motion.button
			className={cn(
				" rounded-md w-full border relative group overflow-hidden text-xl font-bold hover:cursor-pointer ",
				className
			)}
		>
			<div className=" h-full w-full group-hover:-translate-y-full duration-300 px-3 py-2 flex justify-center items-center  gap-4  ease-in-out ">
				{children}
			</div>
			<div className=" flex justify-center items-center absolute group-hover:-translate-y-full left-0 w-full h-full duration-300 gap-4 ease-in-out">
				{children}
			</div>
		</motion.button>
	);
};

export default Button;
