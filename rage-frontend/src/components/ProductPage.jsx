"use client"

import { useState } from "react"
// Заменяем импорты lucide-react на react-icons
import {
	MdShoppingCart,
	MdFavoriteBorder,
	MdStar,
	MdSecurity,
	MdFlashOn,
	MdMessage,
	MdChevronRight,
	MdCheckCircle,
	MdAccessTime,
	MdPerson
} from "react-icons/md";

// --- Заглушки для внешних компонентов (оставлены, как в предыдущем ответе) ---
// ... (Header, Footer, ProductCard, mockProducts)
// ...
// Мокаем данные
const mockProducts = [
	{
		id: 1,
		game: "GENSHIN IMPACT",
		title: "Аккаунт Genshin Impact AR 55 | 5★ Hu Tao + Yelan",
		image: "/images/genshin.png",
		rating: 4.9,
		reviewCount: 234,
		seller: "ProGamer",
		price: 2500,
		originalPrice: 3500,
		instant: true,
		discount: "-29%",
	},
	{
		id: 2,
		game: "VALORANT",
		title: "Valorant Аккаунт | Diamond 2 | Все агенты",
		image: "/images/valorant.png",
		rating: 4.8,
		reviewCount: 89,
		seller: "ValorantKing",
		price: 4200,
		originalPrice: 5000,
		instant: false,
		discount: "-16%",
	},
	{
		id: 3,
		game: "HONKAI STAR RAIL",
		title: "Honkai Star Rail Аккаунт | Kafka + Silver Wolf",
		image: "/images/honkai.png",
		rating: 4.9,
		reviewCount: 167,
		seller: "StarRailMaster",
		price: 3200,
		originalPrice: 4000,
		instant: true,
		discount: "-20%",
	},
	{
		id: 4,
		game: "FORTNITE",
		title: "Fortnite Аккаунт | Renegade Raider + 50 скинов",
		image: "/images/fortnite.png",
		rating: 4.8,
		reviewCount: 234,
		seller: "FortniteVault",
		price: 8900,
		originalPrice: 12000,
		instant: true,
		discount: "-26%",
	},
	{
		id: 5,
		game: "CS:GO/CS2",
		title: "CS2 Аккаунт | Global Elite | 5-летний ветеран",
		image: "/images/cs2.png",
		rating: 4.7,
		reviewCount: 190,
		seller: "CSGODaddy",
		price: 7500,
		originalPrice: 9900,
		instant: true,
		discount: "-24%",
	},
];

const ProductCard = ({ product }) => (
	<div className="bg-[#0c0d13] rounded-xl shadow-lg overflow-hidden border border-gray-700">
		<div className="relative h-40">
			<img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />
			<span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
				{product.discount || "New"}
			</span>
		</div>
		<div className="p-4">
			<p className="text-sm font-medium uppercase text-purple-400">{product.game}</p>
			<h3 className="mt-1 text-base font-semibold text-white truncate">{product.title}</h3>
			<div className="flex items-center mt-2">
				<span className="text-lg font-bold text-white">{product.price} ₽</span>
				{product.originalPrice && (
					<span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice} ₽</span>
				)}
			</div>
		</div>
	</div>
)

// --- Основной компонент ProductPage ---

