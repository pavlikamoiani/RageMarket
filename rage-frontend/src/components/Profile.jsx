import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
	const navItemClass = "py-3 px-4 text-sm font-semibold cursor-pointer transition duration-200";
	const activeNavItemClass = "border-b-2 border-[#a259ff] text-white";
	const inactiveNavItemClass = "text-gray-400 hover:text-white";

	const overviewCardClass = "bg-[#1f163b] rounded-lg p-4 flex flex-col items-start min-h-[100px] shadow-xl";
	const overviewTitleClass = "text-sm text-gray-300 mb-2 font-medium";
	const overviewValueClass = "text-2xl text-white font-bold";
	const user = useSelector((state) => state.auth.user);

	return (
		<div className="min-h-screen bg-[#18181b]  relative pb-20">
			<div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-tr from-[#1a1333] via-[#3b256b] to-[#e04fff] z-0 opacity-80" />
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
				<div className="flex justify-end pt-6 pb-2">
					<button className="flex items-center gap-2 bg-transparent border border-[#a259ff] text-[#a259ff] font-semibold px-4 py-2 rounded-lg mr-3 hover:bg-[#a259ff] hover:text-white transition text-sm">
						<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-2.828 1.172H7v-2a4 4 0 011.172-2.828z"></path></svg>
						Replace Image
					</button>
					<button className="flex items-center gap-2 bg-[#a259ff] hover:bg-[#c084fc] text-white font-semibold px-4 py-2 rounded-lg transition text-sm">
						<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z"></path></svg>
						Edit Profile
					</button>
				</div>

				{/* Profile Card */}
				<div className="bg-[#1f163b] rounded-xl shadow-2xl p-6 md:p-8">
					<div className="flex flex-col md:flex-row items-start justify-between">
						<div className="flex items-start flex-1">
							<div className="relative w-20 h-20 rounded-full border-4 border-[#a259ff] flex-shrink-0 overflow-hidden bg-gray-700">
								<svg className="w-10 h-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
							</div>

							<div className="ml-5">
								<div className="flex items-center gap-2 mb-1">
									<span className="text-white text-xl font-bold">{user.name
										? user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()
										: ''}
									</span>
									<span className="text-yellow-400 text-base font-bold">0.0</span>
									<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
								</div>

								<div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-gray-400 text-sm mt-2">
									<span>
										Total Products: <span className="font-semibold text-white">0</span>
									</span>
									<span>
										Sold Products: <span className="font-semibold text-white">0</span>
									</span>
									<span className="flex items-center gap-1 bg-transparent text-sm">
										Wallet Balance: <span className="font-semibold text-yellow-400">$0.00</span>
									</span>
								</div>
							</div>
						</div>

						<div className="mt-4 md:mt-0 flex-shrink-0">
							<button className="flex items-center gap-2 bg-transparent border border-gray-500 hover:border-white text-white font-semibold px-4 py-2 rounded-lg transition text-sm">
								<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10l4.553 2.276A2 2 0 0121 14.118V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.882a2 2 0 01.447-1.842L8 10"></path><path d="M10 14l2-2-2-2"></path></svg>
								Preview
							</button>
						</div>
					</div>

					<div className="mt-6 border-b border-[#3b256b] flex overflow-x-auto">
						<div className={`${navItemClass} ${activeNavItemClass}`}>
							Dashboard
						</div>
						<div className={`${navItemClass} ${inactiveNavItemClass}`}>
							My Listing
						</div>
						<div className={`${navItemClass} ${inactiveNavItemClass}`}>
							Payout Options
						</div>
						<div className={`${navItemClass} ${inactiveNavItemClass}`}>
							My Purchases
						</div>
						<div className={`${navItemClass} ${inactiveNavItemClass}`}>
							My Favourites
						</div>
						<div className={`${navItemClass} ${inactiveNavItemClass}`}>
							My Reviews
						</div>
					</div>
				</div>

				<div className="mt-8">
					<div className="bg-[#1f163b] border border-yellow-500/50 rounded-lg p-5 flex items-start gap-4 shadow-xl">
						<span className="bg-[#3b256b] rounded-full p-2 flex-shrink-0 mt-0.5">
							<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 9V8h2v3h-2zm0 4v-2h2v2h-2z"></path></svg>
						</span>
						<div className="text-yellow-200 text-sm">
							<span className="font-bold text-yellow-400 block mb-1">Withdrawal Process</span>
							<div className="text-gray-300">
								Please submit your withdrawal requests by **12PM noon (GMT+8) every Monday and Thursday**. Any submissions after 12PM noon (GMT+8) will only get processed in the next cycle.
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10">
					<div className="text-white text-xl font-bold mb-5">Overview</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						<div className={overviewCardClass}>
							<span className={overviewTitleClass}>On Going</span>
							<span className={overviewValueClass}>$0.00</span>
						</div>

						<div className={overviewCardClass}>
							<div className="flex items-center gap-2 mb-2">
								<span className={overviewTitleClass.replace('mb-2', 'mb-0')}>On Hold</span>
								<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16h.01"></path><path d="M12 8v4"></path></svg>
							</div>
							<span className={overviewValueClass}>$0.00</span>
						</div>

						<div className={overviewCardClass}>
							<span className={overviewTitleClass}>Balance</span>
							<span className="text-2xl text-yellow-400 font-bold">$0.00</span>
						</div>

						<div className={overviewCardClass}>
							<span className={overviewTitleClass}>Withdrawn</span>
							<span className={overviewValueClass}>$0.00</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;