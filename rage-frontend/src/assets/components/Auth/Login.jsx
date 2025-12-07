import React, { useState } from 'react'
import { FaEnvelope, FaLock, FaGoogle, FaDiscord, FaUser } from 'react-icons/fa'

const Login = () => {
	const [activeTab, setActiveTab] = useState('login')
	const [showPassword, setShowPassword] = useState(false)
	const [showRegPassword, setShowRegPassword] = useState(false)
	const [showRegConfirm, setShowRegConfirm] = useState(false)

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c1a] to-[#18181b]">
			<h2 className="text-3xl font-bold text-white text-center mb-2">Добро пожаловать</h2>
			<p className="text-gray-400 text-center mb-8">Войдите или создайте аккаунт для доступа к маркетплейсу</p>
			<div className="w-full max-w-md bg-[#18181b] rounded-2xl shadow-lg p-8 border border-gray-800">
				<div className="flex mb-6">
					<button
						className={`flex-1 py-2 rounded-lg font-medium text-lg transition ${activeTab === 'login' ? 'bg-purple-500 text-white' : 'bg-black text-gray-300'}`}
						onClick={() => setActiveTab('login')}
					>
						Вход
					</button>
					<button
						className={`flex-1 py-2 rounded-lg font-medium text-lg transition ml-2 ${activeTab === 'register' ? 'bg-purple-500 text-white' : 'bg-black text-gray-300'}`}
						onClick={() => setActiveTab('register')}
					>
						Регистрация
					</button>
				</div>
				{activeTab === 'login' && (
					<form className="space-y-5">
						<div>
							<label className="block text-gray-300 mb-1">Email</label>
							<div className="relative">
								<FaEnvelope className="absolute left-3 top-3 text-gray-400" />
								<input
									type="email"
									placeholder="your@email.com"
									className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#23232a] text-gray-200 focus:outline-none"
								/>
							</div>
						</div>
						<div>
							<label className="block text-gray-300 mb-1">Пароль</label>
							<div className="relative">
								<FaLock className="absolute left-3 top-3 text-gray-400" />
								<input
									type={showPassword ? "text" : "password"}
									placeholder="••••••••"
									className="w-full pl-10 pr-10 py-2 rounded-lg bg-[#23232a] text-gray-200 focus:outline-none"
								/>
								<button
									type="button"
									className="absolute right-3 top-3 text-gray-400"
									onClick={() => setShowPassword(!showPassword)}
									tabIndex={-1}
								>
									{showPassword ? '🙈' : '👁️'}
								</button>
							</div>
						</div>
						<div className="flex items-center justify-between text-sm">
							<label className="flex items-center text-gray-400">
								<input type="checkbox" className="mr-2 accent-purple-500" />
								Запомнить меня
							</label>
							<a href="#" className="text-purple-400 hover:underline">Забыли пароль?</a>
						</div>
						<button
							type="submit"
							className="w-full py-2 rounded-lg bg-purple-500 text-white font-medium text-lg hover:bg-purple-600 transition"
						>
							Войти
						</button>
					</form>
				)}
				{activeTab === 'register' && (
					<form className="space-y-5">
						<div>
							<label className="block text-gray-300 mb-1">Имя пользователя</label>
							<div className="relative">
								<FaUser className="absolute left-3 top-3 text-gray-400" />
								<input
									type="text"
									placeholder="username"
									className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#23232a] text-gray-200 focus:outline-none"
								/>
							</div>
						</div>
						<div>
							<label className="block text-gray-300 mb-1">Email</label>
							<div className="relative">
								<FaEnvelope className="absolute left-3 top-3 text-gray-400" />
								<input
									type="email"
									placeholder="your@email.com"
									className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#23232a] text-gray-200 focus:outline-none"
								/>
							</div>
						</div>
						<div>
							<label className="block text-gray-300 mb-1">Пароль</label>
							<div className="relative">
								<FaLock className="absolute left-3 top-3 text-gray-400" />
								<input
									type={showRegPassword ? "text" : "password"}
									placeholder="Минимум 8 символов"
									className="w-full pl-10 pr-10 py-2 rounded-lg bg-[#23232a] text-gray-200 focus:outline-none"
								/>
								<button
									type="button"
									className="absolute right-3 top-3 text-gray-400"
									onClick={() => setShowRegPassword(!showRegPassword)}
									tabIndex={-1}
								>
									{showRegPassword ? '🙈' : '👁️'}
								</button>
							</div>
						</div>
						<div>
							<label className="block text-gray-300 mb-1">Подтвердите пароль</label>
							<div className="relative">
								<FaLock className="absolute left-3 top-3 text-gray-400" />
								<input
									type={showRegConfirm ? "text" : "password"}
									placeholder="••••••••"
									className="w-full pl-10 pr-10 py-2 rounded-lg bg-[#23232a] text-gray-200 focus:outline-none"
								/>
								<button
									type="button"
									className="absolute right-3 top-3 text-gray-400"
									onClick={() => setShowRegConfirm(!showRegConfirm)}
									tabIndex={-1}
								>
									{showRegConfirm ? '🙈' : '👁️'}
								</button>
							</div>
						</div>
						<div className="flex items-center text-sm">
							<input type="checkbox" className="mr-2 accent-purple-500" />
							<span className="text-gray-400">
								Я принимаю <a href="#" className="text-purple-400 underline">условия использования</a> и <a href="#" className="text-purple-400 underline">политику конфиденциальности</a>
							</span>
						</div>
						<button
							type="submit"
							className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium text-lg hover:opacity-90 transition"
						>
							Создать аккаунт
						</button>
					</form>
				)}
				{activeTab === 'login' && (
					<>
						<div className="flex items-center my-6">
							<hr className="flex-1 border-gray-700" />
							<span className="px-3 text-gray-400">или</span>
							<hr className="flex-1 border-gray-700" />
						</div>
						<div className="space-y-3">
							<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#23232a] text-gray-200 hover:bg-[#2d2d38] transition">
								<FaGoogle className="text-lg" />
								Войти через Google
							</button>
							<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#23232a] text-gray-200 hover:bg-[#2d2d38] transition">
								<FaDiscord className="text-lg" />
								Войти через Discord
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Login