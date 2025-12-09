import React, { useRef } from 'react'
import { MdLocalFireDepartment, MdFlashOn, MdStar, MdShoppingCart } from "react-icons/md"
import { useTranslation } from "react-i18next";
import CS2 from '../assets/images/cs2-2.jpg'
import { useNavigate } from 'react-router-dom';

const offers = [
	{
		game: "GENSHIN IMPACT",
		title: "Аккаунт Genshin Impact AR 55 | 5★ Hu Tao + Yelan",
		img: "/images/CS2.jpg",
		hit: true,
		discount: "-29%",
		instant: true,
		rating: 4.9,
		reviews: 234,
		seller: "ProGamer",
		price: 2500,
		oldPrice: 3500,
		currency: "₽"
	},
	{
		game: "VALORANT",
		title: "Valorant Аккаунт | Diamond 2 | Все агенты",
		img: "/images/valorant.png",
		hit: true,
		discount: "-16%",
		instant: false,
		rating: 4.8,
		reviews: 89,
		seller: "ValorantKing",
		price: 4200,
		oldPrice: 5000,
		currency: "₽"
	},
	{
		game: "HONKAI STAR RAIL",
		title: "Honkai Star Rail Аккаунт | Kafka + Silver Wolf",
		img: "/images/honkai.png",
		hit: true,
		discount: "-20%",
		instant: true,
		rating: 4.9,
		reviews: 167,
		seller: "StarRailMaster",
		price: 3200,
		oldPrice: 4000,
		currency: "₽"
	},
	{
		game: "FORTNITE",
		title: "Fortnite Аккаунт | Renegade Raider + 50 скинов",
		img: "/images/fortnite.png",
		hit: true,
		discount: "-26%",
		instant: true,
		rating: 4.8,
		reviews: 234,
		seller: "FortniteVault",
		price: 8900,
		oldPrice: 12000,
		currency: "₽"
	}
]

const games = [
	{
		name: 'Genshin Impact',
		img: CS2,
		count: '12,540 товаров'
	},
	{
		name: 'Honkai Star Rail',
		img: '/images/honkai.png',
		count: '8,320 товаров'
	},
	{
		name: 'Wuthering Waves',
		img: '/images/wuthering.png',
		count: '5,680 товаров'
	},
	{
		name: 'Counter-Strike 2',
		img: '/images/cs2.png',
		count: '15,420 товаров'
	},
	{
		name: 'Valorant',
		img: '/images/valorant.png',
		count: '9,870 товаров'
	},
	{
		name: 'League of Legends',
		img: '/images/lol.png',
		count: '18,650 товаров'
	},
	{
		name: 'Dota 2',
		img: '/images/dota2.png',
		count: '11,230 товаров'
	},
	{
		name: 'Fortnite',
		img: '/images/fortnite.png',
		count: '7,890 товаров'
	},
]

const PopulalGames = () => {
	const scrollRef = useRef(null);
	const { t } = useTranslation();
	const navigate = useNavigate();

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -240, behavior: 'smooth' });
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 240, behavior: 'smooth' });
		}
	};


	const handleGameClick = (game) => {
		navigate(`/category/${encodeURIComponent(game.name)}`);
	};

	return (
		<div className="w-full pt-12 pb-8 px-[7%] bg-gradient-to-b from-[#18181b] via-[#23232a] to-[#18181b]">
			<div className='flex align-center justify-between mb-6'>
				<div>
					<h2 className="text-white text-3xl font-bold mb-1">{t("popular_games")}</h2>
					<div className="text-zinc-400 text-lg">{t("choose_game_find_products")}</div>
				</div>
				<div className="flex items-center gap-3 pr-2 pt-2">
					<button
						className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#23232a] text-white text-xl flex items-center justify-center opacity-60 hover:opacity-100 transition"
						onClick={scrollLeft}
					>
						&#60;
					</button>
					<button
						className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#23232a] text-white text-xl flex items-center justify-center opacity-60 hover:opacity-100 transition"
						onClick={scrollRight}
					>
						&#62;
					</button>
				</div>
			</div>

			<div className="relative flex items-center">
				<div
					ref={scrollRef}
					className="flex gap-8 overflow-x-scroll w-full scrollbar-thin scrollbar-thumb-[#23232a] scrollbar-track-[#18181b]"
				>
					{games.map((game) => (
						<div
							key={game.name}
							className="bg-[#18181b] rounded-2xl w-full flex flex-col items-center justify-between border border-[#23232a] px-4 py-4 min-w-[200px] max-w-[200px] transition-shadow"
							onClick={() => handleGameClick(game)}
						>
							<img
								src={game.img}
								alt={game.name}
								className="w-full h-32 object-cover rounded-lg mb-2 mt-2 bg-black"
							/>
							<div className="w-full mt-auto">
								<div className="text-white font-semibold text-base text-center">
									{game.name}
								</div>
								<div className="text-zinc-400 text-sm text-center">
									{game.count}
								</div>
							</div>
						</div>
					))}
				</div>

			</div>
		</div>
	)
}

export default PopulalGames