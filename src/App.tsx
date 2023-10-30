import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import SignInForm from './auth/forms/SignInForm';
import SignUpForm from './auth/forms/SignUpForm';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './root/RootLayout';
import {
	AllUsers,
	CreatePost,
	EditPost,
	Explore,
	Home,
	PostDetails,
	Profile,
	Saved,
	UpdateProfile,
} from './root/pages';

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
					<Route index element={<Explore />} />
					<Route index element={<Saved />} />
					<Route index element={<AllUsers />} />
					<Route index element={<CreatePost />} />
					<Route index element={<EditPost />} />
					<Route index element={<PostDetails />} />
					<Route index element={<Profile />} />
					<Route index element={<UpdateProfile />} />
				</Route>
			</Routes>

			<Toaster />
		</main>
	);
};

export default App;
