import React from 'react'
import { MdAutoAwesome } from "react-icons/md"
import { useTranslation } from 'react-i18next'
import CS2 from '../assets/images/cs2-2.jpg'

const games = [
	{
		name: 'Genshin Impact',
		img: '/images/genshin.png',
		count: '12,540 товаров',
		gradient: 'from-[#2d004b] to-[#4b006e]'
	},
	{
		name: 'Honkai Star Rail',
		img: '/images/honkai.png',
		count: '8,320 товаров',
		gradient: 'from-[#0a1a3c] to-[#1a2a6c]'
	},
	{
		name: 'Valorant',
		img: '/images/valorant.png',
		count: '9,870 товаров',
		gradient: 'from-[#3c0a1a] to-[#6c1a2a]'
	},
	{
		name: 'Counter-Strike 2',
		img: '/images/cs2.png',
		count: '15,420 товаров',
		gradient: 'from-[#4b2d2d] to-[#6e4b4b]'
	},
	{
		name: 'League of Legends',
		img: '/images/lol.png',
		count: '18,650 товаров',
		gradient: 'from-[#dbeafe] to-[#818cf8]'
	},
	{
		name: 'Fortnite',
		img: '/images/fortnite.png',
		count: '7,890 товаров',
		gradient: 'from-[#ede9fe] to-[#a78bfa]'
	},
]

const Games = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full pt-12 px-[7%] pb-12 bg-gradient-to-b from-[#18181b] via-[#23232a] to-[#18181b] border-b border-gray-800">
			<div className="flex items-center justify-between mb-8">
				<div>
					<div className="flex items-center gap-3 mb-1">
						<span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-violet-900 shadow-lg">
							<MdAutoAwesome className="text-white text-xl" />
						</span>
						<h2 className="text-white text-2xl font-bold">{t("games")}</h2>
					</div>
					<div className="text-zinc-400 text-base">{t("choose_game_find_products")}</div>
				</div>
				<button className="text-violet-400 text-base font-medium flex items-center gap-2 hover:underline">
					{t("all_categories")} <span className="text-lg">&#8594;</span>
				</button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
				{games.map((game, idx) => (
					<div
						key={game.name}
						className={`relative rounded-2xl overflow-hidden flex flex-col justify-end min-h-[180px] md:min-h-[220px] shadow-lg bg-gradient-to-br ${game.gradient}`}
					>
						<img
							src={game.img}
							alt={game.name}
							className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 object-contain z-10"
						/>
						<div className="relative z-10 p-4 md:p-6 mt-20 md:mt-28">
							<div className="text-white text-base md:text-lg font-bold mb-1">{game.name}</div>
							<div className="text-zinc-300 text-sm md:text-base">{game.count}</div>
						</div>
						<div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
							<svg width="120" height="120" viewBox="0 0 120 120">
								<circle cx="60" cy="60" r="40" stroke="#fff" strokeWidth="1" fill="none" opacity="0.2" />
								<circle cx="60" cy="60" r="20" stroke="#fff" strokeWidth="1" fill="none" opacity="0.1" />
								<line x1="60" y1="20" x2="60" y2="100" stroke="#fff" strokeWidth="1" opacity="0.1" />
								<line x1="20" y1="60" x2="100" y2="60" stroke="#fff" strokeWidth="1" opacity="0.1" />
							</svg>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Games