import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import SignInForm from './auth/forms/SignInForm';
import SignUpForm from './auth/forms/SignUpForm';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './pages/root/RootLayout';
import { Home } from './pages';

const App = () => {
	return (
		<main className="flex h-screen">
			<Routes>
				{/* public routes */}
				<Route element={<AuthLayout />}>
					<Route path="/sign-in" element={<SignInForm />} />
					<Route path="/sign-up" element={<SignUpForm />} />
				</Route>

				{/* private routes */}
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>

			<Toaster />
		</main>
	);
};

export default App;
