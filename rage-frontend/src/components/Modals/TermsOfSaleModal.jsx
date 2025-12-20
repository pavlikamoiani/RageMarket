import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const requirements = [
	"Provide accurate and truthful information about the product",
	"Process the order within 24 hours after payment",
	"Communicate only through the website chat"
];

const forbidden = [
	"It is forbidden to sell goods obtained illegally",
	"It is forbidden to receive payments via direct personal payment details"
];

const TermsOfSaleModal = ({ onClose }) => {
	const [checked, setChecked] = useState({
		req: [false, false, false],
		forb: [false, false]
	});

	const allChecked = checked.req.every(Boolean) && checked.forb.every(Boolean);

	const handleCheck = (type, idx) => {
		setChecked(prev => ({
			...prev,
			[type]: prev[type].map((v, i) => i === idx ? !v : v)
		}));
	};

	const handleAgree = () => {
		localStorage.setItem('agreedToTermsOfSale', 'true');
		onClose();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-60 backdrop-blur-[3px] p-4">
			<div className="relative w-full max-w-lg mx-auto rounded-2xl bg-[#18181b] p-0 shadow-2xl">
				<div className="flex items-center justify-between px-8 pt-7 pb-4 border-b border-[#23232a]">
					<span className="text-xl font-bold text-white">Terms of Sale</span>
					<button onClick={onClose} className="cursor-pointer text-gray-400 hover:text-white text-2xl">
						<IoMdClose />
					</button>
				</div>
				<div className="px-6 py-4">
					<div className="bg-[#23232a] rounded-xl p-5 mb-5">
						<div className="flex items-center mb-4 gap-3">
							<span className="text-2xl">✅</span>
							<span className="text-lg font-bold text-white">Requirements</span>
						</div>
						<ul className="space-y-3">
							{requirements.map((text, i) => (
								<li key={i} className="flex items-center gap-2">
									<span className="text-green-400 text-base">●</span>
									<span className="text-gray-200 text-base flex-1">{text}</span>
									<button
										className={`w-6 h-6 cursor-pointer rounded border flex items-center justify-center transition ${checked.req[i] ? 'bg-green-500 border-green-500' : 'bg-[#23232a] border-gray-600'}`}
										onClick={() => handleCheck('req', i)}
										aria-label="check"
									>
										{checked.req[i] && (
											<svg width="16" height="16" fill="none" viewBox="0 0 16 16">
												<path d="M4 8.5L7 11.5L12 5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
											</svg>
										)}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div className="bg-[#23232a] rounded-xl p-5 mb-5">
						<div className="flex items-center mb-4 gap-3">
							<span className="text-2xl">❌</span>
							<span className="text-lg font-bold text-red-700">Prohibited</span>
						</div>
						<ul className="space-y-3">
							{forbidden.map((text, i) => (
								<li key={i} className="flex items-center gap-2">
									<span className="text-red-700 text-base">●</span>
									<span className="text-gray-200 text-base flex-1">{text}</span>
									<button
										className={`w-6 h-6 cursor-pointer rounded border flex items-center justify-center transition ${checked.forb[i] ? 'bg-red-700 border-red-700' : 'bg-[#23232a] border-gray-600'}`}
										onClick={() => handleCheck('forb', i)}
										aria-label="check"
									>
										{checked.forb[i] && (
											<svg width="16" height="16" fill="none" viewBox="0 0 16 16">
												<path d="M4 8.5L7 11.5L12 5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
											</svg>
										)}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div className="text-gray-400 text-sm mb-4">
						By continuing, you agree to the <a href="#" className="text-blue-400 underline">Terms of Sale</a>
					</div>

					<button
						className={`w-full py-3 rounded-xl text-white text-lg font-medium transition ${allChecked ? 'bg-purple-600 hover:bg-opacity-80 cursor-pointer' : 'bg-gray-700 opacity-60 cursor-not-allowed'}`}
						onClick={allChecked ? handleAgree : undefined}
						disabled={!allChecked}
					>
						I Agree
					</button>
				</div>
			</div>
		</div>
	)
}

export default TermsOfSaleModal
