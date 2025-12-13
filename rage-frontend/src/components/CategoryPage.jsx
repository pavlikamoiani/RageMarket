import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MdStar, MdShoppingCart } from "react-icons/md"
import { FaSearch } from "react-icons/fa"
import { AiOutlineSliders, AiOutlineClose, AiOutlineDown } from "react-icons/ai"
import { AiOutlineClose as X } from "react-icons/ai"
import { useTranslation } from 'react-i18next'

const products = [
	{
		id: 1,
		game: "Genshin Impact",
		type: "accounts",
		title: "Аккаунт Genshin Impact AR 55 | 5★ Hu Tao + Yelan",
		img: "/images/genshin.png",
		rating: 4.9,
		reviews: 234,
		seller: "ProGamer",
		price: 2500,
		oldPrice: 3500,
		currency: "$"
	},
	{
		id: 2,
		game: "Valorant",
		type: "accounts",
		title: "Valorant Аккаунт | Diamond 2 | Все агенты",
		img: "/images/valorant.png",
		rating: 4.8,
		reviews: 89,
		seller: "ValorantKing",
		price: 4200,
		oldPrice: 5000,
		currency: "$"
	},
	{
		id: 3,
		game: "Honkai Star Rail",
		type: "accounts",
		title: "Honkai Star Rail Аккаунт | Kafka + Silver Wolf",
		img: "/images/honkai.png",
		rating: 4.9,
		reviews: 167,
		seller: "StarRailMaster",
		price: 3200,
		oldPrice: 4000,
		currency: "$"
	},
	{
		id: 4,
		game: "Fortnite",
		type: "accounts",
		title: "Fortnite Аккаунт | Renegade Raider + 50 скинов",
		img: "/images/fortnite.png",
		rating: 4.8,
		reviews: 234,
		seller: "FortniteVault",
		price: 8900,
		oldPrice: 12000,
		currency: "$"
	}
]

const categories = [
	{ id: "Genshin Impact", name: "Genshin Impact" },
	{ id: "Valorant", name: "Valorant" },
	{ id: "Honkai Star Rail", name: "Honkai Star Rail" },
	{ id: "Fortnite", name: "Fortnite" }
]



const priceRanges = [
	{ id: "0-1000", label: "До 1000 $" },
	{ id: "1000-5000", label: "1000 - 5000 $" },
	{ id: "5000-10000", label: "5000 - 10000 $" },
	{ id: "10000+", label: "Более 10000 $" },
]

