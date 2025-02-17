import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';

import "../styles/tailwind.css";
import "../public/css/common.css";
import "../public/css/zodiak.css";
import "../public/css/plus-jakarta-sans.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
		<Component {...pageProps} />
		<Analytics />
    </div>
  );
}
