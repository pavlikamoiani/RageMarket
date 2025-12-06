import React from 'react'
import { FiZap } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Banner = () => {
	const { t } = useTranslation();

	return (
		<div className="min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] relative">
			<div className="absolute inset-0 pointer-events-none">
				<div className="w-[700px] h-[700px] bg-gradient-to-br from-purple-800 via-cyan-700 to-transparent opacity-30 rounded-full blur-3xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
			</div>
			<div className="relative z-10 mt-12 mb-6">
				<div className="flex items-center px-6 py-2 border border-purple-500 rounded-full bg-black/40 backdrop-blur-sm text-cyan-300 font-medium text-base gap-2">
					<FiZap className="text-cyan-400" />
					<span>{t("more_than_100000_items")}</span>
				</div>
			</div>
			<h1 className="relative z-10 text-white font-extrabold text-5xl md:text-6xl text-center leading-tight mb-4">
				{t("gaming_marketplace_for_gamers")}
			</h1>
			<div className="relative z-10 text-gray-400 text-lg text-center mb-8">
				{t("buy_and_sell_gaming_accounts_currency_items_and_services")}<br />
				{t("secure_transactions_instant_delivery_24_7_support")}
			</div>
			<div className="relative z-10 flex flex-col items-center w-full mb-8">
				<div className="flex items-center bg-[#18181b] rounded-xl px-4 py-3 w-[420px] max-w-full shadow-lg">
					<svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
						<circle cx="11" cy="11" r="8" />
						<line x1="21" y1="21" x2="16.65" y2="16.65" />
					</svg>
					<input
						type="text"
						placeholder={t("search_placeholder")}
						className="bg-transparent flex-1 text-white placeholder-gray-400 outline-none"
					/>
					<button className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium hover:opacity-90 transition">
						{t("find")}
					</button>
				</div>
				{/* Action buttons */}
				<div className="flex gap-4 mt-8">
					<button className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition">
						{t("game_catalog")}
					</button>
					<button className="px-8 py-3 rounded-lg bg-[#18181b] text-white font-semibold text-lg border border-[#23232a] shadow-lg hover:bg-[#23232a] transition">
						{t("start_selling")}
					</button>
				</div>
			</div>
			<div className="relative z-10 flex justify-center gap-12 mt-8 mb-4">
				<div className="flex items-center gap-2 text-gray-300 text-base">
					<FiShield className="text-purple-400" />
					<span>{t("buyer_protection")}</span>
				</div>
				<div className="flex items-center gap-2 text-gray-300 text-base">
					<FiZap className="text-cyan-400" />
					<span>{t("instant_delivery")}</span>
				</div>
				<div className="flex items-center gap-2 text-gray-300 text-base">
					<FiStar className="text-yellow-400" />
					<span>{t("rating_4_9")}</span>
				</div>
			</div>
		</div>
	)
}

export default Banner