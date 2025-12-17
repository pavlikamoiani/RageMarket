import { createSlice } from "@reduxjs/toolkit";

let initialUser = null;
try {
	const raw = localStorage.getItem("authUser");
	initialUser = raw && raw !== "undefined" ? JSON.parse(raw) : null;
} catch {
	initialUser = null;
}

const initialToken = localStorage.getItem("authToken");

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: initialToken || null,
		user: initialUser,
	},
	reducers: {
		setToken: (state, action) => {
			state.token = action.payload;
			localStorage.setItem("authToken", action.payload);
		},
		setUser: (state, action) => {
			state.user = action.payload;
			localStorage.setItem("authUser", JSON.stringify(action.payload));
		},
		clearToken: (state) => {
			state.token = null;
			state.user = null;
			localStorage.removeItem("authToken");
			localStorage.removeItem("authUser");
		},
	},
});

export const { setToken, setUser, clearToken } = authSlice.actions;
export default authSlice.reducer;