import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
