import Image from "next/image";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = {
		$id: "1",
		email: "shivam@example.com",
		userId: "user123",
		dwollaCustomerUrl: "https://example.com/dwolla",
		dwollaCustomerId: "dwolla123",
		firstName: "Shivam",
		lastName: "Yadav",
		address1: "123 Main St",
		city: "Example City",
		state: "Example State",
		postalCode: "12345",
		dateOfBirth: "1990-01-01",
		ssn: "123-45-6789",
	};
	return (
		<main className="flex w-full h-screen font-inter">
			<Sidebar user={loggedIn} />
			<div className="flex flex-col size-full">
				<div className="root-layout">
					<Image
						src={"/icons/logo.svg"}
						alt="Icon"
						width={30}
						height={30}
					/>
					<div>
						<MobileNav user={loggedIn} />
					</div>
				</div>
				{children}
			</div>
		</main>
	);
}
