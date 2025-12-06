import React, { useState, useRef, useEffect } from 'react'
import { SlBasket, SlArrowDown, SlUser } from "react-icons/sl";
import { FaGamepad } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";


const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [langOpen, setLangOpen] = useState(false);
	const { i18n, t } = useTranslation();
	const langRef = useRef(null);

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'ru', name: 'Русский' },
		{ code: 'es', name: 'Español' }
	];

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		setLangOpen(false);
		setMobileOpen(false);
	};

	const currentLang = i18n.language || 'en';

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (langRef.current && !langRef.current.contains(event.target)) {
				setLangOpen(false);
			}
		};

		if (langOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			return () => document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [langOpen]);

	return (
		<>
			<div className="bg-black w-full flex items-center px-[10%] py-5 border-b border-gray-800 md:flex-row flex-row-reverse md:justify-between justify-between relative z-40">
				<div className="flex items-center gap-6 md:flex hidden">
					<div className="flex items-center cursor-pointer text-white font-medium">
						{t("categories")}
						<SlArrowDown className="ml-1 w-4 h-4 text-white" />
					</div>
					<span className="flex items-center text-gray-300 cursor-pointer">
						<FaGamepad className="mr-1 w-4 h-4" />
						{t("all_games")}
					</span>
					<span className="text-gray-300 cursor-pointer">{t("popular")}</span>
				</div>
				<div className="flex-1 flex justify-center md:flex hidden">
					<div className="relative w-[400px]">
						<input
							type="text"
							placeholder={t("search_placeholder")}
							className="w-full rounded-lg bg-[#18181b] text-gray-200 px-4 py-2 pl-10 focus:outline-none"
						/>
						<IoSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
					</div>
				</div>
				<div className="flex items-center gap-4 md:flex hidden">
					<div className="relative z-50" ref={langRef}>
						<button
							onClick={() => setLangOpen(!langOpen)}
							className="flex items-center gap-2 px-3 py-2 bg-[#18181b] text-gray-300 rounded-lg hover:bg-[#23232a] transition text-sm whitespace-nowrap"
						>
							{currentLang.toUpperCase()}
							<SlArrowDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
						</button>
						{langOpen && (
							<div className="absolute top-full right-0 mt-2 bg-[#18181b] rounded-lg border border-gray-700 z-50 min-w-[150px] shadow-lg overflow-hidden">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => changeLanguage(lang.code)}
										className={`block w-full text-left px-4 py-2 hover:bg-[#23232a] transition ${currentLang === lang.code ? 'text-purple-500 bg-[#23232a]' : 'text-gray-300'
											}`}
									>
										{lang.name}
									</button>
								))}
							</div>
						)}
					</div>
					<div className="relative">
						<SlBasket className="w-6 h-6 text-gray-300" />
						<span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full px-1.5">3</span>
					</div>
					<button className="flex items-center gap-3 px-4 py-2 bg-[#18181b] text-white rounded-lg hover:bg-[#23232a] transition">
						<SlUser className="w-4 h-4 text-gray-300" />
						{t("login")}
					</button>
					<button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-lg font-medium hover:opacity-90 transition">
						{t("register")}
					</button>
				</div>
				<button
					className="md:hidden flex items-center text-white text-2xl"
					onClick={() => setMobileOpen(true)}
				>
					<HiMenu />
				</button>
			</div>
			{mobileOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col px-6 py-6 overflow-y-auto">
					<div className="flex justify-between items-center mb-8">
						<span className="text-xl font-bold text-white">RageMarket</span>
						<button onClick={() => setMobileOpen(false)} className="text-white text-3xl">
							<HiX />
						</button>
					</div>
					<div className="flex flex-col gap-6 mb-8">
						<div className="flex items-center cursor-pointer text-white font-medium text-lg">
							{t("categories")}
							<SlArrowDown className="ml-1 w-4 h-4 text-white" />
						</div>
						<span className="flex items-center text-gray-300 cursor-pointer text-lg">
							<FaGamepad className="mr-1 w-4 h-4" />
							{t("all_games")}
						</span>
						<span className="text-gray-300 cursor-pointer text-lg">{t("popular")}</span>
					</div>
					<div className="relative w-full mb-8">
						<input
							type="text"
							placeholder={t("search_placeholder")}
							className="w-full rounded-lg bg-[#18181b] text-gray-200 px-4 py-2 pl-10 focus:outline-none"
						/>
						<IoSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
					</div>
					<div className="flex items-center gap-4 mb-8">
						<div className="relative z-50" ref={langRef}>
							<button
								onClick={() => setLangOpen(!langOpen)}
								className="flex items-center gap-2 px-3 py-2 bg-[#18181b] text-gray-300 rounded-lg hover:bg-[#23232a] transition whitespace-nowrap"
							>
								{currentLang.toUpperCase()}
								<SlArrowDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
							</button>
							{langOpen && (
								<div className="absolute top-full left-0 mt-2 bg-[#18181b] rounded-lg border border-gray-700 z-50 min-w-[150px] shadow-lg overflow-hidden">
									{languages.map((lang) => (
										<button
											key={lang.code}
											onClick={() => changeLanguage(lang.code)}
											className={`block w-full text-left px-4 py-2 hover:bg-[#23232a] transition ${currentLang === lang.code ? 'text-purple-500 bg-[#23232a]' : 'text-gray-300'
												}`}
										>
											{lang.name}
										</button>
									))}
								</div>
							)}
						</div>
						<div className="relative">
							<SlBasket className="w-6 h-6 text-gray-300" />
							<span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full px-1.5">3</span>
						</div>
						<button className="flex items-center gap-3 px-4 py-2 bg-[#18181b] text-white rounded-lg hover:bg-[#23232a] transition">
							<SlUser className="w-4 h-4 text-gray-300" />
							{t("login")}
						</button>
						<button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-lg font-medium hover:opacity-90 transition">
							{t("register")}
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Header