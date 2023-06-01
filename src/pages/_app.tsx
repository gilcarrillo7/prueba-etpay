import "../styles/globals.scss";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../store";
import { ThemeProvider } from "styled-components";

const theme = {
	white: "#FFFFFF",
	primary600: "#0876DD",
	primary100: "#E0F2FE",
	secondary600: "#29D2D3",
	secondary100: "#CFFAFE",
	neutral900: "#111827",
	neutral800: "#1F2937",
	neutral700: "#374151",
	neutral600: "#4B5563",
	neutral500: "#6B7280",
	neutral400: "#9CA3AF",
	neutral300: "#D1D5DB",
	neutral200: "#E5E7EB",
	neutral100: "#F3F4F6",
	neutral50: "#F9FAFB",
};

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	);
}
