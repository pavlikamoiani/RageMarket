import React from 'react'
import { MdFlashOn, MdStar, MdShoppingCart } from "react-icons/md"
import { useTranslation } from "react-i18next";
import CS2 from '../images/cs2-2.jpg'

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
		game: "GENSHIN IMPACT",
		title: "500 Genesis Crystals | Моментальная доставка",
		img: "/images/genshin.png",
		hit: false,
		discount: null,
		instant: true,
		rating: 5,
		reviews: 1250,
		seller: "FastDelivery",
		price: 890,
		oldPrice: null,
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
		game: "COUNTER-STRIKE 2",
		title: "CS2 Prime статус + 2000 часов",
		img: "/images/cs2.png",
		hit: false,
		discount: null,
		instant: true,
		rating: 4.7,
		reviews: 456,
		seller: "CSGOPro",
		price: 1800,
		oldPrice: null,
		currency: "₽"
	}
]

const NewArrivals = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full pt-12 pb-8 px-[7%] bg-gradient-to-b from-[#18181b] via-[#23232a] to-[#18181b]">
			<div className="flex items-center justify-between mb-8">
				<div>
					<div className="flex items-center gap-3 mb-1">
						<span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-700 shadow-lg">
							<span className="text-white text-xl">&#8599;</span>
						</span>
						<h2 className="text-white text-2xl font-bold">{t("new_arrivals")}</h2>
					</div>
					<div className="text-zinc-400 text-base">{t("fresh_products_from_verified_sellers")}</div>
				</div>
				<button className="text-zinc-300 text-base font-medium flex items-center gap-2 hover:underline">
					{t("view_all")} <span className="text-lg">&#8594;</span>
				</button>
			</div>
			<div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#23232a] scrollbar-track-[#18181b]">
				{offers.map((offer, idx) => (
					<div
						key={idx}
						className="flex-shrink-0 bg-[#18181b] rounded-2xl border border-[#23232a] shadow-lg min-w-[340px] max-w-[340px] w-full flex flex-col justify-between transition hover:shadow-xl"
					>
						<div className="relative px-5 pt-5 pb-2 h-[140px] flex flex-col">
							<img src={CS2} alt={offer.game} className="w-full h-32 object-cover rounded-lg mb-2 mt-2 bg-black" />
							<div className="flex flex-col gap-1">
								{/* {offer.hit && (
									<span className="absolute left-5 top-3 flex items-center px-2 py-0.5 rounded-full bg-gradient-to-r from-red-500 to-orange-400 text-white text-xs font-bold shadow">
										<span className="mr-1 text-xs">{t("hit")}</span>
									</span>
								)}
								{offer.discount && (
									<span className="absolute left-5 top-9 px-2 py-0.5 rounded-full bg-cyan-400 text-white text-xs font-bold">{offer.discount}</span>
								)}
								{offer.instant && (
									<span className="absolute left-5 top-16 flex items-center px-2 py-0.5 rounded-full bg-violet-600 text-white text-xs font-medium">
										<MdFlashOn className="mr-1 text-xs" /> {t("instant")}
									</span>
								)} */}
							</div>
							<div className="mt-2 text-white text-base font-semibold leading-tight line-clamp-2">{offer.title}</div>
						</div>
						<div className="border-t border-[#23232a] px-5 py-4 bg-[#18181b] rounded-b-2xl flex flex-col gap-2">
							<div className="text-violet-400 text-xs font-bold mb-1">{offer.game}</div>
							<div className="text-white font-semibold text-base mb-1 leading-tight">{offer.title}</div>
							<div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
								<MdStar className="text-yellow-400" />
								<span>{offer.rating}</span>
								<span>({offer.reviews} {t("reviews")})</span>
							</div>
							<div className="text-zinc-400 text-sm mb-2">
								{t("seller")}: <span className="text-cyan-400 hover:underline cursor-pointer">{offer.seller}</span>
							</div>
							<div className="flex items-end gap-3 mb-2">
								<span className="text-white text-xl font-bold">{offer.price} {offer.currency}</span>
								{offer.oldPrice && (
									<span className="text-zinc-500 text-base line-through">{offer.oldPrice} {offer.currency}</span>
								)}
							</div>
							<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-violet-600 text-white font-semibold text-base hover:bg-violet-700 transition">
								<MdShoppingCart className="w-5 h-5" />
								{t("add_to_cart")}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default NewArrivals