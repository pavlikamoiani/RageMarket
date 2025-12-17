import axios from "axios";
import store from "../store/store";

const defaultInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 10000,
	headers: {
		// Этот заголовок заставляет Localtunnel игнорировать страницу-заглушку
		'Bypass-Tunnel-Reminder': 'any-value',
		'Accept': 'application/json',
	}
});

defaultInstance.interceptors.request.use(
	(config) => {
		const token = store.getState().auth.token;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

defaultInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			console.warn("Unauthorized — token expired");
		}
		if (error.response?.status === 511) {
			console.error("Localtunnel требует ручного подтверждения IP по адресу:", import.meta.env.VITE_API_BASE_URL);
		}
		return Promise.reject(error);
	}
);

export default defaultInstance;
