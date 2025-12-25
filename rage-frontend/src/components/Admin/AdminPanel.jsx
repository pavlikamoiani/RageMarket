import React, { useState } from 'react';
import { HiMenuAlt3, HiOutlineViewGrid } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import UserPage from './UserPage.jsx';
import CategoriesPage from './CategoriesPage.jsx';

const AdminPanel = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [activeTab, setActiveTab] = useState('categories');
	const navigate = useNavigate();

	const menuItems = [
		{ id: 'categories', name: 'Categories', icon: <HiOutlineViewGrid size={24} /> },
		{ id: 'users', name: 'Users', icon: <FiUsers size={24} /> },
	];

	return (
		<div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">

			<div className={`${isOpen ? 'w-64' : 'w-20'} duration-300 bg-slate-900 p-5 pt-8 relative flex flex-col shadow-xl transition-all`}>
				<div
					className="absolute -right-3 top-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full cursor-pointer hover:scale-110 transition-transform z-50"
					onClick={() => setIsOpen(!isOpen)}
				>
					<HiMenuAlt3 size={20} className={`${!isOpen && 'rotate-180'} m-1`} />
				</div>

				<div className="flex gap-x-4 items-center mb-10 px-2">
					<div className="bg-blue-500 p-2 rounded-lg text-white">
						<IoSettingsOutline size={28} className={`duration-500 ${isOpen && "rotate-[360deg]"}`} />
					</div>
					<h1 className={`text-white origin-left font-bold text-xl duration-200 ${!isOpen && "scale-0"}`}>
						RAGE<span className="text-blue-400">ADMIN</span>
					</h1>
				</div>

				<ul className="flex-1">
					{menuItems.map((item) => (
						<li
							key={item.id}
							onClick={() => setActiveTab(item.id)}
							className={`flex rounded-md p-3 cursor-pointer text-gray-300 items-center gap-x-4 mt-2 transition-all
                ${activeTab === item.id ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "hover:bg-slate-800"}`}
						>
							{item.icon}
							<span className={`${!isOpen && "hidden"} origin-left duration-200 font-medium`}>
								{item.name}
							</span>
						</li>
					))}
				</ul>

				<div className="mt-auto border-t border-slate-700 pt-4">
					<div className={`flex ${!isOpen && "justify-center"}`}>
						<button onClick={() => navigate('/')} className='flex items-center gap-x-4 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer w-full'>
							<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
								<IoMdArrowRoundBack size={20} />
							</div>
							{isOpen && <span className="text-sm font-medium">Back to Main</span>}
						</button>
					</div>
				</div>
			</div>

			<div className="flex-1 flex flex-col h-screen overflow-hidden">
				<header className="h-16 min-h-[64px] bg-white border-b border-gray-200 flex items-center justify-between px-8">
					<h3 className="font-semibold text-gray-500 tracking-wider text-sm">
						{activeTab === 'categories' ? 'Dashboard / Categories' : 'Dashboard / Users'}
					</h3>
					<div className="flex items-center gap-3">
						<div className="text-right hidden sm:block">
							<p className="text-xs font-bold text-gray-800">Admin Account</p>
							<p className="text-[10px] text-gray-400">Superuser</p>
						</div>
						<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">A</div>
					</div>
				</header>

				<main className="flex-1 overflow-y-auto bg-gray-50">
					{activeTab === 'categories' ? <CategoriesPage /> : <UserPage />}
				</main>
			</div>
		</div>
	);
};

export default AdminPanel;