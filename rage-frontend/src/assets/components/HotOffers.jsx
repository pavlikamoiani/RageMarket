import React from 'react'
import { MdLocalFireDepartment, MdFlashOn, MdStar, MdShoppingCart } from "react-icons/md"
import { useTranslation } from 'react-i18next';

const offers = [
	{
		game: "GENSHIN IMPACT",
		title: "Аккаунт Genshin Impact AR 55 | 5★ Hu Tao + Yelan",
		img: "/images/genshin.png",
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

const HotOffers = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full pt-12 pb-8 px-[7%] bg-gradient-to-b from-[#18181b] via-[#23232a] to-[#18181b]">
			<div className="flex items-center justify-between mb-8">
				<div>
					<div className="flex items-center gap-3 mb-1">
						<span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
							<MdLocalFireDepartment className="text-white text-xl" />
						</span>
						<h2 className="text-white text-2xl font-bold">{t("hot_offers")}</h2>
					</div>
					<div className="text-zinc-400 text-base">{t("most_popular_products_right_now")}</div>
				</div>
				<button className="text-violet-400 text-base font-medium flex items-center gap-2 hover:underline">
					{t("view_all")} <span className="text-lg">&#8594;</span>
				</button>
			</div>
			<div className="flex align-center justify-between overflow-x-auto scrollbar-thin scrollbar-thumb-[#23232a] scrollbar-track-[#18181b]">
				{offers.map((offer, idx) => (
					<div
						key={idx}
						className="flex-shrink-0 bg-[#18181b] rounded-2xl border border-[#23232a] shadow-lg min-w-[280px] max-w-[320px] w-full flex flex-col justify-between transition hover:shadow-xl"
					>
						<div className="relative px-5 pt-5 pb-2 h-[140px] flex flex-col">
							<img src={offer.img} alt={offer.game} className="w-10 h-10 rounded-lg object-contain mb-2" />
							{offer.hit && (
								<span className="absolute left-5 top-3 flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-orange-400 text-white text-xs font-bold shadow">
									<MdLocalFireDepartment className="mr-1 text-xs" /> Хит
								</span>
							)}
							<span className="absolute left-5 top-10 px-2 py-0.5 rounded-full bg-cyan-400 text-white text-xs font-bold">{offer.discount}</span>
							{offer.instant && (
								<span className="absolute left-5 top-16 flex items-center px-2 py-0.5 rounded-full bg-violet-600 text-white text-xs font-medium">
									<MdFlashOn className="mr-1 text-xs" /> Мгновенно
								</span>
							)}
							<div className="mt-2 text-white text-base font-semibold leading-tight line-clamp-2">{offer.title}</div>
						</div>
						<div className="border-t border-[#23232a] px-5 py-4 bg-[#18181b] rounded-b-2xl">
							<div className="text-violet-400 text-xs font-bold mb-1">{offer.game}</div>
							<div className="text-white font-semibold text-base mb-1 leading-tight">{offer.title}</div>
							<div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
								<MdStar className="text-yellow-400" />
								<span>{offer.rating}</span>
								<span>({offer.reviews} отзывов)</span>
							</div>
							<div className="text-zinc-400 text-sm mb-2">
								Продавец: <span className="text-cyan-400 hover:underline cursor-pointer">{offer.seller}</span>
							</div>
							<div className="flex items-end gap-3 mb-2">
								<span className="text-white text-xl font-bold">{offer.price} {offer.currency}</span>
								<span className="text-zinc-500 text-base line-through">{offer.oldPrice} {offer.currency}</span>
							</div>
							<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-violet-600 text-white font-semibold text-base hover:bg-violet-700 transition">
								<MdShoppingCart className="w-5 h-5" />
								В корзину
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default HotOffers