export default function ProductPage({ params }) {
	const [selectedImage, setSelectedImage] = useState(0)
	const [activeTab, setActiveTab] = useState("description")

	const product = mockProducts[0]
	const relatedProducts = mockProducts.slice(1, 5)

	const images = [
		product.image,
		"/placeholder.svg?height=400&width=600",
		"/placeholder.svg?height=400&width=600",
		"/placeholder.svg?height=400&width=600",
	]

	const createButton = (content, className, size = 'md') => {
		let baseClasses = "flex items-center justify-center font-semibold rounded-lg transition-colors duration-200"
		let sizeClasses = ""
		if (size === 'lg') sizeClasses = "px-6 py-3 text-lg"
		else if (size === 'sm') sizeClasses = "px-3 py-1.5 text-sm"
		else sizeClasses = "px-4 py-2 text-base"
		return (
			<button className={`${baseClasses} ${sizeClasses} ${className}`}>
				{content}
			</button>
		)
	}

	const createBadge = (content, className) => (
		<span className={`inline-flex items-center px-3 py-0.5 text-xs font-medium rounded-full ${className}`}>
			{content}
		</span>
	)

	return (
		<div className="min-h-screen  bg-gradient-to-b from-[#0c0d13] via-[#0c0d13] to-[#0c0d13]">
			<main className="mx-auto max-w-7xl px-4 py-8">
				{/* Breadcrumb */}
				<nav className="mb-6 flex items-center gap-2 text-sm text-gray-400">
					<a href="/" className="hover:text-purple-500">
						Главная
					</a>
					<MdChevronRight className="h-4 w-4" /> {/* Иконка */}
					<a href="/categories" className="hover:text-purple-500">
						{product.game}
					</a>
					<MdChevronRight className="h-4 w-4" /> {/* Иконка */}
					<span className="text-white">Аккаунты</span>
				</nav>

				<div className="grid gap-8 lg:grid-cols-2">
					{/* Image Gallery */}
					<div className="space-y-4">
						<div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-700">
							<img
								src={images[selectedImage] || "/placeholder.svg"}
								alt={product.title}
								className="h-full w-full object-cover"
							/>
							{createBadge(
								<>
									<MdFlashOn className="mr-1 h-3 w-3" /> Мгновенная доставка {/* Иконка */}
								</>,
								"absolute left-4 top-4 bg-purple-600 text-white"
							)}
						</div>
						<div className="flex gap-2 overflow-x-auto pb-2">
							{images.map((img, index) => (
								<button
									key={index}
									onClick={() => setSelectedImage(index)}
									className={`relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${selectedImage === index ? "border-purple-500" : "border-gray-700 hover:border-purple-500/50"
										}`}
								>
									<img
										src={img || "/placeholder.svg"}
										alt={`Screenshot ${index + 1}`}
										className="h-full w-full object-cover"
									/>
								</button>
							))}
						</div>
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						{/* Title and badges */}
						<div>
							<div className="flex flex-wrap gap-2 mb-2">
								{createBadge("🔥 Хит продаж", "bg-orange-500/20 text-orange-500")}
								{createBadge(product.discount, "bg-cyan-500/20 text-cyan-400")}
							</div>
							<p className="text-sm font-medium uppercase tracking-wider text-purple-500">{product.game}</p>
							<h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{product.title}</h1>
						</div>

						{/* Rating */}
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-1">
								{[1, 2, 3, 4, 5].map((star) => (
									<MdStar
										key={star}
										className={`h-5 w-5 ${star <= Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-700"
											}`}
									/> // Иконка
								))}
								<span className="ml-2 font-semibold text-white">{product.rating}</span>
							</div>
							<span className="text-gray-400">({product.reviewCount} отзывов)</span>
						</div>

						{/* Seller info */}
						<div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-[#0c0d13] p-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
								<MdPerson className="h-6 w-6 text-purple-500" /> {/* Иконка */}
							</div>
							<div className="flex-1">
								<p className="font-semibold text-white">{product.seller}</p>
								<div className="flex items-center gap-2 text-sm text-gray-400">
									<span className="flex items-center gap-1">
										<MdStar className="h-3 w-3 fill-yellow-500 text-yellow-500" /> {/* Иконка */}
										4.9
									</span>
									<span>•</span>
									<span>1250 продаж</span>
								</div>
							</div>
						</div>

						{/* Price */}
						<div className="rounded-xl border border-gray-700 bg-[#0c0d13] p-6">
							<div className="flex items-baseline gap-3">
								<span className="text-4xl font-bold text-white">{product.price} ₽</span>
								{product.originalPrice && (
									<span className="text-xl text-gray-400 line-through">{product.originalPrice} ₽</span>
								)}
							</div>

							<div className="mt-4 flex flex-col gap-2 sm:flex-row">
								{createButton(
									<>
										<MdShoppingCart className="mr-2 h-5 w-5" /> {/* Иконка */}
										Добавить в корзину
									</>,
									"flex-1 bg-purple-600 text-white hover:bg-purple-700",
									"lg"
								)}
								{createButton(
									<MdFavoriteBorder className="h-5 w-5" />,
									"border border-gray-700 text-white hover:border-purple-500 bg-transparent w-auto flex-shrink-0",
									"lg"
								)}
							</div>

							<a href="/cart">
								{createButton(
									"Купить сейчас",
									"mt-2 w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent",
									"lg"
								)}
							</a>
						</div>

						{/* Features */}
						<div className="grid grid-cols-2 gap-4">
							<div className="flex items-center gap-3 rounded-lg border border-gray-700 bg-[#0c0d13] p-3">
								<MdFlashOn className="h-5 w-5 text-cyan-400" /> {/* Иконка */}
								<div>
									<p className="text-sm font-medium text-white">Мгновенно</p>
									<p className="text-xs text-gray-400">Доставка 1-5 мин</p>
								</div>
							</div>
							<div className="flex items-center gap-3 rounded-lg border border-gray-700 bg-[#0c0d13] p-3">
								<MdSecurity className="h-5 w-5 text-purple-500" /> {/* Иконка */}
								<div>
									<p className="text-sm font-medium text-white">Гарантия</p>
									<p className="text-xs text-gray-400">Защита покупателя</p>
								</div>
							</div>
							<div className="flex items-center gap-3 rounded-lg border border-gray-700 bg-[#0c0d13] p-3">
								<MdCheckCircle className="h-5 w-5 text-green-500" /> {/* Иконка */}
								<div>
									<p className="text-sm font-medium text-white">Проверено</p>
									<p className="text-xs text-gray-400">Аккаунт верифицирован</p>
								</div>
							</div>
							<div className="flex items-center gap-3 rounded-lg border border-gray-700 bg-[#0c0d13] p-3">
								<MdAccessTime className="h-5 w-5 text-yellow-500" /> {/* Иконка */}
								<div>
									<p className="text-sm font-medium text-white">24/7</p>
									<p className="text-xs text-gray-400">Поддержка</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Tabs - Имитация Tabs с помощью useState */}
				<div className="mt-12">
					<div className="w-full">
						{/* TabsList */}
						<div className="flex w-full justify-start border-b border-gray-700 bg-transparent space-x-4">
							<button
								onClick={() => setActiveTab("description")}
								className={`py-2 px-4 text-base font-medium transition-colors duration-200 ${activeTab === "description"
									? "border-b-2 border-purple-500 text-purple-500"
									: "text-gray-400 hover:text-white"
									}`}
							>
								Описание
							</button>
							<button
								onClick={() => setActiveTab("reviews")}
								className={`py-2 px-4 text-base font-medium transition-colors duration-200 ${activeTab === "reviews"
									? "border-b-2 border-purple-500 text-purple-500"
									: "text-gray-400 hover:text-white"
									}`}
							>
								Отзывы ({product.reviewCount})
							</button>
							<button
								onClick={() => setActiveTab("seller")}
								className={`py-2 px-4 text-base font-medium transition-colors duration-200 ${activeTab === "seller"
									? "border-b-2 border-purple-500 text-purple-500"
									: "text-gray-400 hover:text-white"
									}`}
							>
								О продавце
							</button>
						</div>

						{/* TabsContent */}
						<div className="mt-6">
							{activeTab === "description" && (
								<div className="rounded-xl border border-gray-700 bg-[#0c0d13] p-6">
									<h3 className="mb-4 text-lg font-semibold text-white">Описание товара</h3>
									<div className="space-y-4 text-gray-400">
										<p>
											Продаю аккаунт Genshin Impact с Adventure Rank 55. На аккаунте есть следующие 5-звездочные
											персонажи:
										</p>
										<ul className="list-disc pl-6 space-y-2">
											<li>Hu Tao (C1) - полностью прокачана</li>
											<li>Yelan (C0) - отличное оружие</li>
											<li>Zhongli (C0) - идеальный щит</li>
											<li>Xingqiu (C6) - полные созвездия</li>
										</ul>
										<p>
											Аккаунт имеет много примогемов, ресурсов и артефактов. Все данные передаются покупателю. Почта
											привязана и будет передана.
										</p>
										<div className="mt-6 rounded-lg bg-purple-500/10 p-4 border border-purple-500/30">
											<p className="text-purple-500 font-medium">
												⚡ Мгновенная доставка: данные аккаунта будут отправлены автоматически после оплаты
											</p>
										</div>
									</div>
								</div>
							)}

							{activeTab === "reviews" && (
								<div className="space-y-4">
									{[1, 2, 3].map((review) => (
										<div key={review} className="rounded-xl border border-gray-700 bg-[#0c0d13] p-6">
											<div className="flex items-center gap-4">
												<div className="h-10 w-10 rounded-full bg-purple-500/20" />
												<div>
													<p className="font-medium text-white">Пользователь{review}</p>
													<div className="flex items-center gap-1">
														{[1, 2, 3, 4, 5].map((star) => (
															<MdStar key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
														))}
													</div>
												</div>
												<span className="ml-auto text-sm text-gray-400">2 дня назад</span>
											</div>
											<p className="mt-4 text-gray-400">
												Отличный аккаунт! Все как в описании, доставка была моментальной. Продавец ответил на все вопросы.
												Рекомендую!
											</p>
										</div>
									))}
								</div>
							)}

							{activeTab === "seller" && (
								<div className="rounded-xl border border-gray-700 bg-[#0c0d13] p-6">
									<div className="flex items-center gap-4">
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
											<MdPerson className="h-8 w-8 text-purple-500" /> {/* Иконка */}
										</div>
										<div>
											<h3 className="text-xl font-semibold text-white">{product.seller}</h3>
											<p className="text-gray-400">Продавец с 2022 года</p>
										</div>
									</div>
									<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
										<div className="text-center">
											<p className="text-2xl font-bold text-white">1,250</p>
											<p className="text-sm text-gray-400">Продаж</p>
										</div>
										<div className="text-center">
											<p className="text-2xl font-bold text-white">4.9</p>
											<p className="text-sm text-gray-400">Рейтинг</p>
										</div>
										<div className="text-center">
											<p className="text-2xl font-bold text-white">98%</p>
											<p className="text-sm text-gray-400">Положительных</p>
										</div>
										<div className="text-center">
											<p className="text-2xl font-bold text-white">&lt; 5 мин</p>
											<p className="text-sm text-gray-400">Время ответа</p>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<section className="mt-12">
					<h2 className="mb-6 text-2xl font-bold text-white">Похожие товары</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{relatedProducts.map((p) => (
							<ProductCard key={p.id} product={p} />
						))}
					</div>
				</section>
			</main >
		</div >
	)
}