const CategoryPage = () => {
	const { gameId } = useParams()
	const [selectedGame, setSelectedGame] = useState(gameId ? decodeURIComponent(gameId) : null)
	const [selectedTypes, setSelectedTypes] = useState([])
	const [filtersOpen, setFiltersOpen] = useState(false)
	const { t } = useTranslation();

	const productTypes = [
		{ id: "accounts", label: t("accounts") },
		{ id: "currency", label: t("currency") },
		{ id: "items", label: t("items") },
		{ id: "boost", label: t("boost") },
		{ id: "keys", label: t("keys") },
	]

	useEffect(() => {
		setSelectedGame(gameId ? decodeURIComponent(gameId) : null)
	}, [gameId])


	const toggleType = (typeId) => {
		setSelectedTypes((prev) =>
			prev.includes(typeId) ? prev.filter((t) => t !== typeId) : [...prev, typeId]
		)
	}

	const filtered = products.filter(p => {
		const byGame = selectedGame ? p.game.toLowerCase() === selectedGame.toLowerCase() : true;
		const byType = selectedTypes.length > 0 ? selectedTypes.includes(p.type) : true;
		return byGame && byType;
	});

	return (
		<main className=" bg-[#0c0c11]">
			<div className='mx-auto max-w-7xl px-4 py-8'>
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-white">{t("game_catalog")}</h1>
					<p className="mt-2 text-zinc-400">{t('find_the_right_products_among')} {filtered.length}+ {t("offers")}</p>
				</div>

				<div className="mb-6 flex flex-wrap gap-2">
					<button
						onClick={() => setSelectedGame(null)}
						className={`px-4 py-2 rounded-lg font-semibold ${selectedGame === null ? "bg-violet-600 text-white" : "border border-zinc-600 text-zinc-400 hover:border-violet-600 hover:text-white"}`}
					>
						{t("all_games")}
					</button>
					{categories.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setSelectedGame(cat.id)}
							className={`px-4 py-2 rounded-lg font-semibold ${selectedGame === cat.id ? "bg-violet-600 text-white" : "border border-zinc-600 text-zinc-400 hover:border-violet-600 hover:text-white"}`}
						>
							{cat.name}
						</button>
					))}
				</div>

				<div className="flex flex-col gap-8 lg:flex-row">
					<aside className={`${filtersOpen ? "block" : "hidden"} w-full space-y-6 lg:block lg:w-64`}>
						<div className="rounded-xl border border-zinc-700 bg-[#12121a] p-4">
							<h3 className="mb-3 font-semibold text-white">{t("search")}</h3>
							<div className="relative">
								<FaSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
								<input
									type="text"
									placeholder={t("search_placeholder")}
									className="border border-zinc-700 bg-[#18181b] pl-10 text-white placeholder:text-zinc-400 rounded-lg py-2 w-full"
								/>
							</div>
						</div>

						<div className="rounded-xl border border-zinc-700 bg-[#12121a] p-4">
							<h3 className="mb-3 font-semibold text-white">{t("product_type")}</h3>
							<div className="space-y-2">
								{productTypes.map((type) => (
									<label
										key={type.id}
										className="flex cursor-pointer items-center gap-2 text-sm text-zinc-400 hover:text-white"
									>
										<input
											type="checkbox"
											checked={selectedTypes.includes(type.id)}
											onChange={() => toggleType(type.id)}
											className="border border-zinc-700 accent-violet-600"
										/>
										{type.label}
									</label>
								))}
							</div>
						</div>

						<div className="rounded-xl border border-zinc-700 bg-[#12121a] p-4">
							<h3 className="mb-3 font-semibold text-white">{t("price")}</h3>
							<div className="space-y-2">
								{priceRanges.map((range) => (
									<label
										key={range.id}
										className="flex cursor-pointer items-center gap-2 text-sm text-zinc-400 hover:text-white"
									>
										<input type="checkbox" className="border border-zinc-700 accent-violet-600" />
										{range.label}
									</label>
								))}
							</div>
						</div>

						<div className="rounded-xl border border-zinc-700 bg-[#12121a] p-4">
							<h3 className="mb-3 font-semibold text-white">{t("additional")}</h3>
							<div className="space-y-2">
								<label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-400 hover:text-white">
									<input type="checkbox" className="border border-zinc-700 accent-violet-600" />
									{t("instant_delivery")}
								</label>
								<label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-400 hover:text-white">
									<input type="checkbox" className="border border-zinc-700 accent-violet-600" />
									{t("discounted")}
								</label>
								<label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-400 hover:text-white">
									<input type="checkbox" className="border border-zinc-700 accent-violet-600" />
									{t("verified_sellers")}
								</label>
							</div>
						</div>

						<button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-lg mt-2">
							{t("apply_filters")}
						</button>
					</aside>

					<div className="flex-1">
						<div className="flex items-center justify-between">
							<button
								className="mb-6 border border-zinc-700 text-zinc-400 lg:hidden bg-transparent px-4 py-2 rounded-lg flex items-center gap-2"
								onClick={() => setFiltersOpen(!filtersOpen)}
							>
								<AiOutlineSliders className="h-4 w-4" />
								{t("filters")}
								{filtersOpen && <AiOutlineClose className="h-4 w-4" />}
							</button>

							{/* <div className="flex items-center gap-2">
								<span className="text-sm text-zinc-400">{t("sorting")}:</span>
								<button className="border border-zinc-700 text-white bg-transparent px-4 py-2 rounded-lg flex items-center gap-2">
									{t("popular")} <AiOutlineDown className="h-4 w-4" />
								</button>
							</div> */}
						</div>

						{selectedTypes.length > 0 && (
							<div className="flex flex-wrap gap-2 mb-4">
								{selectedTypes.map((typeId) => {
									const type = productTypes.find((t) => t.id === typeId)
									return (
										<span
											key={typeId}
											className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full cursor-pointer flex items-center gap-1"
											onClick={() => toggleType(typeId)}
										>
											{type?.label}
											<X className="h-3 w-3" />
										</span>
									)
								})}
								<button
									className="text-zinc-400 hover:text-white px-2 py-1"
									onClick={() => setSelectedTypes([])}
								>
									{t("reset_all")}
								</button>
							</div>
						)}

						<div className="grid items-center justify-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
							{filtered.map(product => (
								<div
									key={product.id}
									className="bg-[#18181b] rounded-2xl border border-[#23232a] shadow-lg min-w-[280px] max-w-[320px] w-full flex flex-col justify-between transition hover:shadow-xl"
								>
									<div className="relative px-5 pt-5 pb-2 h-[140px] flex flex-col">
										<img
											src={product.img}
											alt={product.game}
											className="w-full h-32 object-cover rounded-lg mb-2 mt-2 bg-black"
										/>
										<div className="mt-2 text-white text-base font-semibold leading-tight line-clamp-2">
											{product.title}
										</div>
									</div>
									<div className="border-t border-[#23232a] px-5 py-4 bg-[#18181b] rounded-b-2xl">
										<div className="text-violet-400 text-xs font-bold mb-1 mt-3">{product.game}</div>
										<div className="text-white font-semibold text-base mb-1 leading-tight">{product.title}</div>
										<div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
											<MdStar className="text-yellow-400" />
											<span>{product.rating}</span>
											<span>({product.reviews} {t("reviews")})</span>
										</div>
										<div className="text-zinc-400 text-sm mb-2">
											{t("seller")}: <span className="text-cyan-400 hover:underline cursor-pointer">{product.seller}</span>
										</div>
										<div className="flex items-end gap-3 mb-2">
											<span className="text-white text-xl font-bold">{product.price} {product.currency}</span>
											<span className="text-zinc-500 text-base line-through">{product.oldPrice} {product.currency}</span>
										</div>
										<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-violet-600 text-white font-semibold text-base hover:bg-violet-700 transition">
											<MdShoppingCart className="w-5 h-5" />
											{t("add_to_cart")}
										</button>
									</div>
								</div>
							))}
						</div>

						<div className="mt-8 text-center">
							<button className="border border-zinc-700 text-white hover:border-violet-600 bg-transparent px-6 py-2 rounded-lg">
								{t("load_more")}
							</button>
						</div>
					</div>
				</div>
			</div>

		</main>
	)
}

export default CategoryPage