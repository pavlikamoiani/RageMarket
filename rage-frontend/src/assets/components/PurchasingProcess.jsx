import React from 'react'
import { MdPersonAddAlt, MdCreditCard, MdInventory2, MdCheckCircle } from "react-icons/md"
import { useTranslation } from 'react-i18next';

const steps = [
	{
		icon: <MdPersonAddAlt className="text-violet-500 text-3xl" />,
		title: "Регистрация",
		desc: "Создайте аккаунт бесплатно за минуту"
	},
	{
		icon: <MdCreditCard className="text-cyan-400 text-3xl" />,
		title: "Оплата",
		desc: "Выберите удобный способ оплаты"
	},
	{
		icon: <MdInventory2 className="text-green-400 text-3xl" />,
		title: "Получение",
		desc: "Получите товар мгновенно или по доставке"
	},
	{
		icon: <MdCheckCircle className="text-yellow-400 text-3xl" />,
		title: "Подтверждение",
		desc: "Подтвердите получение и оставьте отзыв"
	}
]

const PurchasingProcess = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full py-16 px-[7%] bg-[#18181b]">
			<div className="flex flex-col items-center mb-12">
				<h2 className="text-white text-3xl font-bold mb-2 text-center">{t("how_it_works")}</h2>
				<div className="text-zinc-400 text-lg text-center">{t("simple_purchase_process_in_4_steps")}</div>
			</div>
			<div className="relative flex flex-col items-center">
				<div className="absolute left-0 right-0 top-7 z-0 flex items-center justify-center w-full pointer-events-none">
					<div className="mx-auto w-[calc(100%-64px)] h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-yellow-400 rounded-full opacity-70" />
				</div>
				<div className="flex items-start justify-center w-full gap-0 relative z-10">
					{steps.map((step, idx) => (
						<div key={step.title} className="flex flex-col items-center flex-1 min-w-[180px] px-2">
							<div className="bg-[#18181b] rounded-xl shadow-lg flex items-center justify-center w-16 h-16 border border-[#23232a] mb-2 z-10">
								{step.icon}
							</div>
							<div className="mt-6 text-white text-xl font-semibold text-center">{step.title}</div>
							<div className="mt-2 text-zinc-400 text-base text-center">{step.desc}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default PurchasingProcess