import KeystaticApp from "./keystatic";

import { Analytics } from '@vercel/analytics/next';

import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
	title: "Keystatic: Admin UI",
};

export default function RootLayout() {
	return (
		<html>
			<head />

			<body>
				<KeystaticApp />
				<Analytics />
				<GoogleAnalytics gaId="G-T0XZY5BLB0" />
			</body>
		</html>
	);
}
