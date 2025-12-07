import React from 'react'
import { MdShield, MdCreditCard, MdHeadsetMic } from "react-icons/md"
import { FaTwitter, FaInstagram, FaYoutube, FaTelegram, FaCcVisa, FaCcMastercard, FaBitcoin } from "react-icons/fa"
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className="w-full bg-[#18181b] border-t border-[#23232a]">
			<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-32 py-8 border-b border-[#23232a]">
				<div className="flex flex-col items-center gap-2 mb-6 md:mb-0">
					<div className="bg-violet-700 rounded-xl p-3">
						<MdShield className="text-white text-2xl" />
					</div>
					<div className="text-white font-semibold text-base md:text-lg">{t('Safe_transactions')}</div>
					<div className="text-zinc-400 text-xs md:text-sm">{t('100%_buyer_protection')}</div>
				</div>
				<div className="flex flex-col items-center gap-2 mb-6 md:mb-0">
					<div className="bg-cyan-900 rounded-xl p-3">
						<MdCreditCard className="text-cyan-300 text-2xl" />
					</div>
					<div className="text-white font-semibold text-base md:text-lg">{t('convenient_payment')}</div>
					<div className="text-zinc-400 text-xs md:text-sm">{t('cards_crypto_sbp')}</div>
				</div>
				<div className="flex flex-col items-center gap-2">
					<div className="bg-violet-700 rounded-xl p-3">
						<MdHeadsetMic className="text-white text-2xl" />
					</div>
					<div className="text-white font-semibold text-base md:text-lg">{t('support_24_7')}</div>
					<div className="text-zinc-400 text-xs md:text-sm">{t('always_connected')}</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-between px-4 md:px-[7%] py-8 md:py-12 gap-8 md:gap-12">
				<div className="flex flex-col max-w-md mb-8 md:mb-0">
					<div className="flex items-center gap-2 mb-2">
						<div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400">
							<span className="text-black font-extrabold text-2xl">R</span>
						</div>
						<span className="text-white font-bold text-xl md:text-2xl">RAGE<span className="text-cyan-400">MARKET</span></span>
					</div>
					<div className="text-zinc-400 text-sm md:text-base mb-4">
						{t('gaming_marketplace_for_gamers')}<br />
						{t('buy_and_sell_gaming_accounts_currency_items_and_services')}
					</div>
					<div className="font-semibold text-white mb-2">{t('subscribe_to_news')}</div>
					<div className="flex items-center mb-6">
						<input
							type="email"
							placeholder="Ваш email"
							className="bg-[#23232a] text-white px-3 py-2 rounded-l-lg outline-none text-sm"
						/>
						<button className="bg-violet-600 px-3 py-2 rounded-r-lg text-white flex items-center">
							<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>
					<div className="flex gap-3">
						<a href="#" className="bg-[#23232a] rounded-lg p-2 text-zinc-400 hover:text-white"><FaTwitter size={18} /></a>
						<a href="#" className="bg-[#23232a] rounded-lg p-2 text-zinc-400 hover:text-white"><FaInstagram size={18} /></a>
						<a href="#" className="bg-[#23232a] rounded-lg p-2 text-zinc-400 hover:text-white"><FaYoutube size={18} /></a>
						<a href="#" className="bg-[#23232a] rounded-lg p-2 text-zinc-400 hover:text-white"><FaTelegram size={18} /></a>
					</div>
				</div>
				<div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-0 justify-between">
					<div className="mb-6 md:mb-0">
						<div className="text-white font-semibold mb-3">{t('marketplace')}</div>
						<ul className="text-zinc-400 space-y-2 text-sm md:text-base">
							<li><a href="#" className="hover:text-white">{t('all_categories')}</a></li>
							<li><a href="#" className="hover:text-white">{t('popular_games')}</a></li>
							<li><a href="#" className="hover:text-white">{t('new_arrivals')}</a></li>
							<li><a href="#" className="hover:text-white">{t('discount')}</a></li>
						</ul>
					</div>
					<div className="mb-6 md:mb-0">
						<div className="text-white font-semibold mb-3">{t('support')}</div>
						<ul className="text-zinc-400 space-y-2 text-sm md:text-base">
							<li><a href="#" className="hover:text-white">FAQ</a></li>
							<li><a href="#" className="hover:text-white">{t('how_to_buy')}</a></li>
							<li><a href="#" className="hover:text-white">{t('how_to_sell')}</a></li>
							<li><a href="#" className="hover:text-white">{t('customer_support')}</a></li>
						</ul>
					</div>
					<div>
						<div className="text-white font-semibold mb-3">{t('legal_information')}</div>
						<ul className="text-zinc-400 space-y-2 text-sm md:text-base">
							<li><a href="#" className="hover:text-white">{t('privacy_policy')}</a></li>
							<li><a href="#" className="hover:text-white">{t('terms_of_use')}</a></li>
							<li><a href="#" className="hover:text-white">{t('refund_policy')}</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-[7%] py-4 border-t border-[#23232a] text-zinc-500 text-xs md:text-sm gap-3">
				<div>
					© 2025 RageMarket. {t('all_rights_reserved')}
				</div>
				<div className="flex gap-4 md:gap-6 items-center">
					<FaCcVisa size={24} />
					<FaCcMastercard size={24} />
					<FaBitcoin size={24} />
				</div>
			</div>
		</footer>
	)
}

export default Footer