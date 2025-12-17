import React from 'react'
import { useTranslation } from 'react-i18next';

const ForSellers = () => {
	const { t } = useTranslation();

	return (
		<div className="bg-gradient-to-b from-[#18181b] via-[#23232a] to-[#18181b] border-b border-gray-800 py-16 px-[7%]">
			<div className=" w-full mx-auto rounded-3xl bg-gradient-to-br from-[#112f3d] via-[#23232a] to-[#2d184b] shadow-xl flex flex-col items-center px-10 py-16 relative">
				<div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0" />
				<div className="flex flex-col items-center w-full z-10">
					<span className="mb-6 px-5 py-1 rounded-full bg-[#2d184b] text-violet-400 text-base font-medium shadow-md">
						{t('for_sellers')}
					</span>
					<h2 className="text-white text-4xl font-bold text-center mb-4">{t('start_selling_today')}</h2>
					<div className="text-zinc-400 text-lg text-center mb-8 max-w-xl">
						{t('join_thousands_of_sellers_low_fees_fast_payouts_reliable_deal_protection')}
					</div>
					<div className="flex gap-4 justify-center">
						<button className="px-8 py-3 rounded-lg cursor-pointer bg-violet-500 text-white font-semibold text-lg shadow-lg hover:bg-violet-600 transition">
							{t('become_a_seller')}
						</button>
						<button className="px-8 py-3 rounded-lg cursor-pointer bg-transparent border border-zinc-400 text-white font-semibold text-lg hover:bg-zinc-900 transition">
							{t('learn_more')}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ForSellers