"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
	const pathname = usePathname();
	return (
		<section className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link
					href={"/"}
					className="mb-12 flex items-center gap-2 cursor-pointer">
					<Image
						src={"/icons/logo.svg"}
						width={34}
						height={34}
						alt="SpendWise"
						className="size-[28px] max-xl:size-14"
					/>
					<h1 className="sidebar-logo">SpendWise</h1>
				</Link>
				{sidebarLinks.map((links) => {
					const isActive =
						pathname === links.route ||
						pathname.startsWith(`${links.route}/`);
					return (
						<Link
							href={links.route}
							key={links.label}
							className={cn("sidebar-link", {
								"bg-bank-gradient": isActive,
							})}>
							<div className="relative size-6">
								<Image
									src={links.imgURL}
									alt={links.label}
									fill
									className={cn({
										"brightness-[3] invert-0": isActive,
									})}
								/>
							</div>
							<p
								className={cn("sidebar-label", {
									"!text-white": isActive,
								})}>
								{links.label}
							</p>
						</Link>
					);
				})}
				USER
			</nav>
			FOOTER
		</section>
	);
};

export default Sidebar;
