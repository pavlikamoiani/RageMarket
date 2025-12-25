import React, { useState } from 'react';
import roblox from '../assets/images/roblox.png';
import cs2 from '../assets/images/cs2.png';
import dota from '../assets/images/dota.jpg';
import callofduty from '../assets/images/callofduty.png';
import fifa from '../assets/images/fifa.png';
import rust from '../assets/images/rust.png';
import fortnite from '../assets/images/fortnite.jpg';
import apexlegends from '../assets/images/apexlegends.png';
import leagueoflegends from '../assets/images/leagueoflegends.png';

const gameIcons = {
	Roblox: roblox,
	CS2: cs2,
	Dota: dota,
	"Call Of Duty": callofduty,
	Fifa: fifa,
	Rust: rust,
	Fortnite: fortnite,
	"Apex Legends": apexlegends,
	"League Of Legends": leagueoflegends,
};


const games = [
	{
		name: 'Roblox',
		types: [
			'Adopt Me', 'Steal A Brainrot', 'Murder Mystery 2', 'Grow A Garden',
			'Pet Simulator 99', 'Blox Fruits', 'Blade Ball', 'Fish It', 'Accounts', 'Gift Cards'
		]
	},
	{ name: 'CS2', types: ['Items', 'Accounts'] },
	{ name: 'Dota', types: ['Items', 'Accounts'] },
	{ name: 'Call Of Duty', types: ['Items', 'Accounts'] },
	{ name: 'Fifa', types: ['Account', 'Gift Cards'] },
	{ name: 'Rust', types: ['Items', 'Accounts'] },
	{ name: 'Fortnite', types: ['Accounts', 'Gifts', 'Battle Pass'] },
	{ name: 'Apex Legends', types: ['Account'] },
	{ name: 'League Of Legends', types: ['Accounts'] }
];

const initialProduct = {
	title: '',
	price: '',
	description: '',
	details: '',
	image: null
};

