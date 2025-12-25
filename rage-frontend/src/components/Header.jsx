import React, { useState, useRef, useEffect } from 'react'
import { SlBasket, SlArrowDown, SlUser } from "react-icons/sl";
import { FaGamepad } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut, FiChevronRight } from "react-icons/fi";
import { IoMdAddCircle } from "react-icons/io";
import defaultInstance from '../api/defaultinstance';
import { clearToken } from '../store/authSlice';

import TermsOfSaleModal from './Modals/TermsOfSaleModal';

const Header = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [langOpen, setLangOpen] = useState(false);
	const [categoryOpen, setCategoryOpen] = useState(false);
	const [profileOpen, setProfileOpen] = useState(false);
	const categoryRef = useRef(null);
	const profileRef = useRef(null);
	const { i18n, t } = useTranslation();
	const langRef = useRef(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);
	const [termsOfSaleOpen, setTermsOfSaleOpen] = useState(false);

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

	const user = useSelector((state) => state.auth.user) || {
		name: 'Guest',
		status: 'Newbie',
		points: 0,
		rewards: 0,
		wallet: 0.00,
		avatar: null,
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (categoryRef.current && !categoryRef.current.contains(event.target)) {
				setCategoryOpen(false);
			}
		};
		if (categoryOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			return () => document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [categoryOpen]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (profileRef.current && !profileRef.current.contains(event.target)) {
				setProfileOpen(false);
			}
		};
		if (profileOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			return () => document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [profileOpen]);

	const handleSellClick = () => {
		const agreed = localStorage.getItem('agreedToTermsOfSale');
		if (agreed === 'true') {
			navigate('/sell');
		} else {
			setTermsOfSaleOpen(true);
		}
	};

	const handleLogout = async () => {
		try {
			await defaultInstance.post('/logout');
		} catch (error) {
			console.error("Error clearing local storage on logout:", error);
		}
		dispatch(clearToken());
		setProfileOpen(false);
		navigate('/');
	};

	return (
		<>
			<div className='w-full flex items-center justify-center bg-[#18181b] text-white py-3'>
				<p className='tracking-widest'>🌟 Help us to make Rage 🌟</p>
			</div>
			<div className="bg-black w-full flex items-center px-[10%] py-5 border-b border-gray-800 md:flex-row flex-row-reverse md:justify-between justify-between relative z-40">
				<div className="flex items-center mr-4 cursor-pointer" onClick={() => navigate('/')}>
					<div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400">
						<span className="text-black font-extrabold text-2xl">R</span>
					</div>
				</div>
				<div className="flex items-center gap-6 md:flex hidden">
					<div
						className="flex items-center cursor-pointer text-white font-medium relative"
						ref={categoryRef}
					>
						<button
							type="button"
							className="group flex items-center gap-1 cursor-pointer focus:outline-none bg-transparent hover:text-purple-400 transition"
							onClick={() => setCategoryOpen((prev) => !prev)}
						>
							<span>{t("categories")}</span>
							<SlArrowDown className="ml-1 w-3 h-3 text-white group-hover:text-purple-400 transition-colors" />
						</button>
						{categoryOpen && (
							<div className="absolute left-0 top-full mt-2 bg-[#18181b] rounded-lg border border-gray-700 z-50 min-w-[180px] shadow-lg overflow-hidden">
								{[
									{ id: null, name: t("all_games") },
									{ id: "Genshin Impact", name: "Genshin Impact" },
									{ id: "Valorant", name: "Valorant" },
									{ id: "Honkai Star Rail", name: "Honkai Star Rail" },
									{ id: "Fortnite", name: "Fortnite" }
								].map((cat) => (
									<button
										key={cat.id || 'all'}
										type="button"
										onClick={() => {
											if (cat.id) {
												navigate(`/category/${encodeURIComponent(cat.id)}`);
											} else {
												navigate('/category');
											}
											setCategoryOpen(false);
										}}
										className="block w-full text-left px-4 py-2 hover:bg-[#23232a] transition text-gray-300"
									>
										{cat.name}
									</button>
								))}
							</div>
						)}
					</div>
					<span className="flex items-center text-gray-300 opacity-70 cursor-pointer hover:opacity-100 transition">
						<FaGamepad className="mr-1 w-4 h-4" />
						{t("all_games")}
					</span>
					<span className="text-gray-300 cursor-pointer opacity-70 hover:opacity-100 transition">{t("popular")}</span>
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
							className="flex items-center cursor-pointer gap-2 px-4 py-3 bg-[#18181b] text-gray-300 rounded-lg hover:bg-[#23232a] transition text-sm whitespace-nowrap"
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
					{/* <div className="relative cursor-pointer">
						<SlBasket className="w-6 h-6 text-gray-300" />
						<span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full px-1.5">3</span>
					</div> */}
					<div
						className="cursor-pointer flex flex-row items-center justify-center gap-2 py-3 px-4 bg-[#18181b] text-gray-300 rounded-lg hover:bg-[#23232a] transition-all duration-200 shadow-md "
						onClick={handleSellClick}
					>
						<IoMdAddCircle className="text-gray-300" size={20} />
						<span className="text-white text-sm font-medium leading-none">Sell</span>
					</div>
					{!token ? (
						<>
							<button className="flex items-center cursor-pointer gap-3 px-4 py-2 bg-[#18181b] text-white rounded-lg hover:bg-[#23232a] transition"
								onClick={() => navigate('/login?tab=login')}>
								<SlUser className="w-4 h-4 text-gray-300" />
								{t("login")}
							</button>
							<button className="px-4 py-2 cursor-pointer bg-gradient-to-r  from-purple-500 to-cyan-400 text-white rounded-lg font-medium hover:opacity-90 transition"
								onClick={() => navigate('/login?tab=register')}
							>
								{t("register")}
							</button>
						</>
					) : (
						<>
							{/* Profile dropdown */}
							<div className="relative" ref={profileRef}>
								<button
									className="flex items-center cursor-pointer gap-3 p-3 bg-[#18181b] text-white rounded-lg hover:bg-[#23232a] transition"
									onClick={() => setProfileOpen((prev) => !prev)}
								>
									{user.avatar ? (
										<img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
									) : (
										<SlUser className="text-gray-300" size={20} />
									)}
								</button>
								{profileOpen && (
									<div className="absolute right-0 mt-2 w-80 bg-[#18181b] rounded-xl border border-gray-700 z-50 shadow-2xl overflow-hidden">
										<div className="p-5 border-b border-gray-700 flex items-center gap-4">
											{user.avatar ? (
												<img src={user.avatar} alt="avatar" className="w-14 h-14 rounded-full" />
											) : (
												<FaRegUserCircle className="w-12 h-12 text-gray-300" />
											)}
											<div>
												<div className="font-bold text-lg text-white">{user.name}</div>
												<div className="flex items-center gap-2 mt-1">
													<span className="bg-gradient-to-r from-yellow-400 to-pink-500 text-xs px-2 py-0.5 rounded text-black font-bold">{user.status}</span>
													<span className="text-xs text-gray-400">{user.points} point</span>
													<span className="text-xs text-gray-400 underline cursor-pointer">{user.rewards} reward</span>
												</div>
											</div>
										</div>
										<div className="p-4 border-b border-gray-700">
											<div className="flex justify-between items-center">
												<span className="text-gray-300">Wallet Balance</span>
												<span className="text-yellow-400 font-bold">${(user.wallet ?? 0).toFixed(2)}</span>
											</div>
										</div>
										<div className="py-3 px-4 flex flex-col gap-2">
											<button onClick={() => { setProfileOpen(false); navigate('/profile'); }} className="flex items-center gap-2 text-gray-200 hover:text-purple-400 py-2">
												<span className="w-5 h-5 inline-block"><SlArrowDown /></span> Dashboard
											</button>
											<button onClick={() => { setProfileOpen(false); navigate('/profile/listing'); }} className="flex items-center gap-2 text-gray-200 hover:text-purple-400 py-2">
												<span className="w-5 h-5 inline-block"><SlArrowDown /></span> My Listing
											</button>
											<button onClick={() => { setProfileOpen(false); navigate('/profile/payout'); }} className="flex items-center gap-2 text-gray-200 hover:text-purple-400 py-2">
												<span className="w-5 h-5 inline-block"><SlArrowDown /></span> Payout Options
											</button>
											<hr className="border-gray-700 my-2" />
											<button onClick={() => { setProfileOpen(false); navigate('/help-center'); }} className="flex items-center gap-2 text-gray-200 hover:text-purple-400 py-2">
												<span className="w-5 h-5 inline-block"><SlArrowDown /></span> Help Center
											</button>
											<button
												onClick={handleLogout}
												className="flex items-center justify-between w-full py-3  transition rounded-2xl"
											>
												<span className="flex items-center gap-3">
													<FiLogOut className="w-6 h-6 text-[#c084fc]" />
													<span className="font-bold text-white text-base">Logout</span>
												</span>
												<FiChevronRight className="w-5 h-5 text-white" />
											</button>
										</div>
									</div>
								)}
							</div>
						</>
					)}
				</div>
				<button
					className="md:hidden flex items-center text-white text-2xl"
					onClick={() => setMobileOpen(true)}
				>
					<HiMenu />
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="fixed inset-0 bg-[#18181b] z-40 flex flex-col px-6 py-6 overflow-y-auto">
					<div className="flex justify-between items-center mb-6">
						<span className="text-xl font-bold text-white">RageMarket</span>
						<button onClick={() => setMobileOpen(false)} className="text-white text-3xl">
							<HiX />
						</button>
					</div>
					<div className="flex items-center gap-6 mb-6">
						<IoSearch className="w-6 h-6 text-gray-400" />
						<div className="relative">
							<SlBasket className="w-6 h-6 text-gray-300" />
							<span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full px-1.5">3</span>
						</div>
					</div>
					<hr className="border-gray-700 mb-6" />
					<div className="flex flex-col gap-5 mb-8">
						<span className="text-gray-300 text-lg">Аккаунты</span>
						<span className="text-gray-300 text-lg">Игровые предметы</span>
						<span className="text-gray-300 text-lg">Валюта</span>
						<span className="text-gray-300 text-lg">Буст услуги</span>
						<span className="text-gray-300 text-lg">Ключи и коды</span>
					</div>
					<div className="relative z-50 w-full " ref={langRef}>
						<button
							onClick={() => setLangOpen(!langOpen)}
							className="flex items-center justify-start gap-2 w-full bg-[#18181b] text-gray-300 rounded-lg hover:bg-[#23232a] transition text-base"
						>
							<span>{currentLang.toUpperCase()}</span>
							<SlArrowDown className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
						</button>
						{langOpen && (
							<div className="absolute left-0 right-0 top-full mt-2 bg-[#18181b] rounded-lg border border-gray-700 z-50 shadow-lg overflow-hidden">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => changeLanguage(lang.code)}
										className={`block w-full text-left px-4 py-3 text-base hover:bg-[#23232a] transition ${currentLang === lang.code ? 'text-purple-500 bg-[#23232a]' : 'text-gray-300'}`}
									>
										{lang.name}
									</button>
								))}
							</div>
						)}
					</div>
					<div className="mt-auto flex flex-col gap-4">
						<button
							className="w-full py-3 rounded-xl bg-[#18181b] text-white border border-gray-600 text-lg font-medium"
							onClick={() => { setMobileOpen(false); navigate('/login?tab=login'); }}
						>
							{t("login")}
						</button>
						<button
							className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-white text-lg font-medium"
							onClick={() => { setMobileOpen(false); navigate('/login?tab=register'); }}
						>
							{t("register")}
						</button>
					</div>
				</div>
			)}

			{termsOfSaleOpen && (
				<TermsOfSaleModal onClose={() => setTermsOfSaleOpen(false)} />
			)}
		</>
	)
}

export default Header