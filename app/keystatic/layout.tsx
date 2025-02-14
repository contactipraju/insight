import KeystaticApp from "./keystatic";

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
				<GoogleAnalytics gaId="G-T0XZY5BLB0" />
			</body>
		</html>
	);
}