const Sell = () => {
	const [step, setStep] = useState(1);
	const [selectedGame, setSelectedGame] = useState(null);
	const [selectedType, setSelectedType] = useState(null);
	const [product, setProduct] = useState(initialProduct);
	const [imagePreview, setImagePreview] = useState(null);
	const [search, setSearch] = useState('');

	const handleGameSelect = (game) => {
		setSelectedGame(game);
		setSelectedType(null);
		setStep(2);
	};

	const handleTypeSelect = (type) => {
		setSelectedType(type);
		setStep(3);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProduct((prev) => ({ ...prev, [name]: value }));
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setProduct((prev) => ({ ...prev, image: file }));
		if (file) {
			setImagePreview(URL.createObjectURL(file));
		} else {
			setImagePreview(null);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Product submitted!');
		setStep(1);
		setSelectedGame(null);
		setSelectedType(null);
		setProduct(initialProduct);
		setImagePreview(null);
	};

	return (
		<div className="bg-[#18181b] px-20 py-10 shadow-2xl text-white">
			{step === 1 && (
				<div>
					<div className="mb-4 font-semibold text-lg">Select a game / application</div>
					<div className="w-full h-2 bg-[#23232a] rounded mb-6">
						<div className="h-2 bg-purple-600 rounded" style={{ width: '33%' }} />
					</div>
					<input
						type="text"
						placeholder="Search games and applications"
						value={search}
						onChange={e => setSearch(e.target.value)}
						className="w-[400px] px-4 py-4 rounded-lg bg-[#23232a] text-white focus:outline-none mb-6"
					/>
					<div className="grid grid-cols-6 gap-5">
						{games
							.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
							.map(game => (
								<button
									key={game.name}
									className="flex flex-col items-center bg-[#23232a] hover:bg-purple-600 transition rounded-xl p-4 cursor-pointer border border-transparent hover:border-purple-400"
									onClick={() => handleGameSelect(game)}
								>
									<div className="w-12 h-12 flex items-center justify-center mb-2">
										{gameIcons[game.name] ? (
											<img src={gameIcons[game.name]} alt={game.name} className="w-[100%] h-[100%] object-contain" />
										) : (
											<span className="text-3xl">🎮</span>
										)}
									</div>
									<span className="text-xs text-white font-medium text-center">{game.name}</span>
								</button>
							))}
					</div>
				</div>
			)}

			{step === 2 && selectedGame && (
				<div>
					<div className="mb-4 font-semibold text-lg cursor-pointer" onClick={() => setStep(1)}>← Select a type for {selectedGame.name}:</div>
					<div className="w-full h-2 bg-[#23232a] rounded mb-6">
						<div className="h-2 bg-purple-600 rounded" style={{ width: '66%' }} />
					</div>
					<div className="flex flex-col w-[400px] gap-4">
						{selectedGame.types.map((type) => (
							<button
								key={type}
								className="py-4 px-4 bg-[#23232a] rounded-xl hover:bg-purple-600 transition text-white font-semibold"
								onClick={() => handleTypeSelect(type)}
							>
								{type}
							</button>
						))}
					</div>
				</div>
			)}

			{step === 3 && (
				<>
					<div className="w-full h-2 bg-[#23232a] rounded mb-6">
						<div className="h-2 bg-purple-600 rounded" style={{ width: '100%' }} />
					</div>
					<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="md:col-span-2 flex flex-col gap-8">
							<div className="mb-8">
								<div className="relative bg-[#23232a] rounded-2xl flex items-center justify-center" style={{ minHeight: 420 }}>
									{!imagePreview || (Array.isArray(imagePreview) && imagePreview.length === 0) ? (
										<label className="flex flex-col items-center justify-center w-full h-[420px] cursor-pointer">
											<input
												type="file"
												accept="image/*"
												onChange={e => {
													const files = Array.from(e.target.files);
													setProduct(prev => ({ ...prev, images: files }));
													setImagePreview(files.map(file => URL.createObjectURL(file)));
													setProduct(prev => ({ ...prev, coverIndex: 0 }));
												}}
												className="hidden"
												multiple={true}
											/>
											<svg width="40" height="40" fill="none" className="mb-2 text-blue-400" viewBox="0 0 24 24">
												<path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
												<rect x="4" y="16" width="16" height="4" rx="2" stroke="currentColor" strokeWidth="2" />
											</svg>
											<span className="text-blue-400 text-lg">Upload</span>
										</label>
									) : (
										<div className="w-full h-[420px] flex flex-col items-center justify-center relative">
											{Array.isArray(imagePreview) && imagePreview.length > 0 && (
												<>
													<div className="flex flex-row gap-2 mb-2">
														{imagePreview.map((img, idx) => (
															<div key={idx} className="relative">
																<img
																	src={img}
																	alt={`preview-${idx}`}
																	className={`object-contain max-h-[80px] rounded-lg border-2 cursor-pointer ${product.coverIndex === idx ? 'border-purple-500' : 'border-transparent'}`}
																	onClick={() => setProduct(prev => ({ ...prev, coverIndex: idx }))}
																/>
																<button
																	type="button"
																	className="absolute top-0 right-0 bg-black bg-opacity-60 rounded-full p-1"
																	onClick={() => {
																		const newImages = product.images.filter((_, i) => i !== idx);
																		const newPreviews = imagePreview.filter((_, i) => i !== idx);
																		let newCover = product.coverIndex;
																		if (idx === product.coverIndex) newCover = 0;
																		else if (idx < product.coverIndex) newCover = product.coverIndex - 1;
																		setProduct(prev => ({
																			...prev,
																			images: newImages,
																			coverIndex: newCover
																		}));
																		setImagePreview(newPreviews);
																	}}
																	title="Remove"
																>
																	<svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
																		<path d="M6 6l12 12M6 18L18 6" />
																	</svg>
																</button>
															</div>
														))}
													</div>
													<div className="w-full h-[320px] flex items-center justify-center relative">
														<img
															src={imagePreview[product.coverIndex || 0]}
															alt="cover"
															className="object-contain max-h-[300px] rounded-2xl"
														/>
														<span className="absolute bottom-2 right-2 bg-purple-600 text-xs px-2 py-1 rounded text-white">Cover</span>
													</div>
												</>
											)}
											<button
												type="button"
												onClick={() => {
													setImagePreview([]);
													setProduct(prev => ({ ...prev, images: [], coverIndex: 0 }));
												}}
												className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
												title="Remove all"
											>
												<svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
													<path d="M6 6l12 12M6 18L18 6" />
												</svg>
											</button>
										</div>
									)}
								</div>
								<div className="text-xs text-gray-400 mt-2 pl-1">Upload multiple images. Click on a thumbnail to set as cover.</div>
							</div>
							<div>
								<label className="block text-2xl font-bold mb-4">Description</label>
								<textarea
									name="description"
									value={product.description}
									onChange={handleInputChange}
									required
									rows={6}
									placeholder="Product description"
									className="w-full px-6 py-5 rounded-xl bg-[#23232a] text-white focus:outline-none resize-none text-base"
								/>
							</div>
							<div>
								<label className="block text-2xl font-bold mb-4">Product Details</label>
								<textarea
									name="comment"
									value={product.comment || ''}
									onChange={e => setProduct(prev => ({ ...prev, comment: e.target.value }))}
									placeholder="Comment"
									rows={3}
									className="w-full px-6 py-4 rounded-xl bg-[#23232a] text-white focus:outline-none resize-none text-base"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex gap-2">
								<input
									type="number"
									name="price"
									value={product.price}
									onChange={handleInputChange}
									required
									min="0"
									step="0.01"
									placeholder="Product price"
									className="flex-1 px-4 py-4 rounded-xl bg-[#23232a] text-white focus:outline-none text-base"
								/>
								<div className="flex items-center px-2">
									<span className="text-2xl text-gray-400">↔️</span>
								</div>
								<input
									type="text"
									value={product.price ? (product.price * 0.8).toFixed(2) : ''}
									readOnly
									placeholder="Earnings"
									className="flex-1 px-4 py-4 rounded-xl bg-[#23232a] text-white focus:outline-none text-base"
								/>
							</div>
							<div className="text-sm text-gray-400 mb-2">Commission 20%</div>
							<input
								type="text"
								name="title"
								value={product.title}
								onChange={handleInputChange}
								required
								placeholder="Product title"
								className="w-full px-4 py-4 rounded-xl bg-[#23232a] text-white focus:outline-none text-base mb-2"
							/>
							<button
								type="submit"
								className="w-full py-4 bg-gray-500 hover:bg-purple-600 rounded-xl font-bold text-lg transition"
							>
								Save
							</button>
							<button
								type="button"
								className="w-full py-2 text-gray-400 underline"
								onClick={() => setStep(2)}
							>
								← Back
							</button>
						</div>
					</form>
				</>
			)}
		</div>
	);
};

export default Sell;
