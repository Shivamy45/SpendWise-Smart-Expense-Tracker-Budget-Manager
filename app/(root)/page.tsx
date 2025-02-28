import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
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
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
						subtext="Access and Manage your accounts efficiently."
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={940.58}
					/>
				</header>
				recent transactions
			</div>
			<RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 500}, {currentBalance: 1028}]} />
		</section>
	);
};

export default Home;
